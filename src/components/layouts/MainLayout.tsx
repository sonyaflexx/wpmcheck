import { observer } from "mobx-react-lite";
import exerciseStore from "../../store/ExerciseStore";
import Results from "../features/Results";
import Settings from "../features/Settings";
import TextInput from "../features/TextInput";
import WordCounter from "../features/WordCounter";

const MainLayout = () => {
    return (
        <main>
            <Results />
            <div className="min-h-screen relative flex items-center justify-center">
                <div className="absolute top-20 max-sm:top-8">
                    <Settings />
                </div>
                <div className="self-center relative">
                    <WordCounter current={exerciseStore.input.split(' ').length - 1} total={exerciseStore.wordCount} className="absolute -top-8 left-8" />
                    <TextInput />
                </div>
            </div>
        </main>
    )
}

export default observer(MainLayout);