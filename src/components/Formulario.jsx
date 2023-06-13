import { useEffect, useState } from 'react';

import { Error } from './Error';
import { UseSelectMonedas } from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas.js';

import '../sass/Formulario.scss';


export const Formulario = ({setMonedas}) => {
    
    const [ moneda, SelectMonedas ] = UseSelectMonedas('Elige tu Moneda', monedas);
    const [ criptos, setCriptos ] = useState([]);
    const [ criptomoneda, SelectCriptoMoneda ] = UseSelectMonedas('Elige tu Criptomoneda', criptos);
    const [error, setError] = useState(false);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=50&tsym=USD';
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            const arrayCriptos = resultado.Data.map(crypto => {
                
                const objeto = {
                    id: crypto.CoinInfo.Name,
                    nombre: crypto.CoinInfo.FullName
                }; 
                
                return objeto;
            });
            setCriptos(arrayCriptos);
        };
        consultarAPI();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        
        if([moneda, criptomoneda].includes('')){
            setError(true);
            return;
        }

        setError(false);
        setMonedas({
            moneda,
            criptomoneda
        });
    };

    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}
        
            <form 
                className='form' 
                onSubmit={handleSubmit}
            >
                
                <SelectMonedas/>
                <SelectCriptoMoneda/>
                <input 
                    className='form__submit' 
                    type="submit" 
                    value='Cotizar'
                />               
            </form>
        </>
        
    );
};


