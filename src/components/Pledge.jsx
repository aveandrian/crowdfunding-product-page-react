

export default function Pledge(props){

    return (
      <>
        <div className='pledge-container'>
          <div className="pledge-top-section">
            <input className='radio-pledge' type='radio' checked={props.id === props.checkedId} onChange={() => props.onSelect(props.id)} name="pledge" id={`pledge_${props.id}`}></input>
            <div className='pledge-content'>
              <div className='pledge-header'>
                <label className='pledge-title' htmlFor={`pledge_${props.id}`} >{props.name}</label>
                {props.amount > 0 && <h1 className='pledge-amount'>Pledge ${props.amount} or more</h1>}
                {props.amount > 0 && <div className='pledge-left'><h1 className='pledge-left-amount'>{props.countLeft}</h1><p>left</p></div>}
                
              </div>

              <p className='pledge-text'>
                {props.description}
              </p>
            </div>
            </div>
      {props.id === props.checkedId && <><div className="pledge-divider"></div> 
        <div className="pledge-footer">
          <h3 className="pledge-input-title">Enter your pledge</h3>
          <input className="pledge-input"></input>
          <button className="pledge-btn">Continue</button>
        </div>
        </>
        }
        </div>
        </>
    )
}