import { useEffect, useState } from 'react';
import { Heading } from './components/Heading';
import { Formulario } from './components/Formulario';
import { Resultado } from './components/Resultado';
import { Spiner } from './components/Spiner';
import ImagenCripto from './img/imagen-criptos.png';

import './sass/App.scss';


function App() {

  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);
  
  useEffect(() => {
    if(Object.keys(monedas).length > 0){
      
      const cotizarCripto = async () => {
        setCargando(true);
        setResultado({});
        
        const {moneda, criptomoneda} = monedas;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        
        setResultado(resultado.DISPLAY[criptomoneda][moneda]);
        setCargando(false);
      };

      cotizarCripto();
    }
  }, [monedas]);

  return (
    <>
     <div className="app">
        <img className='app__image' src={ImagenCripto} alt="imagen-cripto" />
        <div className='app__header-container'>
          <Heading/>
          <Formulario
            setMonedas = {setMonedas}
          />
          {cargando && <Spiner/>}
          {resultado && resultado.PRICE && <Resultado resultado={resultado}/>}
        </div>
     </div>
    </>
  );
}

export default App;
