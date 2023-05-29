import { useState } from "react"
import '../styles/Pledge.css'

export default function Pledge(props){
    const [amount, setAmount] = useState(props.amount)
    const [error, setError] = useState(null)
    function handleChange(e){
      setError(null)
      if(parseInt(e.target.value) < props.amount || parseInt(e.target.value) <= 0)
        setError("Value must be greater than minimum")
      setAmount(parseInt(e.target.value))
    }

    console.log("pledge props", props)
    return (
      <>
        <div className='pledge-container'>
          <div className="pledge-top-section">
            <input className='radio-pledge' type='radio' checked={props.id === props.checkedId} onChange={() => props.onSelect(props.id)} name="pledge" id={`pledge_${props.id}`}></input>
            <div className='pledge-content'>
              <div className='pledge-header'>
                <label className='pledge-title' htmlFor={`pledge_${props.id}`} >{props.name}</label>
                {props.amount > 0 && <h1 className='pledge-amount'>Pledge ${props.amount} or more</h1>}
                {props.amount > 0 && <div className='pledge-left'><h1 className='pledge-left-amount'>{props.leftAmount}</h1><p>left</p></div>}
              </div>
              <p className='pledge-text'>
                {props.description}
              </p>
            </div>
          </div>
          {props.id === props.checkedId &&
          <>
            <div className="pledge-divider"></div> 
            <div className="pledge-footer">
              <h3 className="pledge-input-title">Enter your pledge</h3>
              <div className="input-container">
                <div className="pledge-input-container">
                  <p className="pledge-input-icon">$</p>
                  <input type="number" className="pledge-input" placeholder={amount} name="pledge-amount" value={amount} onChange={handleChange}/>
                </div>
                {error && <p className="error amount-error">{error}</p>}
              </div>
              <button className="pledge-btn" disabled={error} onClick={()=>props.pledgeFunction(amount, props.id)}>Continue</button>
            </div>
          </>
          }
        </div>
      </>
    )
}