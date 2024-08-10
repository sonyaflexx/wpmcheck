import { useEffect, useRef, ChangeEvent, useState } from 'react';
import { observer } from 'mobx-react-lite';
import exerciseStore from '../../store/ExerciseStore';

const TextInput: React.FC = observer(() => {
    const { input } = exerciseStore;
    const [isFocused, setIsFocused] = useState(true);
    const hiddenInputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (input.length === exerciseStore.text.length) {
            exerciseStore.finishExercise();
        }
    }, [input]);

    useEffect(() => {
        if (hiddenInputRef.current && !isFocused) {
            hiddenInputRef.current.focus();
        }
    }, [isFocused]);

    useEffect(() => {
        const scrollToActiveText = () => {
            if (containerRef.current) {
                const container = containerRef.current;
                const containerRect = container.getBoundingClientRect();
                const lineHeight = parseInt(getComputedStyle(container).lineHeight, 10);

                const textSpans = Array.from(container.querySelectorAll('span'));
                const targetSpan = textSpans[input.length] || textSpans[textSpans.length - 1];

                if (targetSpan) {
                    const spanRect = targetSpan.getBoundingClientRect();
                    const spanTop = spanRect.top - containerRect.top + container.scrollTop;
                    const spanBottom = spanRect.bottom - containerRect.top + container.scrollTop;

                    if (spanBottom > container.scrollTop + container.clientHeight || spanTop < container.scrollTop) {
                        container.scrollTop = Math.max(0, spanTop - (container.clientHeight / 2) + (lineHeight / 1.67));
                    }
                }
            }
        };

        requestAnimationFrame(scrollToActiveText);
    }, [input]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        const newLength = newValue.length;
        
        const lastChar = newValue.slice(-1);
        const currentChar = exerciseStore.text[newLength - 1];
    
        const isSpaceExpected = currentChar === ' ';
        const isLastCharSpace = lastChar === ' ';
    
        if (isLastCharSpace && !isSpaceExpected) {
            return;
        }
    
        if (newLength >= exerciseStore.input.length) {
            if (isLastCharSpace || !isSpaceExpected) {
                exerciseStore.setInput(newValue);
            }
        } else {
            const existingInput = exerciseStore.input;
            const lastCharInInput = existingInput.slice(-1);
            
            if (lastCharInInput !== ' ') {
                exerciseStore.setInput(newValue);
            }
        }
    };

    const handleClick = () => {
        if (hiddenInputRef.current) {
            hiddenInputRef.current.focus();
        }
    };

    const renderText = () => {
        return exerciseStore.text.split('').map((char: string, idx: number) => {
            let color = '';
            if (idx < input.length) {
                color = input[idx] === char ? 'text-text-color' : 'text-colorful-error-color';
            }
            return (
                <span key={idx} className={color}>
                    {char}
                </span>
            );
        });
    };

    return (
        <div
            className="w-full max-w-[1440px] px-8 relative"
            onClick={handleClick}
        >
            <div
                ref={containerRef}
                className="text-3xl text-sub-color overflow-hidden"
                style={{ maxHeight: 'calc(3 * 1.21em)', lineHeight: '1.2em' }}
            >
                {renderText()}
            </div>

            <div style={{ height: 'calc(100% + 10px)' }} className={`absolute backdrop-blur-sm w-full top-0 left-0 text-center flex items-center justify-center gap-2 max-[550px]:flex-col px-4 text-xl transition-opacity ${isFocused ? 'opacity-0' : 'opacity-100'}`}>
                <i className="fas fa-fw fa-mouse-pointer" />
                <span>Нажмите сюда, чтобы приступить к упражнениям</span>
            </div>

            <input
                ref={hiddenInputRef}
                type="text"
                value={input}
                onChange={handleChange}
                disabled={exerciseStore.isFinished}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="absolute left-0 top-0 w-full h-full opacity-0 cursor-default z-10"
                autoFocus
            />
        </div>
    );
});

export default TextInput;
