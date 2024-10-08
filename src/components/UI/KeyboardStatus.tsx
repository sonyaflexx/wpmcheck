import React, { useState, useEffect, useCallback } from 'react';

interface KeyBoardStatusProps {
    className?: string;
}

const KeyboardStatus: React.FC<KeyBoardStatusProps> = ({ className }) => {
    const [capsLock, setCapsLock] = useState(false);
    const [keyboardLayout, setKeyboardLayout] = useState<string>('--');

    const handleKeydown = useCallback((event: KeyboardEvent) => {
        setCapsLock(event.getModifierState('CapsLock'));
        determineLayout(event);
    }, []);

    const determineLayout = useCallback((event: KeyboardEvent) => {
        const char = event.key;
        const code = event.code;

        const isLatin = /^[a-zA-Z]$/.test(char);
        const isCyrillic = /^[а-яёА-ЯЁ]$/.test(char);

        if (isLatin && /Key[A-Z]/.test(code)) {
            setKeyboardLayout('Latin');
        } else if (isCyrillic && /Key[A-Z]/.test(code)) {
            setKeyboardLayout('Cyrillic');
        }
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    }, [handleKeydown]);

    return (
        <div className={`flex gap-6 items-center text-sub-alt-color ${className}`}>
            <div>
                <span className={`${capsLock ? `text-red-500` : ''} flex gap-2 items-center`}>
                    <i className="fas fa-lock text-sm" />
                    Caps Lock: {capsLock ? 'On' : 'Off'}
                </span>
            </div>
            <div>
                <span className={`${keyboardLayout === 'Latin' || keyboardLayout === '--' ? '' : 'text-red-500'} flex gap-2 items-center`}>
                    <i className="fas fa-keyboard text-sm" />
                    {keyboardLayout}
                </span>
            </div>
        </div>
    );
};

export default React.memo(KeyboardStatus);
