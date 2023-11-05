import React from 'react';
import '../styles/Home.css'

import image1 from '../images/Joker1.jpg'
import image2 from '../images/Joker2.jpg'
import image3 from '../images/Joker3.jpg'
import image4 from '../images/joker4.webp'
import image5 from '../images/joker5.webp'

const MorePage = () => {
    return (
        <div>
            <div className='Joker'>
                <div>
                    Joker
                </div>
                <div>
                    <img src={image1} alt='jokerImg' />
                </div>
                <div className='content'>

                    The Joker, a formidable antagonist in the Batman universe, made his debut in Batman #1 in 1940, created by writer Bill Finger, artist Bob Kane, and Jerry Robinson. Over the years, his character has undergone numerous transformations and adaptations, making him one of the most enduring and iconic villains in the world of comics.

                    Originally envisioned as a remorseless criminal mastermind with a clown-like appearance, the character quickly evolved. The Joker's origin story was initially shrouded in mystery, but later versions explored his transformation from a struggling stand-up comedian into the Clown Prince of Crime. This tragic tale added depth to his character and hinted at the psychological trauma that turned him into a psychopath.

                    Throughout his history, the Joker has been responsible for countless heinous crimes, including the murder of Jason Todd, the second Robin, and the crippling of Barbara Gordon, also known as Batgirl. These acts cemented his status as a true threat to Batman and Gotham City.

                    The Joker's eccentric personality, flamboyant attire, and penchant for elaborate, deadly gags make him a unique and unpredictable adversary. His infamous calling card, a sinister grin, is a chilling symbol of his madness.

                    Heath Ledger's portrayal of the Joker in Christopher Nolan's "The Dark Knight" brought a new level of complexity to the character. Ledger's performance earned him a posthumous Academy Award, and it solidified the Joker's status as a cultural icon.

                    The Joker has appeared in various media, from animated series to video games, each adaptation offering a fresh perspective on his character. Mark Hamill's voice acting for the animated Joker and Jack Nicholson's iconic performance in Tim Burton's "Batman" film are among the many notable interpretations.

                    The character's appeal lies in his unpredictability, his chaotic nature, and his mirror-like relationship with Batman. The Joker's history is one of constant reinvention, ensuring his place as an enduring symbol of madness and malevolence in the world of comics and beyond.

                </div>
            </div>
        </div>
    )
}

export default MorePage;