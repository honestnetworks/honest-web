import {
    UPDATE_USER_STORE,
    UPDATE_USER_TO_UPDATE,
    UPLOAD_AVATAR_IMAGE,
    UPDATE_USER_ERROR
} from '../actions/user';

const initialState = {
    user: null,
    userToUpdate: null,
    avatarFileUrl: null,
    error: null
};
const user = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_STORE:
            return {
                ...state,
                user: action.payload,
                userToUpdate: null,
                avatarFileUrl: null,
                error: null
            };
        case UPDATE_USER_TO_UPDATE:
            return {
                ...state,
                userToUpdate: action.payload
            };
        case UPLOAD_AVATAR_IMAGE:
            return {
                ...state,
                avatarFileUrl: action.payload.avatarFileUrl
            };
        case UPDATE_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                userToUpdate: null
            };
        default:
            return state
    }
};
export default user;