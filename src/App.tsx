import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigate from './components/Navigate';
import { INavigate } from './medels/Navigate';
import AboutPage from './pages/AboutPage';
import GeneralPage from './pages/GeneralPage';
import Price from './pages/price';



function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [Nav, setNav]=useState<INavigate['items']>([
    {id:1, title:'Главная', link:'/'}, 
    {id:2, title:'О проекте', link:'/about'},
    {id:3, title:'Ценники', link:'/price'},
  ])

  return (
    <>
      <Navigate  navigate={{items:Nav, title:'My dashboard'}}/>
        <Routes >
          <Route  path='/' element={ <GeneralPage /> } />
          <Route  path='/about' element={ <AboutPage /> } />
          <Route  path='/price' element={ <Price /> } />
        </Routes>
    </>
    
  );
}

export default App;
