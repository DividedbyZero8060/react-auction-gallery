
import HeroSection from '../components/Hero/HeroSection'
import Lots from '../components/Lots/Lots'
import Navbar from '../components/Navbar/Navbar'
import './App.css'
import { CiHeart } from "react-icons/ci";

function App() {


  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <div className="all-container p-8 pt-24 flex gap-8">
        <div className="left-container w-[65%]">
          <Lots></Lots>
        </div>
        <div className="right-container w-[35%]">
            <div className='flex gap-1 justify-center items-center mb-8'>
              <CiHeart size={30}/>
              <h2 className='text-2xl font-bold'>Favorite Bids</h2>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
