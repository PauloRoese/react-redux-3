import React from 'react';

import { Provider } from 'react-redux';

import Lista from './componentes/lista';
import store from './store/store';
import ContadorLista from './componentes/contadorLista';


function App() {
  return (
    <div>
      <Provider store={store}>
        <Lista />
        <ContadorLista />
      </Provider>
    </div>
  );
}

export default App;
