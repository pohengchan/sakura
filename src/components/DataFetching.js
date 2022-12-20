import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"
import ToggleModal from "./ToggleModal";
//import Dashboard from "./Dashboard";
//import DialogBox from "./DialogBox";

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

    //Get chosen card info
      //const [cardInfo,setCardInfo] = useState([])
      //Get chosen card info
    //Hover
    //const [showText, setShowText] = useState(false)
    const handleMouseEnter = e => {
        e.target.style.background = "maroon";
        //console.log(e.target[e.target.selectedIndex].id );
        //setShowText(true)
      }
      const handleMouseLeave = e => {
        e.target.style.background = "lightgoldenrodyellow"
        //setShowText(false)
      };
      //Hover
      //{showText && <p className="message">Hovering</p>}
      
      const showValues = (id) => {
        console.log("get values" + id)
        ToggleModal()
      }

  return (
    <div>   
        {
        cards.map((card,index) =>
        <>
            <img key={index} src="https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg" className="Card-Reverse" style={{cursor:'pointer'}} alt={`card face down ${card.englishName}`} onClick={()=>showValues(card.id)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
        </>

        )
        }

    </div>
    
  )
}

export default DataFetching
//https://www.youtube.com/watch?v=bYFYF2GnMy8
//https://www.codingdeft.com/posts/react-on-hover/#displaying-a-text-when-the-button-is-hovered
//https://www.newline.co/@dmitryrogozhny/how-to-display-modal-dialog-in-react-with-react-modal--dbf46cda