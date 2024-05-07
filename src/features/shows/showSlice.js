import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    all: [],
    recommend: [],
    trending: [],
    popular: [],
    starplus: [],
    natgeo: [],
    marvel: [],
    allCategories: []
}

const showSlice = createSlice({
    name: 'show',
    initialState,
    reducers: {
        setShows: (state, action) =>{
            state.all = action.payload.all
            state.recommend = action.payload.recommend
            state.trending = action.payload.trending
            state.popular = action.payload.popular
            state.starplus = action.payload.starplus
            state.natgeo = action.payload.natgeo
            state.marvel = action.payload.marvel
            state.allCategories = action.payload.allCategories
        }
    }
})

export const { setShows } = showSlice.actions

export const selectShowAll = state => state.show.all
export const selectShowRecommend = state => state.show.recommend
export const selectShowTrending = state => state.show.trending
export const selectShowPopular = state => state.show.popular
export const selectShowStarplus = state => state.show.starplus
export const selectShowNatgeo = state => state.show.natgeo
export const selectShowMarvel = state => state.show.marvel
export const selectAllShowCategories = state => state.show.allCategories

export default showSlice.reducer