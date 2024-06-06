import './components/Banner/Banner.js'
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario.js';
import Time from './components/Time/Time.js';
import { useState } from 'react';


function App() {
const [colaboradores, setColaboradores] = useState([])
const aoColaboradorAdicionado = (colaborador) => {
  console.log(colaborador)
  setColaboradores=([...colaboradores, colaborador])
}
  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado = {(colaborador) => aoColaboradorAdicionado(colaborador)} />
      <Time nome="Programação"/>
      <Time nome="Front-End"/>
    </div>
  );
}

export default App;
