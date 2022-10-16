import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigate from './components/Navigate'
import Button from 'react-bootstrap/Button'
import './App.css';
import { INavigate } from './models';


function App() {
  const [Nav, setNav]=useState<INavigate['items']>([{id:1, title:'New', link:'/#'}, {id:2, title:'Two', link:'/###'}])
  const cngNav = (valItem:INavigate['items']) => {
    setNav(prev => [...prev, valItem[0]])
  }

  return (
    <div className="App">
      <Navigate navigate={{items:Nav, title:'General'}}/>
      <Button 
        variant='primary' 
        size='sm'
        onClick={() => cngNav([{id:3, title:'Poo', link:'/#'}])}>
        Add item menu
      </Button>
    </div>
  );
}

export default App;
