import { observer } from "mobx-react-lite";
import Results from "./components/Results"
import Settings from "./components/Settings";
import TextInput from "./components/TextInput"
import exerciseStore from "./store/ExerciseStore";

function App() {
  return (
    <main>
      <Results />
      <div className="min-h-screen relative flex items-center justify-center">
        <div className="absolute top-20 max-sm:top-8">
          <Settings />
        </div>
        <div className="self-center relative">
          <div className="text-main-color text-xl absolute -top-8 left-8">{exerciseStore.input.split(' ').length - 1} / {exerciseStore.wordCount}</div>
          <TextInput />
        </div>
      </div>
    </main>
  )
}

export default observer(App);
