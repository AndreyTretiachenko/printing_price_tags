import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigate from './components/Navigate';
import { INavigate } from './models';
import AboutPage from './pages/AboutPage';
import GeneralPage from './pages/GeneralPage';



function App() {
  const [Nav, setNav]=useState<INavigate['items']>([{id:1, title:'Главная', link:'/'}, {id:2, title:'О проекте', link:'/about'}])

  return (
    <>
      <Navigate navigate={{items:Nav, title:'My dashboard'}}/>
        <Routes>
          <Route path='/' element={ <GeneralPage /> } />
          <Route path='/about' element={ <AboutPage /> } />
        </Routes>
    </>
    
  );
}

export default App;
