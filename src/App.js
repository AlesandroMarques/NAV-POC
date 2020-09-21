import React from 'react';

import './App.css';

import PageController from './serviceComponents/PageController/PageController'


import Layout from './hoc/Layout/Layout';


function App() {
  return (
    <div>
      <Layout>
        <PageController></PageController>
      </Layout>
    </div>

  );
}

export default App;
