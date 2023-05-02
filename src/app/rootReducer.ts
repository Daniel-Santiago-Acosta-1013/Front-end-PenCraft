import { combineReducers } from '@reduxjs/toolkit';
import notesReducer from '../features/notes/notesSlice';
import authReducer from '../features/auth/authSlice';

const rootReducer = combineReducers({
  notes: notesReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
