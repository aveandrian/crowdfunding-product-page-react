import Pledge from "./Pledge"
import { useState } from "react"
import '../styles/SelectionModal.css'
export default function SelectionModal(props){
  // const [selectedOption, setSelectedOption] = useState(null)
  function onselectionchange(id){
    props.setSelectedOption(id)
  }

  console.log("Props selection modal", props)

  const backTypesElements = props.backTypes.map(backType => {
    return (
      <Pledge 
        key={backType.id}
        id={backType.id}
        name={backType.name}
        description={backType.description}
        amount={backType.amount}
        checkedId={props.selectedOption}
        onSelect={onselectionchange}
        leftAmount={backType.countLeft}
        pledgeFunction={props.pledgeFunction}
      />
    )
  })
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
          checkedId={props.selectedOption}
          onSelect={onselectionchange}
          leftAmount={props.leftAmount}
          pledgeFunction={props.pledgeFunction}
          />
          {backTypesElements}
          
      </div>
      </div>
    )
}

