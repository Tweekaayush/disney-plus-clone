import db, { getDocs, collection } from './firebase'
import { setMovies } from '../features/movie/movieSlice'
import { setShows } from '../features/shows/showSlice'
import { setDisplayShow, setGenreList, setGenreShows, setSimilarShows, setStudioShows } from '../features/misc/miscSlice'

export const getMovies = async (dispatch) =>{
    let disney = []
    let marvel = []
    let pixar = []
    let bollywood = []
    let recommend = []
    let trending = []
    let popular = []
    let all = []
    let temp = new Map()

    const snapshot = await getDocs(collection(db, 'movies'))
      snapshot.forEach((doc)=>{
        all = [...all, {id: doc.id, ...doc.data()}]
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

        doc.data().genres.forEach((genre)=>{
          let g = genre.toLowerCase()
          if(temp.has(g)){
            temp.set(g, temp.get(g) + 1)
          }
          else  
            temp.set(g, 1)
        })
      })
      
    dispatch(setMovies({
      all: all,
      recommend: recommend,
      trending: trending,
      popular: popular,
      disney: disney,
      marvel: marvel,
      pixar: pixar,
      bollywood: bollywood,
      allCategories: temp
    }))
  }

export const getShows = async (dispatch) =>{
  let recommend = []
  let trending = []
  let popular = []
  let starplus = []
  let natgeo = []
  let marvel = []
  let all = []
  let temp = new Map()

  const snapshot = await getDocs(collection(db, 'shows'))
      snapshot.forEach((doc)=>{
        all = [...all, {id: doc.id, ...doc.data()}]
        switch(doc.data().studio){
          case 'starplus': 
            starplus = [...starplus, {id: doc.id, ...doc.data()}]
            break;
          case 'natgeo':
            natgeo = [...natgeo, {id: doc.id, ...doc.data()}]
            break;
          case 'marvel':
            marvel = [...marvel, {id: doc.id, ...doc.data()}]
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

    doc.data()?.genres?.forEach((genre)=>{
      let g = genre.toLowerCase()
      if(temp.has(g))
          temp.set(g, temp.get(g) + 1)
      else  
        temp.set(g, 1)
    })
    
  })

  dispatch(setShows({
    all: all,
    recommend: recommend,
    trending: trending,
    popular: popular,
    starplus: starplus,
    natgeo: natgeo,
    marvel: marvel,
    allCategories: temp
  }))
}


export const findMovieOrShow = async (movies, shows, id, dispatch) => {

  let displayShow = [...movies, ...shows].filter((item)=>{
      return item?.id === id
  })

  dispatch(setDisplayShow({
    displayShow: displayShow
  }))
}

export const getSimilarMovies = async (movies, shows, id, dispatch) =>{

  const studio = [...movies, ...shows]?.filter((item)=>{
    return item?.id === id
  })

  const similarShows = [...movies, ...shows]?.filter((item)=>{
    return item?.studio === studio[0]?.studio
  })

  dispatch(setSimilarShows({
    similarShows: similarShows
  }))

}

export const getAllStudioProjects = async (movies, shows, studio, dispatch) =>{
    let studioShows = [...movies, ...shows]?.filter((item)=>{
      return item?.studio === studio
    })
    dispatch(setStudioShows({
      studioShows: studioShows
    }))
}

export const getAllCategories = (category1, category2, dispatch) =>{

  let temp = new Map()
  let newArr = []

  for(let x of category1.entries()){
    let key = x[0]
    let value = x[1]
    if(temp.has(key))
      temp.set(key, temp.get(key) + 1)
    else  
    temp.set(key, value)
  }

  for(let x of category2.entries()){
    let key = x[0]
    let value = x[1]
    if(temp.has(key))
      temp.set(key, temp.get(key) + 1)
    else  
      temp.set(key, value)
  }
  
  for(let x of temp){
    newArr = [...newArr, x]
  }

  dispatch(setGenreList({
    genreList: newArr
  }))
}


export const getStudioImages = (setBgImg, setBgLogo, name) =>{
  switch(name){
    case 'disney':
      setBgImg('https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/5841/1515841-i-269cdaf2480d')
      setBgLogo('https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/5840/1515840-t-40478cec3e66')
      break;
    case 'marvel':
      setBgImg('https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/5846/1515846-i-ebe96109b04f')
      setBgLogo('https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/5845/1515845-t-b9843a60cd4f')
      break;
    case 'pixar':
      setBgImg('https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/5842/1515842-i-fa5418ad8e5a')
      setBgLogo('https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/4640/1514640-t-1a7417a87cfa')
      break;
    case 'starwars':
      setBgImg('https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/328/1714969970328-i')
      setBgLogo('https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/5224/1714970005224-t')
      break;
    case 'natgeo':
      setBgImg('https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/5850/1515850-i-ca71adae841b')
      setBgLogo('https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/5852/1515852-t-f21f62dc9469')
      break;
    case 'hs':
      setBgImg('https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/9415/1419415-i-bb1e21b96f75')
      setBgLogo('https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/9414/1419414-t-3299149a02eb')
      break;
  }
}

export const getShowsByGenre = (shows, genre, dispatch, title) =>{

  let genreList = []

  if(genre === 'popular' || genre === 'trending' || genre === 'recommend'){
    genreList = shows.filter((show)=>{
      return show.type === genre
    })
  }

  if(genreList.length == 0){ 
    genreList = shows.filter((show)=>{
      return show.studio === genre
    })
  }

  if(genreList.length == 0){
    shows.forEach((show)=>{
      show.genres.forEach((genreName)=>{
        if(genreName === genre)
          genreList = [...genreList, show]
      })
    })
  }
  
  dispatch(setGenreShows({
    genreShowTitle: `${genre} ${title}`,
    genreShows: genreList
  }))
}