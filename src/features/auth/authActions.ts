import { AppDispatch } from '../../app/store';
import { loginUser } from '../../api';
import { loginStart, loginSuccess, loginFailed } from './authSlice';

export const login = (credentials: { email: string; password: string }) => async (dispatch: AppDispatch) => {
  dispatch(loginStart());
  try {
    const response = await loginUser(credentials);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailed());
  }
};
