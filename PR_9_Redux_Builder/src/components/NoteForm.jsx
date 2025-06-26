// components/NoteForm.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../features/notes/notesSlice';
import { v4 as uuidv4 } from 'uuid';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (title.trim() && text.trim()) {
      dispatch(addNote({ id: uuidv4(), title, text }));
      setTitle('');
      setText('');
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="card note-form-card p-3 mb-4 shadow border-0 w-100" style={{ maxWidth: '500px' }}>
        <h5 style={{fontFamily:"cursive"}} className="mb-3 text-dark">✏️ Add a Note</h5>
        <input
        style={{fontFamily:"cursive"}}
          className=" form-control mb-2 bg-light border-0"
          type="text"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
        style={{fontFamily:"cursive"}}
          className="form-control mb-3 bg-light border-0"
          placeholder="Note text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={2}
        />
        <button style={{fontFamily:"cursive"}} className="btn btn-gradient btn-sm px-3" onClick={handleAdd}>
          ➕ Add Note
        </button>
      </div>
    </div>
  );
};

export default NoteForm;
