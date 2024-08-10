import React, { useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import exerciseStore from '../../store/ExerciseStore';
import WordCountSelect from '../UI/WordCountSelect';
import ToggleButton from '../UI/ToggleButton';
import KeyboardStatus from '../UI/KeyboardStatus';

const Settings: React.FC = observer(() => {
    const handlePunctuationToggle = useCallback(() => {
        exerciseStore.setPunctuation(!exerciseStore.punctuation);
    }, [exerciseStore.punctuation]);

    const handleNumbersToggle = useCallback(() => {
        exerciseStore.setNumbers(!exerciseStore.numbers);
    }, [exerciseStore.numbers]);

    const handleRestart = useCallback(() => {
        exerciseStore.restartExercise();
    }, []);

    return (
        <div className="flex gap-6 bg-sub-bg-color py-2 px-6 rounded-xl">
            <KeyboardStatus className='max-[800px]:hidden' />
            <div className="w-1 h-5 my-auto bg-sub-color opacity-10 max-[800px]:hidden" />
            <div className="flex gap-6">
                <ToggleButton
                    isActive={exerciseStore.punctuation}
                    onClick={handlePunctuationToggle}
                >
                    <i className="fas fa-fw fa-at text-sm" />
                    <span className="max-sm:hidden"> punctuation</span>
                </ToggleButton>
                <ToggleButton
                    isActive={exerciseStore.numbers}
                    onClick={handleNumbersToggle}
                >
                    <i className="fas fa-fw fa-hashtag text-sm" />
                    <span className="max-sm:hidden"> numbers</span>
                </ToggleButton>
            </div>
            <div className="w-1 h-5 my-auto bg-sub-color opacity-10" />
            <WordCountSelect />
            <div className="w-1 h-5 my-auto bg-sub-color opacity-10" />
            <ToggleButton
                isActive={false}
                onClick={handleRestart}
            >
                <i className="fas fa-fw fa-redo-alt text-sm"></i>
            </ToggleButton>
        </div>
    );
});

export default Settings;