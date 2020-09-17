import React from 'react';
import Navibar from './components/SpringBootNav/Navigation/Navigation';
import './App.css';
import Virtual_Storage from './serviceComponents/Services/IT_INFRUSTRUCTURE/Virtual_Storage';
import ProdFill from './serviceComponents/Services/IT_INFRUSTRUCTURE/Product_Fulfillment';
import Aux from './hoc/Auxiliary';


function App() {
  return (
    <Aux>
    <div >
      <Navibar/>
    <ProdFill/>
  </div>
  </Aux>
  );
}

export default App;
