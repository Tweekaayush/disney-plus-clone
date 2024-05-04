import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    recommend: null,
    newDisney: null,
    original: null,
    trending: null,
}

const sportSlice = createSlice({
    name: 'sport',
    initialState,
    reducers: {
        setSports: (state, action) =>{
            state.recommend = action.payload.recommend
            state.newDisney = action.payload.newDisney
            state.original = action.payload.original
            state.trending = action.payload.trending
        }
    }
})

export const { setSports } = sportSlice.actions

export const selectSportRecommend = state => state.sport.recommend
export const selectSportNewDisney = state => state.sport.newDisney
export const selectSportOriginal = state => state.sport.original
export const selectSportTrending = state => state.sport.trending

export default sportSlice.reducer