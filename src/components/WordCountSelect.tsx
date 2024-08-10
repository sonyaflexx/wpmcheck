import React from 'react';
import { observer } from 'mobx-react-lite';
import exerciseStore from '../store/ExerciseStore';

const WordCountSelect: React.FC = observer(() => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        exerciseStore.setWordCount(parseInt(event.target.value));
    };

    return (
        <select
            value={exerciseStore.wordCount}
            onChange={handleChange}
            className="border-none ring-none bg-sub-bg-color"
        >
            <option value={10}>10</option>
            <option value={30}>30</option>
            <option value={60}>60</option>
            <option value={150}>150</option>
        </select>
    );
});

export default WordCountSelect;