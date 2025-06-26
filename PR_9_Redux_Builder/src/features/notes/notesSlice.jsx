// features/notes/notesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loadNotes = () => {
  const data = localStorage.getItem('notes');
  return data ? JSON.parse(data) : [];
};

const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes));
};

const initialState = {
  list: loadNotes(),
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.list.push(action.payload);
      saveNotes(state.list); // Save to localStorage
    },
    deleteNote: (state, action) => {
      state.list = state.list.filter((note) => note.id !== action.payload);
      saveNotes(state.list); // Save updated list
    },
  },
});

export const { addNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
