
import { useState } from "react";
import "../sass/useSelectMoneda.scss";

export const UseSelectMonedas = (label, opciones) => {
    
    const [state, setState] = useState('');
    
    const SelectMonedas = () => (
    <>
        <label className="selectMonedas__label" htmlFor="">
            {label}
        </label>
        <select 
            className="selectMonedas__select"
            value={state}
            onChange={e => setState(e.target.value)}
        >
            <option value="">Seleccione</option>
            {opciones.map(opcion => (
                <option
                    key={opcion.id}
                    value={opcion.id}

                >{opcion.nombre}</option>
            ))}
        </select>
    </>
  );

  return [state, SelectMonedas];
};
