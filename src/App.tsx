import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './App.css';


function App() {
  return (
    <div className="App">
      <Button 
        variant='primary'
        size='sm'
        type='submit'
      >
      Новая конпка
      </Button>
    </div>
  );
}

export default App;
