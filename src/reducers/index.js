import { combineReducers } from 'redux';
import user from './user';
import passwordRecovery from './password-recovery';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    user,
    passwordRecovery,
    form: formReducer
});

export default rootReducer;
