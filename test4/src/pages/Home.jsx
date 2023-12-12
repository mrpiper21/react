import { Link } from "react-router-dom"
import logo2 from '../pages/Images/19_Psa.jpg'
function Home () {
    return (
      <>
        <div className='left-nav'>
          <img src={logo2} alt="img" className='logo2'/>
        </div>
        <div className="home-div">
         <p>'Romans 15:13- May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.Ephesians 3:20 - Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us. Romans 8:38-39'</p>
        </div>
      </>
      
      
    )
}

export default Home