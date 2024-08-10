import { observer } from "mobx-react-lite";
import exerciseStore from "../store/ExerciseStore";
import WordCountSelect from "./WordCountSelect";

const Settings = observer(() => {
    return (
        <div className="flex gap-6 bg-sub-bg-color py-2 px-6 rounded-xl">
            <div className="flex gap-6">
                <button
                    className={`${ exerciseStore.punctuation ? 'text-main-color' : 'text-sub-alt-color' } hover:text-white transition-colors active:text-sub-alt-color`}
                    onClick={() => exerciseStore.setPunctuation(!exerciseStore.punctuation)}
                >
                    <i className="fas fa-fw fa-at text-sm" />
                    <span className="max-sm:hidden"> punctuation</span>
                </button>
                <button
                    className={`${ exerciseStore.numbers ? 'text-main-color' : 'text-sub-alt-color' } hover:text-white transition-colors active:text-sub-alt-color`}
                    onClick={() => exerciseStore.setNumbers(!exerciseStore.numbers)}
                >
                    <i className="fas fa-fw fa-hashtag text-sm" />
                    <span className="max-sm:hidden"> numbers</span>
                </button>
            </div>
            <div className="w-1 h-5 my-auto bg-sub-color opacity-10" />
            <div className="flex gap-4 max-[370px]:hidden">
                <button
                    className={`${ exerciseStore.wordCount === 10 ? 'text-main-color' : 'text-sub-alt-color' } hover:text-white transition-colors active:text-sub-alt-color`}
                    onClick={() => exerciseStore.setWordCount(10)}
                >
                    10
                </button>
                <button
                    className={`${ exerciseStore.wordCount === 30 ? 'text-main-color' : 'text-sub-alt-color' } hover:text-white transition-colors active:text-sub-alt-color`}
                    onClick={() => exerciseStore.setWordCount(30)}
                >
                    30
                </button>
                <button
                    className={`${ exerciseStore.wordCount === 60 ? 'text-main-color' : 'text-sub-alt-color' } hover:text-white transition-colors active:text-sub-alt-color`}
                    onClick={() => exerciseStore.setWordCount(60)}
                >
                    60
                </button>
                <button
                    className={`${ exerciseStore.wordCount === 150 ? 'text-main-color' : 'text-sub-alt-color' } hover:text-white transition-colors active:text-sub-alt-color`}
                    onClick={() => exerciseStore.setWordCount(150)}
                >
                    150
                </button>
            </div>
            <div className="min-[370px]:hidden">
                <WordCountSelect />
            </div>
            <div className="w-1 h-5 my-auto bg-sub-color opacity-10" />
            <button onClick={() => exerciseStore.restartExercise()}>
                <i className="fas fa-fw fa-redo-alt text-sm text-sub-alt-color hover:text-white transition-colors active:text-sub-alt-color"></i>
            </button>
        </div>
    );
});

export default Settings;
