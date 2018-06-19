import { call, put, takeEvery } from 'redux-saga/effects';
import * as userApi from '../api/user'

import {
    updateUserStore,
    updateUserError,
    LOAD_USER, UPDATE_USER
} from '../actions/user';

function* updateUserSaga(action){
    const { payload } = action;
    try {
       let updateUser = payload.user;
        const user = yield call(userApi.updateUser, payload.userId, updateUser);
        if(user.content){
            yield put(updateUserStore(user.content));
        }else{
            console.log('updateUserSaga',user.error);
            yield put(updateUserError(user.error));

        }
    } catch (e) {
        console.log("ERROR LOAD_USER ", e)
    }
}

function* loadUserSaga(action) {
    const { payload } = action;
    try {
        const user = yield call(userApi.getUser, payload);
        if(user){
            yield put(updateUserStore(user));
        }
    } catch (e) {
        console.log("ERROR LOAD_USER ", e)
    }
}

function* watchLoadAllUserSaga() {
    yield takeEvery(LOAD_USER, loadUserSaga);
    yield takeEvery(UPDATE_USER, updateUserSaga);
}

export default watchLoadAllUserSaga;