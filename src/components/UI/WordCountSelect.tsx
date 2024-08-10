import { observer } from 'mobx-react-lite';
import exerciseStore from '../../store/ExerciseStore';
import ToggleButton from './ToggleButton';

const WordCountSelect: React.FC = observer(() => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        exerciseStore.setWordCount(parseInt(event.target.value));
    };

    return (
        <>
            <div className="flex gap-4 max-[370px]:hidden">
                {[10, 30, 60, 150].map(count => (
                    <ToggleButton
                        key={count}
                        isActive={exerciseStore.wordCount === count}
                        onClick={() => exerciseStore.setWordCount(count)}
                    >
                        {count}
                    </ToggleButton>
                ))}
            </div>

            <select
                value={exerciseStore.wordCount}
                onChange={handleChange}
                className="border-none ring-none bg-sub-bg-color min-[370px]:hidden"
            >
                <option value={10}>10</option>
                <option value={30}>30</option>
                <option value={60}>60</option>
                <option value={150}>150</option>
            </select>
        </>
    );
});

export default WordCountSelect;