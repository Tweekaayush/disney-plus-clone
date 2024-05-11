import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    uid: '',
    name: '',
    email: '',
    photo: '',
    watchlist: []
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) =>{
            state.uid = action.payload.uid
            state.name = action.payload.name
            state.email = action.payload.email
            state.photo = action.payload.photo
        },
        setUserWatchList: (state, action)=>{
            state.watchlist = action.payload.watchlist
        },
        setSignOutState: state =>{
            state.uid = ''
            state.name = ''
            state.email = ''
            state.photo = ''
            state.watchlist = []
        }
    }
})

export const { setUserLoginDetails, setSignOutState, setUserWatchList } = userSlice.actions

export const selectUserId = state => state.user.uid
export const selectUserName = state => state.user.name
export const selectUserEmail = state => state.user.email
export const selectUserPhoto = state => state.user.photo
export const selectWatchList = state => state.user.watchlist

export default userSlice.reducer;