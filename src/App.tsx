import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigate from './components/Navigate'
import Button from 'react-bootstrap/Button'
import './App.css';


function App() {
  const [arr, setArr] = useState(['Тише', 'мыши', 'кот', 'на', 'крыше']);

  const result = arr.map((element, index) => {
    return <p key={index}>{element}</p>;
  });

  function add() {
    setArr([...arr, 'value']);
  };

  return (
    <div className="App">
      <Navigate />
      {result}
      <Button 
        variant='primary' 
        size='sm'
        onClick={add}>
        Add item menu
      </Button>
    </div>
  );
}

export default App;
