import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    recommend: null,
    trending: null,
    popular: null,
    disney: null,
    marvel: null,
    pixar: null,
    bollywood: null
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) =>{
            state.recommend = action.payload.recommend
            state.trending = action.payload.trending
            state.disney = action.payload.disney
            state.marvel = action.payload.marvel
            state.pixar = action.payload.pixar
            state.bollywood = action.payload.bollywood
            state.popular = action.payload.popular
        },
    },
})

export const { setMovies } = movieSlice.actions

export const selectMovieRecommend = state => state.movie.recommend
export const selectMovieTrending = state => state.movie.trending
export const selectMovieDisney = state => state.movie.disney
export const selectMovieMarvel = state => state.movie.marvel
export const selectMoviePixar = state => state.movie.pixar
export const selectMovieBollywood = state => state.movie.bollywood
export const selectMoviePopular = state => state.movie.popular

export default movieSlice.reducer