import React from 'react';
import GameTable from './componentes/GameTable';
import Login from './componentes/Login';
import Checkbox from './componentes/Checkbox';
import Imagem from './componentes/Imagem';

const App = () => {
  return (
    <div>
      <GameTable />
      <Login />
      <Imagem />
      <Checkbox />
    </div>
  );
};

export default App;
