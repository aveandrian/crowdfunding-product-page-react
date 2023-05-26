import Navbar from './components/Navbar'
import './App.css'
import { useState } from 'react'
import BackType from './components/BackType'
import BackTypesData from './backTypes.json'

function App() {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [backedAmount, setBackedAmount] = useState(89914)
  const [totalBackers, setTotalBackers] = useState(5007)
  const [backTypes, setBackTypes] = useState(BackTypesData)

  function toggleBookmark(){
    setIsBookmarked(prev => !prev)
  }

  function handleSelect()

  const backTypesElements = backTypes.map(backType => {
    return ( <BackType key={backType.id}
      id={backType.id}
      name={backType.name}
      amount={backType.amount}
      description={backType.description}
      countLeft={backType.countLeft}
      />)
  })

  return (
    <>
    <header>
        <Navbar />
    </header>
    <main>

    
      
      <section className='header-section'>
        <div className='intro-section'>
          <img src='/images/logo-mastercraft.svg' className='intro-logo'></img>
          <h1 className='intro-title'>Mastercraft Bamboo Monitor Riser</h1>
          <p className='intro-description'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
          <div className='intro-btns'>
            <div className='back-prj-btn'>Back this project</div>
            <div className={`bookmark-container ${isBookmarked ? "bookmarked" : ""}`} onClick={toggleBookmark}>
              <div className={`bookmark-icon-container ${isBookmarked ? "bookmarked" : ""}`}>
                <i className="fa-solid fa-bookmark fa-lg bookmark-icon"></i>
              </div>
              <div className={`bookmark-btn ${isBookmarked ? "bookmarked" : ""}`}>{isBookmarked ? "Bookmarked" : "Bookmark"}</div>
            </div>
          </div>
        </div>
      </section>
      <section className='stats-section'> 
        <div className='stats-container'>
          <div className='stats-item'>
            <h1 className='stats-title'>${backedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
            <p className='stats-text'>of $100,000 backed</p>
          </div>
          <div className='stats-divider'></div>
          <div className='stats-item'>
            <h1 className='stats-title'>{totalBackers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
            <p className='stats-text'>total backers</p>
          </div>
          <div className='stats-divider'></div>
          <div className='stats-item'>
            <h1 className='stats-title'>56</h1>
            <p className='stats-text'>days left</p>
          </div>
        </div>
        <progress id="progress" value={backedAmount / 100000 * 100} max="100" />
      </section>
      <section className='about-section'>
        <h1 className='about-title'>About this project</h1>
        <p className='about-text'>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
          to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
          your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
        </p>
        <p className='about-text'>
          Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
          to allow notepads, pens, and USB sticks to be stored under the stand.
        </p>

        {backTypesElements}
      </section>
      
      </main>
      <div className='selection-modal'>
          <img className='modal-close-icon' src='/images/icon-close-modal.svg'></img>
          <h1 className='selection-modal-title'>Back this project</h1>
          <p className='selection-modal-text'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
          <div className='pledge-container'>
            <input className='radio-pledge' type='radio'  name="pledge"></input>
            <div className='pledge-content'>
              <div className='pledge-header'>
                <h1 className='pledge-title'>Pledge with no reward</h1>
                <h1 className='pledge-amount'></h1>
                <div className='pledge-left'></div>
              </div>

              <p className='pledge-text'>
                Choose to support us without a reward if you simply believe in our project. As a backer, 
                you will be signed up to receive product updates via email.
              </p>
            </div>
          </div>
          <div className='pledge-container'>
            <input className='radio-pledge' type='radio' name="pledge"></input>
            <div className='pledge-content'>
              <div className='pledge-header'>
                <h1 className='pledge-title'>Bamboo Stand</h1>
                <h1 className='pledge-amount'>Pledge $25 or more</h1>
                <div className='pledge-left'><h1 className='pledge-left-amount'>101</h1><p>left</p></div>
              </div>
              <p className='pledge-text'>
                You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                you'll be added to a special Backer member list.
              </p>
            </div>
          </div>
      </div>

  {/* <!-- Selection modal start --> */}


      Bamboo Stand
      Pledge $25 or more
      You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
      you'll be added to a special Backer member list.
      101 left

      {/* <!-- Selected pledge start --> */}
          Enter your pledge
          $25
          Continue
      {/* <!-- Selected pledge end --> */}

      Black Edition Stand
      Pledge $75 or more
      You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
      member list. Shipping is included.
      64 left

      {/* <!-- Selected pledge start --> */}
          Enter your pledge
          $75
          Continue
      {/* <!-- Selected pledge end --> */}

      Mahogany Special Edition
      Pledge $200 or more
      You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
      to our Backer member list. Shipping is included.
      0 left

      {/* <!-- Selected pledge  start --> */}
          Enter your pledge
          $200
          Continue
      {/* <!-- Selected pledge end --> */}

  {/* <!-- Selection modal end --> */}

  {/* <!-- Success modal start --> */}

  Thanks for your support!
  Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
  an email once our campaign is completed.
  Got it!

  {/* <!-- Success modal end --> */}
    </>
  )
}

export default App
