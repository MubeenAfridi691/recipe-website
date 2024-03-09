import React from 'react'
import Home from './components/Home'
import Recipedetails from './components/Recipedetails'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Category from './components/Category'
import Search from './components/Search'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/:id' Component={Recipedetails}/>
      <Route path='/category/:id' Component={Category}/>
      <Route path='/category/:id' Component={Category}/>
      <Route path='/search/:id' Component={Search}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}
