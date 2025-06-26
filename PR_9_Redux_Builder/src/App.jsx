import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css'

const App = () => {
  return (
    <div className="min-vh-100 py-5 px-3 bg-gradient-light text-white">
      <NoteForm />
      <NoteList />
    </div>

  );
};

export default App;
