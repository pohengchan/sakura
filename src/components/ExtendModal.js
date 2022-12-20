import React, { Component } from 'react'
import ToggleModal from './ToggleModal';


class ExtendModal extends Component() {
    constructor() {
        super();
        this.state = { isModalOpen: false };
      }
      //skip
      handleAdd= () =>{
        this.setState({ isModalOpen: true });
      };
      render() {
        return (
          <div>
            <button onClick={this.handleAdd} > Add </button>
            <ToggleModal isOpen={this.state.isModalOpen} />
          </div>
          )
      }
}

export default ExtendModal