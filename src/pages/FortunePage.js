import React from 'react'
import { useSearchParams} from 'react-router-dom'

const FortunePage = () => {
  const [searchparams] = useSearchParams();
  console.log(searchparams.get('pastCardImg'));
  return (
    <>
      <a className="logoSakura"
          href="/"
          target="_blank">SAKURA TAROT</a>
      <h2>Vuestra fortuna!</h2>
      
      <div className='fortuneContainer'>
        <img 
                src={searchparams.get('pastCardImg')} 
                className="cardReverse" 
                alt={`carta ${searchparams.get('pastCardName')}`}/>
        <div className='fortuneText'>
          <h3>El pasado: {searchparams.get('pastCardName')}</h3>
          <p>Significado: {searchparams.get('pastCardMeaning')}</p>
        </div>
      </div>
      <div className='fortuneContainer'>
        <img 
                src={searchparams.get('presentCardImg')} 
                className="cardReverse" 
                alt={`carta ${searchparams.get('presentCardName')}`}/>
        <div className='fortuneText'>
          <h3>El presente: {searchparams.get('presentCardName')}</h3>
          <p>Significado: {searchparams.get('presentCardMeaning')}</p>
        </div>
      </div>
      
      <div className='fortuneContainer'>
        <img 
            src={searchparams.get('futureCardImg')} 
            className="cardReverse" 
            alt={`carta ${searchparams.get('futureCardName')}`}/>
        <div className='fortuneText'>
          <h3>El futuro: {searchparams.get('futureCardName')}</h3>
          <p>Significado: {searchparams.get('futureCardMeaning')}</p>
        </div>
      </div>
      
    </>
  )
}

export default FortunePage