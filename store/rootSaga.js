import {call, takeEvery} from "redux-saga/effects";

// import {userInfoLoad, userInfo, updateUserInfo} from './slice'
import {getUserInfo, updateInfo} from './settings/saga'

export default function* rootSaga() {
    yield call(getUserInfo);
    yield takeEvery('user/updateUserInfo', updateInfo);
}