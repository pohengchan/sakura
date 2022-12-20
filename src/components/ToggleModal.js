import React from 'react'
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement("#root");

function ToggleModal() {
  const [isOpen, setIsOpen] = useState(false);
    setIsOpen(!isOpen);
    console.log(`This is what toggle modal got passed: `);
    //engName = englishName;
  
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={ToggleModal}
    contentLabel="My dialog"
>
    <h3>You have turned over {}</h3>
    <p>This represents your past.</p>
    <p>Turn over another card.</p>
    <button onClick={ToggleModal}>OK</button>
</Modal>
  )
}

export default ToggleModal