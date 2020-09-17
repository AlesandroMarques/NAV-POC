import React from 'react';
import Navibar from './components/SpringBootNav/Navigation/Navigation';
import './App.css';
import Service from './serviceComponents/Services/VertStor';
import ProdFill from './serviceComponents/Services/ProdFill';
import Aux from './hoc/Auxiliary';


function App() {
  return (
    <Aux>
    <div >
      <Navibar/>
    <Service/>
  </div>
  </Aux>
  );
}

export default App;
