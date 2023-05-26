export default function Pledge(props){

    return (
        <div className='pledge-container'>
            
            <input className='radio-pledge' type='radio'  name="pledge" id={`pledge_${props.id}`}></input>
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
       
    )
}