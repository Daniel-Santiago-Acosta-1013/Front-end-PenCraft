import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://your-api-url.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginUser = (credentials: { email: string; password: string }) => {
  return instance.post('/auth/login', credentials);
};

export const fetchNotes = (token: string) => {
  return instance.get('/notes', { headers: { Authorization: `Bearer ${token}` } });
};

export const createNote = (noteData: any, token: string) => {
  return instance.post('/notes', noteData, { headers: { Authorization: `Bearer ${token}` } });
};

export const updateNote = (noteId: string, updatedNoteData: any, token: string) => {
  return instance.put(`/notes/${noteId}`, updatedNoteData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteNote = (noteId: string, token: string) => {
  return instance.delete(`/notes/${noteId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
