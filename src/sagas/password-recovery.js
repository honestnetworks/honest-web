import { call, put, takeEvery } from 'redux-saga/effects';

import {
    FORGOT_PASSWORD_REQUEST,
    forgotPasswordRequestSuccess,
    RESET_PASSWORD_REQUEST,
    resetPasswordRequestSuccess,
    resetPasswordRequestFailure,
    startForgotPasswordLoading,
    startResetPasswordLoading,
    endForgotPasswordLoading,
    endResetPasswordLoading,
} from '../actions/password-recovery';
import * as authAPI from "../api/auth";

function* forgotPasswordSaga(action){
    const { payload } = action;
    try {
        yield put(startForgotPasswordLoading());
        const responseMessage = yield call(authAPI.forgotPassword, payload);
        if(responseMessage){
            yield put(forgotPasswordRequestSuccess(responseMessage));
        }
    } catch (e) {
        // yield put(vendorAdjustmentFailure(e));
        console.log("ERROR LOAD_ALL_DECKS ", e)
    }finally {
        yield put(endForgotPasswordLoading());
    }
}


function* resetPasswordSaga(action){
    const { payload } = action;
    try {
        yield put(startResetPasswordLoading());
        const responseMessage = yield call(authAPI.resetPassword, payload);
        if(responseMessage){
            if(responseMessage.content){
                yield put(resetPasswordRequestSuccess(responseMessage.content));
            }else {
                console.log('failure',responseMessage);
                yield put(resetPasswordRequestFailure(responseMessage.error));
            }
        }
    } catch (e) {
        // yield put(vendorAdjustmentFailure(e));
        console.log("ERROR LOAD_ALL_DECKS ", e)
    }finally {
        yield put(endResetPasswordLoading());
    }
}

function* watchLoadAllRecoveryPasswordSaga(){
    yield takeEvery(FORGOT_PASSWORD_REQUEST, forgotPasswordSaga);
    yield takeEvery(RESET_PASSWORD_REQUEST, resetPasswordSaga);
}

export default watchLoadAllRecoveryPasswordSaga;
