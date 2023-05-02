import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchNotes } from '../../features/notes/notesActions';
import Note from '../../components/Note/Note';
import NoteForm from '../../components/NoteForm/NoteForm';
import { RootState } from '../../app/rootReducer';
import { AppDispatch } from '../../app/store';
import { useDispatch } from 'react-redux';
import { NoteType } from '../../types/noteTypes'; // Asegúrate de ajustar la ruta de importación según la ubicación de tu archivo noteTypes.ts
import './HomePage.scss';

const HomePage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.notes.notes);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  return (
    <div className="home-page">
      <h1>Your Notes</h1>
      <NoteForm />
      <div className="notes-container">
        {notes.map((note: NoteType) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;