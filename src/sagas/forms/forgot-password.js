import {takeEvery, put, call} from 'redux-saga/effects';
import {SubmissionError} from 'redux-form';
import * as authAPI from '../../api/auth'; // let's imagine we have some api client
import {forgotPassword} from '../../actions/forms/forgot-password'; // importing our action
import {forgotPasswordRequestSuccess} from '../../actions/password-recovery';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function* handleForgotPasswordSaga(action) {
    const {email} = action.payload;

    try {
        const responseMessage = yield call(authAPI.forgotPassword, {email});
        yield sleep(2000); //simulate call duration

        yield put(forgotPasswordRequestSuccess(responseMessage));
        yield put(forgotPassword.success());
    } catch (error) {
        const formError = new SubmissionError({
            _error: 'User with this email is not found', // specific field error
        });
        yield put(forgotPassword.failure(formError));
    }
}

export default function* forgotPasswordWatcherSaga() {
    yield takeEvery(forgotPassword.REQUEST, handleForgotPasswordSaga); // see details what is REQUEST param below
}
