import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import {createWrapper} from 'next-redux-wrapper'

import reducer from "./rootReducer";
import rootSaga from "./rootSaga";


const makeStore = context => {
    const sagaMiddleware = createSagaMiddleware()
    const store = configureStore({
        reducer,
        middleware: [...getDefaultMiddleware(), sagaMiddleware]
    })
    store.sagaTask = sagaMiddleware.run(rootSaga)
    return store
}

const wrapper = createWrapper(makeStore)

export default wrapper