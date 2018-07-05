import {takeEvery, put, call} from 'redux-saga/effects';
import {SubmissionError} from 'redux-form';
import * as authAPI from '../../api/auth'; // let's imagine we have some api client
import {login} from '../../actions/forms/login'; // importing our action
import {updateUserStore} from '../../actions/user';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function* handleLoginSaga(action) {
    const {email, password} = action.payload;
    try {
        console.log('email, password', email, password);
        let response = yield call(authAPI.login, {email, password}); // calling our api method
        yield sleep(500); //simulate call duration
        console.log('Responce content',response.content)
        // yield put(loadSession(response.content));
        yield put(updateUserStore(response.content));
        yield put(login.success());
    } catch (error) {
        const formError = new SubmissionError({
            login: 'User with this login is not found', // specific field error
            _error: 'Login failed, please check your credentials and try again', // global form error
        });
        yield put(login.failure(formError));
    }
}

export default function* loginWatcherSaga() {
    yield takeEvery(login.REQUEST, handleLoginSaga); // see details what is REQUEST param below
}
