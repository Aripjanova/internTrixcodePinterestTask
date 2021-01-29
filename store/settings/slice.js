import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {}
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userInfoLoad(state) {
            state.loading = true
        },
        userInfo(state, action) {
            state.user = action.info
        },
        updateUserInfo(state, action) {
            console.log(action)
            state.info = action.newInfo
        },
    },
})
console.log(userSlice.actions.updateUserInfo)
export const {userInfoLoad, userInfo, updateUserInfo} = userSlice.actions;
export default userSlice.reducer;