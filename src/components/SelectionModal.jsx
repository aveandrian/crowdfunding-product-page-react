import Pledge from "./Pledge"
import { useState } from "react"
export default function SelectionModal(props){
  const [selectedOption, setSelectedOption] = useState(null)
  function onselectionchange(id){
    setSelectedOption(id)
  }
    return (
        <div className="modal-container">
        
        <div className='selection-modal'>
          <img className='modal-close-icon' src='/images/icon-close-modal.svg' onClick={props.closeModal}></img>
          <h1 className='selection-modal-title'>Back this project</h1>
          <p className='selection-modal-text'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
          <Pledge 
          id={0}
          name="Pledge with no reward" 
          description="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
          amount={0}
          checkedId={selectedOption}
          onSelect={onselectionchange}
          />

        <Pledge 
            id={1}
          name="Bamboo Stand" 
          description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
          amount={25}
          countLeft={101}
          checkedId={selectedOption}
          onSelect={onselectionchange}
          />
          
      </div>
      </div>
    )
}

