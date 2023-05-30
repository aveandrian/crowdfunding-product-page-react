import '../styles/SuccessModal.css'
export default function SuccessModal(props){
    return (
        <>
            <div className="success-container"></div>
            <div className="success-modal">
                <img className="success-icon" src="/images/icon-check.svg" alt='Success Icon'></img>
                <h1 className="success-title">Thanks for your support!</h1>
                <p className="success-text">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                an email once our campaign is completed.</p>
                <button className="success-btn" onClick={props.onClick}>Got it!</button>
            </div>
        </>
    )
}