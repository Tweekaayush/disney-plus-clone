import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    all: [],
    recommend: [],
    trending: [],
    popular: [],
    disney: [],
    marvel: [],
    pixar: [],
    bollywood: [],
    allCategories: []
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) =>{
            state.all = action.payload.all
            state.recommend = action.payload.recommend
            state.trending = action.payload.trending
            state.disney = action.payload.disney
            state.marvel = action.payload.marvel
            state.pixar = action.payload.pixar
            state.bollywood = action.payload.bollywood
            state.popular = action.payload.popular
            state.allCategories = action.payload.allCategories
        },
    },
})

export const { setMovies } = movieSlice.actions

export const selectMovieAll = state => state.movie.all
export const selectMovieRecommend = state => state.movie.recommend
export const selectMovieTrending = state => state.movie.trending
export const selectMovieDisney = state => state.movie.disney
export const selectMovieMarvel = state => state.movie.marvel
export const selectMoviePixar = state => state.movie.pixar
export const selectMovieBollywood = state => state.movie.bollywood
export const selectMoviePopular = state => state.movie.popular
export const selectAllMovieCategories = state => state.movie.allCategories

export default movieSlice.reducer