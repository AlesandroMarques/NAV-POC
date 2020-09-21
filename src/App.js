import React from 'react';
import Navibar from './components/SpringBootNav/Navigation/Navigation';
import './App.css';
import Virtual_Storage from './serviceComponents/Services/IT_INFRUSTRUCTURE/Virtual_Storage';
import ProdFill from './serviceComponents/Services/IT_INFRUSTRUCTURE/Product_Fulfillment';
import HP_Storage from './serviceComponents/Services/IT_INFRUSTRUCTURE/HP_Storage_3Par';
import All_Flash_Array from './serviceComponents/Services/IT_INFRUSTRUCTURE/All_Flash_Array';
import Converged_Inf from './serviceComponents/Services/IT_INFRUSTRUCTURE/Converged_Infrastructure';
import Networking from './serviceComponents/Services/IT_INFRUSTRUCTURE/Networking';
import Aux from './hoc/Auxiliary';
import Layout from './hoc/Layout/Layout';


function App() {
  return (
    <div>
      <Layout>
        <Virtual_Storage></Virtual_Storage>
      </Layout>
    </div>

  );
}

export default App;
