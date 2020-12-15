import styled from '@emotion/styled';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Resumen from './components/Resumen'
import Spiner from './components/Spiner'
import React, {useState} from 'react';

const Contenedor = styled.div`
  max-width:600px;
  margin: 0 auto;
`
const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding:3rem;
`
function App() {
  const [resumen, guardarResumen]=useState({
    cotizacion:0,
    marca:'',
    year:'',
    plan:'',
  })
  //spiner cargando
  const [cargando, guardarCargando]=useState(false)
  //extraer datos
  const {cotizacion, datos} = resumen
  return (
    <Contenedor>
      <Header 
        titulo='Cotizador de Seguros'
      />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        {cargando ? <Spiner/> : null}
        {datos ? <Resumen datos={datos}/> : null}
        {!cargando ? <Resultado
          cotizacion={cotizacion}
        /> : null}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
