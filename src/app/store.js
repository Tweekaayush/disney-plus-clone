import { configureStore, combineReducers } from '@reduxjs/toolkit'

import userReducer from '../features/user/userSlice'
import movieReducer from '../features/movie/movieSlice'
import showReducer from '../features/shows/showSlice'
import miscReducer from '../features/misc/miscSlice'

const rootReducer = combineReducers({
    user: userReducer,
    movie: movieReducer,
    show: showReducer,
    misc: miscReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})

export default store