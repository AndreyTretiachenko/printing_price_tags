import React, { StrictMode } from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigate from './components/Navigate';
import { INavigate } from './models/Navigate';
import AboutPage from './pages/AboutPage';
import GeneralPage from './pages/GeneralPage';
import Price from './pages/price';



function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [Nav, setNav]=useState<INavigate['items']>([ 
    {id:1, title:'Ценники', link:'/price'},
    {id:2, title:'О проекте', link:'/about'}
   
  ])

  return (
    <>
      <Navigate  navigate={{items:Nav, title:'Мой сервис'}}/>
        <Routes >
          <Route  path='/' element={ <GeneralPage /> } />
          <Route  path='/about' element={ <AboutPage /> } />
          <Route  path='/price' element={ <Price /> } />
        </Routes>
    </>
    
  );
}

export default App;
