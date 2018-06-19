import { createAction } from 'redux-actions';

export const LOAD_USER = 'LOAD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_AVATAR = 'UPDATE_AVATAR';
export const UPDATE_USER_STORE = 'UPDATE_USER_STORE';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';
export const UPLOAD_AVATAR_IMAGE = 'UPLOAD_AVATAR_IMAGE';
export const UPDATE_USER_TO_UPDATE = 'UPDATE_USER_TO_UPDATE';

export const updateUserError = createAction(UPDATE_USER_ERROR);
export const updateUserStore = createAction(UPDATE_USER_STORE);

