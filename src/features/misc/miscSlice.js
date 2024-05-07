import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    genreShowTitle: '',
    genreShows: [],
    studioShows: [],
    genreList: [],
    displayShow: [],
    similarShows: []
}

const miscSlice = createSlice({
    name: 'misc',
    initialState,
    reducers: {
        setGenreShows: (state, action) => {
            state.genreShowTitle = action.payload.genreShowTitle
            state.genreShows = action.payload.genreShows
        },
        setGenreList: (state, action) =>{
            state.genreList = action.payload.genreList
        },
        setStudioShows: (state, action) =>{
            state.studioShows = action.payload.studioShows
        },
        setDisplayShow: (state, action) =>{
            state.displayShow = action.payload.displayShow
        },
        setSimilarShows: (state, action) =>{
            state.similarShows = action.payload.similarShows
        }
    },
})

export const {setGenreShows, setDisplayShow, setGenreList, setStudioShows, setSimilarShows} = miscSlice.actions

export const selectGenreShowTitle = state => state.misc.genreShowTitle
export const selectGenreShows = state => state.misc.genreShows
export const selectGenreList = state => state.misc.genreList
export const selectStudioShows = state => state.misc.studioShows
export const selectDisplayShow = state => state.misc.displayShow
export const selectSimilarShows = state => state.misc.similarShows

export default miscSlice.reducer