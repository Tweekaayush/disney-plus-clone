import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Footer from './components/Layout/Footer/Footer'
import Home from './pages/Home/Home'
import Sidebar from './components/Layout/Sidebar/Sidebar'
import Explore from './pages/Explore/Explore'
import Shows from './pages/Shows/Shows'
import Login from './components/Login/Login'
import MySpace from './pages/MySpace/MySpace'
import Categories from './pages/Categories/Categories'
import Movies from './pages/Movies/Movies'
import Paywall from './pages/Paywall/Paywall'
import ShowPage from './pages/ShowPage/ShowPage'
import StudioPage from './pages/StudioPage/StudioPage'
import Browse from './pages/Browse/Browse'

const App = () => {

  return (
    <Router>
      <Sidebar/>
      <Login/>
      <Routes>
        <Route exact path='/' element={<Navigate to='/home' replace/>} />
        <Route exact path='/home' element={<Home />}/>
        <Route exact path='/myspace' element={<MySpace />}/>
        <Route exact path='/explore' element={<Explore />}/>
        <Route exact path='/shows' element={<Shows />}/>
        <Route exact path='/movies' element={<Movies />}/>
        <Route exact path='/categories' element={<Categories />}/>
        <Route exact path='/paywall' element={<Paywall />}/>
        <Route exact path='/movies/:id' element={<ShowPage/>}/>
        <Route exact path='/shows/:id' element={<ShowPage/>}/>
        <Route exact path='/studio/:name' element={<StudioPage/>}/>
        <Route exact path='/browse/category/:category/:type' element={<Browse/>}/>

      </Routes>
      <Footer />
    </Router>
  )
}

export default App