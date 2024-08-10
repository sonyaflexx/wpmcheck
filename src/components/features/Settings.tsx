import { observer } from 'mobx-react-lite';
import exerciseStore from '../../store/ExerciseStore';
import WordCountSelect from '../UI/WordCountSelect';
import ToggleButton from '../UI/ToggleButton';
import KeyboardStatus from '../UI/KeyboardStatus';

const Settings = observer(() => {
    return (
        <div className="flex gap-6 bg-sub-bg-color py-2 px-6 rounded-xl">
            <KeyboardStatus className='max-[800px]:hidden' />
            <div className="w-1 h-5 my-auto bg-sub-color opacity-10 max-[800px]:hidden" />
            <div className="flex gap-6">
                <ToggleButton
                    isActive={exerciseStore.punctuation}
                    onClick={() => exerciseStore.setPunctuation(!exerciseStore.punctuation)}
                >
                    <i className="fas fa-fw fa-at text-sm" />
                    <span className="max-sm:hidden"> punctuation</span>
                </ToggleButton>
                <ToggleButton
                    isActive={exerciseStore.numbers}
                    onClick={() => exerciseStore.setNumbers(!exerciseStore.numbers)}
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
                onClick={() => exerciseStore.restartExercise()}
            >
                <i className="fas fa-fw fa-redo-alt text-sm"></i>
            </ToggleButton>
        </div>
  );
});

export default Settings;
