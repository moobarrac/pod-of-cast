import React from 'react';
import Scribble2 from '../../assests/images/Scribble2.svg';
import './Membership.css';
import { benefits } from '../../utils/api';

const Membership = () => {
  return (
    <section className='member'>
      <div className='container'>
        <div className='member-content'>
          <div className='member-title'>
            <h3>Membership benfits</h3>
            <p>Become our sponsor and get all benefits</p>
            <div className='member-icon'>
              <img src={Scribble2} alt="" />
            </div>
          </div>
          <div className='benefits'>
            {
              benefits.map(benefit => (
                <div key={benefit.id} className='benefit'>
                  <div className='benefit-icon'>
                    <img src={benefit.icon} alt="" />
                  </div>
                  <h5>{benefit.title}</h5>
                  <p>{benefit.desc}</p>
                </div>
              ))
            }
          </div>
          <button className='btn btn-dark btn-shadow'>See pricing</button>
        </div>
      </div>
    </section>
  )
}

export default Membership