import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

import Modal from "react-modal";
Modal.setAppElement("#root");

function DataFetching() {
    const [cards,setCards] = useState([])

    useEffect(() => {
        axios.get('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
        .then(res => {
            console.log(res)
            setCards(res.data)
        })
        .catch(err=> {
            console.log(err)
        })
    }, [])

    //Modal
    const [isOpen, setIsOpen] = useState(false);
    
    //var engName = "";
    
    function toggleModal(event) {
      setIsOpen(!isOpen);
      console.log(`This is what toggle modal got passed: ${JSON.stringify(event)}`);
      //engName = englishName;
    }
    //Modal

    //Hover
    const [showText, setShowText] = useState(false)
    const handleMouseEnter = e => {
        e.target.style.background = "maroon"
        setShowText(true)
      }
      const handleMouseLeave = e => {
        e.target.style.background = "lightgoldenrodyellow"
        setShowText(false)
      }
      //Hover

  return (
    <div>
        {showText && <p className="message">Hovering</p>}
        {
        //cards.map(card => <li key={card.id}>{card.english}</li>)
        cards.map(card =><img key={card.id} src="https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg" className="Card-Reverse" style={{cursor:'pointer'}} alt={`card face down ${card.englishName}`} onClick={toggleModal} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}/>)
        }
        
        <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
        >
            <h3>You have turned over {}</h3>
            <p>This represents your past.</p>
            <p>Turn over another card.</p>
            <button onClick={toggleModal}>OK</button>
      </Modal>
    </div>
  )
}

export default DataFetching
//https://www.youtube.com/watch?v=bYFYF2GnMy8
//https://www.codingdeft.com/posts/react-on-hover/#displaying-a-text-when-the-button-is-hovered