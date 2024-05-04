import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    recommend: null,
    trending: null,
    popular: null,
    starplus: null,
    natgeo: null
}

const showSlice = createSlice({
    name: 'show',
    initialState,
    reducers: {
        setShows: (state, action) =>{
            state.recommend = action.payload.recommend
            state.trending = action.payload.trending
            state.popular = action.payload.popular
            state.starplus = action.payload.starplus
            state.natgeo = action.payload.natgeo
        }
    }
})

export const { setShows } = showSlice.actions

export const selectShowRecommend = state => state.show.recommend
export const selectShowTrending = state => state.show.trending
export const selectShowPopular = state => state.show.popular
export const selectShowStarplus = state => state.show.starplus
export const selectShowNatgeo = state => state.show.natgeo

export default showSlice.reducer