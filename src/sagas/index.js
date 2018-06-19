import { all } from 'redux-saga/effects';
import watchUserSaga from './user';
import watchPasswordRecoverySaga from './password-recovery';
import watchLoginFormSaga from './forms/login';
import watcherForgotPasswordSaga from './forms/forgot-password';
import formActionSaga from 'redux-form-saga';

export default function* rootSaga() {
    yield all([
        watchUserSaga(),
        watchPasswordRecoverySaga(),
        watchLoginFormSaga(),
        watcherForgotPasswordSaga(),
        formActionSaga()
    ]);
}
