import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"
//import ToggleModal from "./ToggleModal";
import Modal from 'react-modal';
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");
var cardText = '';
var pastCard = 0;
var presentCard = 0;
var futureCard = 0;
var modalText = '';
var turnText = 'Please turn over another card'

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

    //Hover
    const handleMouseEnter = e => {
        e.target.style.background = "maroon";
      }
    const handleMouseLeave = e => {
        e.target.style.background = "lightgoldenrodyellow"
      };
      
    //Get chosen card info
    const showValues = (id, engName) => {
        console.log("get values" + id + engName)
        cardText = engName;
        if (pastCard ===id || presentCard===id){
            modalText = 'You have already chosen this card. Please choose another.';
        };
        if (pastCard===0){
            pastCard=id;
            modalText = 'This represents your past';
        };
        if (pastCard>0 && presentCard===0 && pastCard!==id){
            presentCard=id;
            modalText = 'This represents your present';
        };
        if (pastCard>0 && presentCard>0 && presentCard!==id && futureCard===0){
            futureCard=id;
            modalText = 'This represents your future';
            turnText = 'Find out what your fortune is!'
        };

        //console.log(`ID: ${id} ;${pastCard} and ${presentCard} and ${futureCard}`)
        
        toggleModal()
    }   

    //Get chosen card info
  
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    function toggleModal() {
        setIsOpen(!isOpen);
        console.log(`Toggle modal passes: ${cardText}`);
        if (futureCard>0 && isOpen === true){
        navigate("/fortune")
        return <Navigate replace to="/fortune" />;
        }
    }

    return (
        <div>   
            {
            cards.map((card,index) =>
            <>
                <img 
                key={index} 
                src="https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg" 
                className="Card-Reverse" 
                style={{cursor:'pointer'}} 
                alt={`card face down ${card.englishName}`} 
                onClick={()=>{showValues(card.id, card.englishName)}} 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}/>
            </>
            )}
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
            >
                <h3>{cardText}</h3>
                <p>{modalText}</p>
                <p>{turnText}</p>
                <button onClick={toggleModal}>OK</button>
            </Modal>
        </div>                          
    
    )
}

export default DataFetching
//https://www.youtube.com/watch?v=bYFYF2GnMy8
//https://www.codingdeft.com/posts/react-on-hover/#displaying-a-text-when-the-button-is-hovered
//https://www.newline.co/@dmitryrogozhny/how-to-display-modal-dialog-in-react-with-react-modal--dbf46cda