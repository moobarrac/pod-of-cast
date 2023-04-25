import React from 'react'
import Sparkle2 from '../../assests/images/Sparkle2.svg';
import Star1 from '../../assests/images/Star1.svg';
import { plans } from '../../utils/api'
import Plans from './Plans'
import './Sponsor.css'

const Sponsor = () => {
  return (
    <section className='sponsor'>
      <div className='container'>
        <div className='sponsor-content'>
          <div className='sponsor-title'>
            <h3>Become our sponsor</h3>
            <p>Get exclusive episodes, merch and more</p>
            <div className='sponsor-icon'>
              <img src={Sparkle2} alt="" />
            </div>
          </div>
          <div className='sponsor-types'>
            <div className='star-icon'>
              <img src={Star1} alt="" />
            </div>
            {
              plans.map((plan, index) => (
                <Plans plan={plan} index={index}/>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsor