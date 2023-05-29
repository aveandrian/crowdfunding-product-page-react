import Navbar from './components/Navbar'
import './App.css'
import { useState } from 'react'
import BackType from './components/BackType'
import BackTypesData from './backTypes.json'
import SelectionModal from './components/SelectionModal'
import SuccessModal from './components/SuccessModal'

function App() {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [backedAmount, setBackedAmount] = useState(89914)
  const [totalBackers, setTotalBackers] = useState(5007)
  const [backTypes, setBackTypes] = useState(BackTypesData)
  const [isModal, setIsModal] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [isSuccess, setIsSucess] = useState(false)

  function toggleBookmark(){
    setIsBookmarked(prev => !prev)
  }

  function toggleModal(){
    setIsModal(prev => !prev)
    window.scrollTo(0,0)
  }

  function pledgeFunction(amount, id){
    console.log("PLEDGECALLDE")
    console.log(amount)
    console.log(id)
    setBackedAmount(prev => prev+amount)
    setTotalBackers(prev => prev+1)
    setIsSucess(true)
    setBackTypes(prevBackTypes => prevBackTypes.map(prevBackType => {
      return id == prevBackType.id ? {...prevBackType, countLeft: prevBackType.countLeft -1 } : prevBackType
    }))
    window.scrollTo(0,0)
  }

  function closeModal(){
    setSelectedOption(null)
    toggleModal()
  }

  function restart(){
    setIsSucess(false)
    setIsModal(false)
    setSelectedOption(null)
  }

  const backTypesElements = backTypes.map(backType => {
    return ( <BackType key={backType.id}
      id={backType.id}
      name={backType.name}
      amount={backType.amount}
      description={backType.description}
      countLeft={backType.countLeft}
      setSelectedOption={setSelectedOption}
      toggleModal={toggleModal}
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
            <div className='back-prj-btn' onClick={toggleModal}>Back this project</div>
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
      {isModal && <SelectionModal 
      selectedOption={selectedOption} 
      setSelectedOption={setSelectedOption} 
      closeModal={closeModal} 
      backTypes={backTypes}
      pledgeFunction={pledgeFunction}
      />}
      {isSuccess && <SuccessModal onClick={restart}/>}
    </>
  )
}

export default App
