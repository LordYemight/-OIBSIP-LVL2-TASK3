import React, { useContext, useState } from 'react'
import '../styles/Home.css'
import Joker1 from '../images/Joker1.jpg'
// import { Link } from 'react-router-dom'
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
// import { UserContext } from './UserContext'; // Import your UserContext


const Home = () => {

    // Access the user information from your UserContext
    const { user } = useContext(UserContext);
    console.log(user)

    const navigate = useNavigate();
    const naviMore = () => {
      if (!user) {
        navigate('/login')
      } else {
        navigate('/more')
      }
    }
  return (
    <div>
      <div className='Joker'>
        <div>
          Joker
        </div>
        <div>
          <img src={Joker1} alt='jokerImg' />
        </div>
        <div className='content'>
          The Joker, a formidable antagonist in the Batman universe, made his debut in Batman #1 in 1940, created by writer Bill Finger, artist Bob Kane, and Jerry Robinson. Over the years, his character has undergone numerous transformations and adaptations, making him one of the most enduring and iconic villains in the world of comics.

          Originally envisioned as a remorseless criminal mastermind with a clown-like appearance, the character quickly evolved. The Joker's origin story was initially shrouded in mystery, but later versions explored his transformation from a struggling stand-up comedian into the Clown Prince of Crime. This tragic tale added depth to his character and hinted at the psychological trauma that turned him into a psychopath...
        </div>
        <button className='btn' onClick={naviMore}>Read More</button>
      </div>
    </div>
  )
}

export default Home