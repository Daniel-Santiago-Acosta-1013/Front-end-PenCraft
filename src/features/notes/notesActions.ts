import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Note } from "./types";

const baseUrl = 'http://localhost:4004';

const headers = {
  'Authorization': 'Bearer your_token_here',
  // Añade más headers aquí si es necesario
};

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  const response = await axios.get(`${baseUrl}/notes`, { headers });
  return response.data as Note[];
});

export const fetchNote = createAsyncThunk('notes/fetchNote', async (id: string) => {
  const response = await axios.get(`${baseUrl}/notes/${id}`, { headers });
  return response.data;
});

export const createNote = createAsyncThunk('notes/createNote', async (note: any) => {
  const response = await axios.post(`${baseUrl}/notes`, note, { headers });
  return response.data;
});

export const updateNote = createAsyncThunk('notes/updateNote', async (note: any) => {
  const response = await axios.put(`${baseUrl}/notes/${note.id}`, note, { headers });
  return response.data;
});

export const deleteNote = createAsyncThunk('notes/deleteNote', async (id: string) => {
  await axios.delete(`${baseUrl}/notes/${id}`, { headers });
  return id;
});
