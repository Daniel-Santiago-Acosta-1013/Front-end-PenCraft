import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Note } from "./types";

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  const response = await axios.get('/api/notes');
  return response.data as Note[];
});


export const fetchNote = createAsyncThunk('notes/fetchNote', async (id: string) => {
  const response = await axios.get(`/api/notes/${id}`);
  return response.data;
});

export const createNote = createAsyncThunk('notes/createNote', async (note: any) => {
  const response = await axios.post('/api/notes', note);
  return response.data;
});

export const updateNote = createAsyncThunk('notes/updateNote', async (note: any) => {
  const response = await axios.put(`/api/notes/${note.id}`, note);
  return response.data;
});

export const deleteNote = createAsyncThunk('notes/deleteNote', async (id: string) => {
  await axios.delete(`/api/notes/${id}`);
  return id;
});