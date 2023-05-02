import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNote, updateNote } from '../../features/notes/notesActions';
import { AppDispatch } from '../../app/store';
import './NoteForm.scss';

interface NoteFormProps {
  note?: { id: string; title: string; content: string };
  onComplete?: () => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ note, onComplete }) => {
  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');

  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (note) {
      dispatch(updateNote({ ...note, title, content }));
    } else {
      dispatch(createNote({ title, content }));
    }

    if (onComplete) {
      onComplete();
    }
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">{note ? 'Update' : 'Create'} Note</button>
    </form>
  );
};

export default NoteForm;

