import { observer } from 'mobx-react-lite';
import exerciseStore from '../../store/ExerciseStore';
import Modal from '../UI/Modal';

const Results: React.FC = observer(() => {
  return (
    <Modal isVisible={exerciseStore.isFinished} onClose={() => exerciseStore.restartExercise()}>
      <h2 className='text-3xl font-bold mb-4'>
        Вы ввели {exerciseStore.wordCount} слов за {exerciseStore.timeTaken} с.
      </h2>
      <div><span className='text-main-color font-medium'>Слов в минуту (WPM):</span> {exerciseStore.wpm}</div>
      <div><span className='text-colorful-error-color font-medium'>Ошибок:</span> {exerciseStore.errors}</div>
      <button onClick={() => exerciseStore.restartExercise()} className="rounded-xl mt-6 px-4 py-2 hover:bg-main-color transition-colors bg-text-color text-zinc-900">
        Ещё раз
      </button>
    </Modal>
  );
});

export default Results;