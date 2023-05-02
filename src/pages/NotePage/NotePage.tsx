import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchNote } from '../../features/notes/notesActions';
import NoteForm from '../../components/NoteForm/NoteForm';
import './NotePage.scss';
import { useAppDispatch } from '../../app/store';

const NotePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const note = useSelector((state: any) => state.notes.notes.find((note: any) => note.id === id));
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        // Manejar el caso en que id es undefined.
        // Puede mostrar un mensaje de error o redirigir al usuario a otra página.
        console.error('Note ID is undefined');
        navigate('/404');
        return;
      }

      if (!note) {
        await dispatch(fetchNote(id));
      }
      setIsFetching(false);
    };

    fetchData();
  }, [dispatch, id, note, navigate]);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!note) {
    return <div>Note not found</div>;
  }

  return (
    <div className="note-page">
      <h1>Edit Note</h1>
      <NoteForm note={note} onComplete={() => navigate('/')} />
    </div>
  );
};

export default NotePage;
