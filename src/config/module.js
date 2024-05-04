import db, { getDocs, collection } from './firebase'
import { setMovies } from '../features/movie/movieSlice'
import { setShows } from '../features/shows/showSlice'

export const getMovies = async (dispatch) =>{
    let disney = []
    let marvel = []
    let pixar = []
    let bollywood = []
    let recommend = []
    let trending = []
    let popular = []
    const snapshot = await getDocs(collection(db, 'movies'))
      snapshot.forEach((doc)=>{
        switch(doc.data().studio){
          case 'disney': 
            disney = [...disney, {id: doc.id, ...doc.data()}]
            break;
          case 'marvel':
            marvel = [...marvel, {id: doc.id, ...doc.data()}]
            break;
          case 'pixar':
            pixar= [...pixar, {id: doc.id, ...doc.data()}]
            break;
          case 'bollywood':
            bollywood = [...bollywood, {id: doc.id, ...doc.data()}]
            break;
        default:
        }
        switch(doc.data().type){
          case 'recommend': 
            recommend = [...recommend, {id: doc.id, ...doc.data()}]
            break;
          case 'trending':
            trending = [...trending, {id: doc.id, ...doc.data()}]
            break;
          case 'popular':
            popular = [...popular, {id: doc.id, ...doc.data()}]
            break;
        default:
        }
      })
    dispatch(setMovies({
      recommend: recommend,
      trending: trending,
      popular: popular,
      disney: disney,
      marvel: marvel,
      pixar: pixar,
      bollywood: bollywood
    }))
  }

export const getShows = async (dispatch) =>{
  let recommend = []
  let trending = []
  let popular = []
  let starplus = []
  let natgeo = []

  const snapshot = await getDocs(collection(db, 'shows'))
      snapshot.forEach((doc)=>{
        switch(doc.data().studio){
          case 'starplus': 
            starplus = [...starplus, {id: doc.id, ...doc.data()}]
            break;
          case 'natgeo':
            natgeo = [...natgeo, {id: doc.id, ...doc.data()}]
            break;
        default:
        }

    switch(doc.data().type){
      case 'recommend': 
        recommend = [...recommend, {id: doc.id, ...doc.data()}]
        break;
      case 'trending':
        trending = [...trending, {id: doc.id, ...doc.data()}]
        break;
      case 'popular':
        popular = [...popular, {id: doc.id, ...doc.data()}]
        break;
    default:
    }
  })

  dispatch(setShows({
    recommend: recommend,
    trending: trending,
    popular: popular,
    starplus: starplus,
    natgeo: natgeo
  }))
}