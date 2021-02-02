import {put, takeLatest, takeEvery, call, all} from 'redux-saga/effects';

import {updateUserInfoFetch, getInfoApi} from '../../services/userService'

export  function* getUserInfo() {
    const data = yield call(getInfoApi)
    const info = yield call(() => new Promise(res => res(data.json())))
    yield put({type: 'user/userInfo', info: info});

}
export  function* updateInfo(action) {
    try {
        console.log(action.payload)
        const data = yield call(updateUserInfoFetch, action.payload);
        const res = yield call(() => new Promise(res => res(data.json())));
        yield put({type: 'user/userInfoUpdateSuccess', answer: res});
    } catch (e) {
        yield put({type: 'user/userInfoUpdateFailed', message: e.message});
    }
}


