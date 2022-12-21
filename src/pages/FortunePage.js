import React from 'react'
import {Link, useSearchParams} from 'react-router-dom'

const FortunePage = () => {
  const [searchparams] = useSearchParams();
  console.log(searchparams.get('pastCardImg'));
  return (
    <>
      <Link className='logoSakura' to='/'>SAKURA TAROT</Link>
      <h1>Vuestra fortuna</h1>
      <div>
        <img 
                src={searchparams.get('pastCardImg')} 
                className="Card-Reverse" 
                alt={`carta ${searchparams.get('pastCardName')}`}/>
        <h3>El pasado: {searchparams.get('pastCardName')}</h3>
        <p>Significado: {searchparams.get('pastCardMeaning')}</p>
      </div>
      <div>
        <img 
                src={searchparams.get('presentCardImg')} 
                className="Card-Reverse" 
                alt={`carta ${searchparams.get('presentCardName')}`}/>
        <h3>El presente: {searchparams.get('presentCardName')}</h3>
        <p>Significado: {searchparams.get('presentCardMeaning')}</p>
      </div>
      <div>
        <img 
                src={searchparams.get('futureCardImg')} 
                className="Card-Reverse" 
                alt={`carta ${searchparams.get('futureCardName')}`}/>
        <h3>El futuro: {searchparams.get('futureCardName')}</h3>
        <p>Significado: {searchparams.get('futureCardMeaning')}</p>
      </div>
      
    </>
  )
}

export default FortunePage