export default function BackType(props){

    return (
        <div className='back-type'>
          <div className='back-header'>
            <h1 className='back-title'>{props.name}</h1>
            <h1 className='back-amount'>Pledge ${props.amount} or more</h1>
          </div>
          <p className='back-text'>
            {props.description}
          </p>
          <div className='back-footer'>
          <div className='back-container'><h1 className='back-left'>{props.countLeft}</h1><p>left</p></div>
            <div className='select-btn' onClick={props.onclick}>{props.countLeft > 0 ? "Select Reward" : "Out Of Stock" }</div>
          </div>
        </div>
    )
}