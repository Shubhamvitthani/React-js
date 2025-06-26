// components/NoteList.jsx
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote } from '../features/notes/notesSlice';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

const NoteList = () => {
  const notes = useSelector((state) => state.notes.list);
  const dispatch = useDispatch();
  const [openId, setOpenId] = useState(null);
  const [viewAll, setViewAll] = useState(false);

  const toggleNote = (id) => {
    if (viewAll) return;
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleViewAll = () => {
    setViewAll((prev) => !prev);
    setOpenId(null);
  };

  return (
    <div>
      {notes.length > 0 && (
        <div className="d-flex justify-content-end mb-3">
          <button
          style={{fontFamily:"cursive"}}
            className={`btn btn-sm ${viewAll ? 'btn-outline-warning' : 'btn-outline-info'} btn-gradient px-3`}
            onClick={handleViewAll}
          >
            {viewAll ? 'Hide All' : 'View All'}
          </button>
        </div>
      )}

      <div className="row">
        {notes.map((note) => (
          <div key={note.id} className="col-md-6 mb-3">
            <div
              className="card bg-gradient-light text-dark shadow border-0"
              style={{ cursor: viewAll ? 'default' : 'pointer', fontFamily: 'cursive' }}
              onClick={() => toggleNote(note.id)}
            >
              <div className="card-body">
                <h6 className="card-title d-flex justify-content-between align-items-center">
                  {note.title}
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(deleteNote(note.id));
                    }}
                  >
                    Delete
                  </button>
                </h6>
                <Collapse in={viewAll || openId === note.id}>
                  <div>
                    <hr />
                    <p className="card-text">{note.text}</p>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
