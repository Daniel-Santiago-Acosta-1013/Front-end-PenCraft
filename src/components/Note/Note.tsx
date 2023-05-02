import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../../features/notes/notesActions';
import { AppDispatch } from '../../app/store';
import './Note.scss';

interface NoteProps {
  note: { id: string; title: string; content: string };
}

const Note: React.FC<NoteProps> = ({ note }) => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <div className="note-actions">
        <button onClick={() => navigate(`/notes/${note.id}`)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Note;
