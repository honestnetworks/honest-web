import { createAction } from 'redux-actions';

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_REQUEST_SUCCESS = 'FORGOT_PASSWORD_REQUEST_SUCCESS';
export const RESET_PASSWORD_REQUEST_FAILURE = 'RESET_PASSWORD_REQUEST_FAILURE';
export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_REQUEST_SUCCESS = 'RESET_PASSWORD_REQUEST_SUCCESS';
export const START_FORGOT_PASSWORD_LOADING = 'START_FORGOT_PASSWORD_LOADING';
export const END_FORGOT_PASSWORD_LOADING = 'END_FORGOT_PASSWORD_LOADING';
export const START_RESET_PASSWORD_LOADING = 'START_RESET_PASSWORD_LOADING';
export const END_RESET_PASSWORD_LOADING = 'END_RESET_PASSWORD_LOADING';

export const forgotPasswordRequest = createAction(FORGOT_PASSWORD_REQUEST);
export const forgotPasswordRequestSuccess = createAction(FORGOT_PASSWORD_REQUEST_SUCCESS);
export const resetPasswordRequest = createAction(RESET_PASSWORD_REQUEST);
export const resetPasswordRequestSuccess = createAction(RESET_PASSWORD_REQUEST_SUCCESS);
export const resetPasswordRequestFailure = createAction(RESET_PASSWORD_REQUEST_FAILURE);
export const startForgotPasswordLoading = createAction(START_FORGOT_PASSWORD_LOADING);
export const endForgotPasswordLoading = createAction(END_FORGOT_PASSWORD_LOADING);
export const startResetPasswordLoading = createAction(START_RESET_PASSWORD_LOADING);
export const endResetPasswordLoading = createAction(END_RESET_PASSWORD_LOADING);
