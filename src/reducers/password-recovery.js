import {
    FORGOT_PASSWORD_REQUEST_SUCCESS,
    RESET_PASSWORD_REQUEST_SUCCESS,
    RESET_PASSWORD_REQUEST_FAILURE,
    START_FORGOT_PASSWORD_LOADING,
    START_RESET_PASSWORD_LOADING,
    END_FORGOT_PASSWORD_LOADING,
    END_RESET_PASSWORD_LOADING
} from '../actions/password-recovery';

const initialState = {
    forgotPasswordMessage: '',
    forgotPasswordLoading: false,

    resetPasswordMessage: '',
    resetPasswordLoading: false,
    resetPasswordFailure: false
};

const layout = (state = initialState, action) => {
    switch (action.type) {
        case FORGOT_PASSWORD_REQUEST_SUCCESS:
            return {
                ...state,
                forgotPasswordMessage: action.payload
            };
        case RESET_PASSWORD_REQUEST_SUCCESS:
            return {
                ...state,
                resetPasswordMessage: action.payload,
                resetPasswordFailure: false
            };
        case RESET_PASSWORD_REQUEST_FAILURE:
            return {
                ...state,
                resetPasswordMessage: action.payload,
                resetPasswordFailure: true
            };
        case START_FORGOT_PASSWORD_LOADING:
            return {
                ...state,
                forgotPasswordLoading: true
            };
        case END_FORGOT_PASSWORD_LOADING:
            return {
                ...state,
                forgotPasswordLoading: false
            };
        case START_RESET_PASSWORD_LOADING:
            return {
                ...state,
                resetPasswordLoading: true
            };
        case END_RESET_PASSWORD_LOADING:
            return {
                ...state,
                resetPasswordLoading: false
            };
        default:
            return state
    }
};

export default layout;