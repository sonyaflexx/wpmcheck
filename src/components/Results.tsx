import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import exerciseStore from '../store/ExerciseStore';

const Results: React.FC = observer(() => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                exerciseStore.restartExercise();
            }
        };

        if (exerciseStore.isFinished) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [exerciseStore.isFinished]);
    return (
        <div className={`fixed z-10 w-full h-full top-0 left-0 flex items-center justify-center backdrop-blur-md ${exerciseStore.isFinished ? 'opacity-100 transition-opacity' : 'opacity-0 pointer-events-none'}`}>
            <div ref={modalRef} className="bg-sub-bg-color px-12 py-8 rounded-2xl text-xl mx-4">
                <h2 className='text-3xl font-bold mb-4'>Вы ввели {exerciseStore.wordCount} слов за {exerciseStore.timeTaken} с.</h2>
                <div><span className='text-main-color font-medium'>Слов в минуту (WPM):</span> {exerciseStore.wpm}</div>
                <div><span className='text-colorful-error-color font-medium'>Ошибок:</span> {exerciseStore.errors}</div>
                <button 
                    onClick={() => exerciseStore.restartExercise()}
                    className="mt-6 py-2 px-4 bg-text-color text-zinc-900 rounded-xl font-medium"
                >
                    Ещё раз
                </button>
            </div>
        </div>
    );
});

export default Results;
