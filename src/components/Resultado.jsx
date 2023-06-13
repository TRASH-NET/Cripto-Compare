import '../sass/Resultado.scss';

export const Resultado = ({resultado}) => {
    
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;

    return (
        <div className='resultado'>
            <img className='resultado__img' src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
            <div className='resultado__info-container'>
                <p className='resultado__price'>El precio es de: <span>{PRICE}</span></p>
                <p className='resultado__info'>Precio mas alto del día: <span>{HIGHDAY}</span></p>
                <p className='resultado__info'>Precio mas bajo del día: <span>{LOWDAY}</span></p>
                <p className='resultado__info'>Variacíon últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></p>
                <p className='resultado__info'>Última Actualización: <span>{LASTUPDATE}</span></p>
            </div>    
                
        </div>
    );
};

