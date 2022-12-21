import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"
//import ToggleModal from "./ToggleModal";
import Modal from 'react-modal';
import { createSearchParams, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");
var cardText = '';
var pastCard = 0;
var presentCard = 0;
var futureCard = 0;
var pastCardName = '';
var presentCardName = '';
var futureCardName = '';
var pastCardMeaning = '';
var presentCardMeaning = '';
var futureCardMeaning = '';
var pastCardImg = '';
var presentCardImg = '';
var futureCardImg = '';
var modalText = '';
var turnText = 'Elige otra carta para su fortuna.';
var cardImage = '';

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
    const showValues = (id, espName, meaning, cardimg) => {
        console.log("get values" + id + espName)
        cardText = espName;
        cardImage = cardimg;
        if (pastCard ===id || presentCard===id){
            modalText = 'Ya ha elegido esta carta!';
            turnText = ' Elige otra carta por favor.'
        };
        if (pastCard===0){
            pastCard=id;
            pastCardName=espName;
            pastCardMeaning=meaning;
            pastCardImg=cardimg;
            modalText = 'Representa su pasado.';
        };
        if (pastCard>0 && presentCard===0 && pastCard!==id){
            presentCard=id;
            presentCardName=espName;
            presentCardMeaning=meaning;
            presentCardImg=cardimg;
            modalText = 'Representa su presente.';
        };
        if (pastCard>0 && presentCard>0 && pastCard!==id && presentCard!==id && futureCard===0){
            futureCard=id;
            futureCardName=espName;
            futureCardMeaning=meaning;
            futureCardImg=cardimg;
            modalText = 'Representa su futuro.';
            turnText = 'Ve a su fortuna!'
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
        //navigate("/fortune")
        const passfortune = () => {
            navigate({
                pathname: '/fortune',
                search: createSearchParams({
                    pastCard: pastCard,
                    presentCard: presentCard,
                    futureCard: futureCard,
                    pastCardName: pastCardName,
                    presentCardName: presentCardName,
                    futureCardName: futureCardName,
                    pastCardMeaning: pastCardMeaning,
                    presentCardMeaning: presentCardMeaning,
                    futureCardMeaning: futureCardMeaning,
                    pastCardImg: pastCardImg,
                    presentCardImg: presentCardImg,
                    futureCardImg: futureCardImg
                }).toString()
            });
        }
        passfortune()
        console.log(passfortune)
        //return <Navigate replace to="/fortune" />;
        return <Navigate replace to = '/fortune' />;
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
                className="cardReverse" 
                style={{cursor:'pointer'}} 
                alt={`card face down ${card.spanishName}`} 
                onClick={()=>{showValues(card.id, card.spanishName, card.meaning, card.sakuraCard)}} 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}/>
            </>
            )}
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
            >
                <div className="modalbox">
                    <h3>{cardText}</h3>
                    <img 
                        src={cardImage} 
                        className="modalImage" 
                        alt={`carta ${cardText}`}/>
                    <p>{modalText}</p>
                    <p>{turnText}</p>
                    <button onClick={toggleModal}>OK</button>
                </div>
            </Modal>
        </div>                          
    
    )
}

export default DataFetching
//https://www.youtube.com/watch?v=bYFYF2GnMy8
//https://www.codingdeft.com/posts/react-on-hover/#displaying-a-text-when-the-button-is-hovered
//https://www.newline.co/@dmitryrogozhny/how-to-display-modal-dialog-in-react-with-react-modal--dbf46cda
//https://plainenglish.io/blog/how-to-pass-data-between-pages-in-react-router-dom-v6