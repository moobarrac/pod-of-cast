import React from 'react'
import { hosts } from '../../utils/api';
import AboutImg from '../../assests/images/about.png'
import './Listeners.css'

const Listeners = () => {
  return (
    <section className='listeners'>
      <div className="container">
        <div className="listeners-content">
          <div className="amounts">
            <div className="amount">
              <h3><span className="text-orange">76</span>K</h3>
              <p>Community members</p>
            </div>
            <div className="amount">
              <h3><span className="text-orange">76</span>K</h3>
              <p>Community members</p>
            </div>
            <div className="amount">
              <h3><span className="text-orange">76</span>K</h3>
              <p>Community members</p>
            </div>
          </div>

          <div className="about-container">
            <h3>What our listeners will say</h3>
            <p>Their experience through every platform</p>
            <div className="about-img">
              <img src={AboutImg} alt="" />
            </div>
            <div className="about">
              <h5>About and history</h5>
              <div className="about-text">
                <span>
                  <p>Lorem ipsum dolor sit amet,<strong> consectetur adipisicing elit.</strong> Optio sed, quasi voluptas iure ex quod natus eos qui iusto rem!</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolor voluptates eius <strong>mollitia velit aliquid</strong> ipsa in, ipsam saepe porro tenetur, ducimus voluptas error atque blanditiis itaque, corporis minima! <strong>Necessitatibus?</strong></p>
                </span>

                <span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id provident cumque inventore laboriosam repellendus, quos quia <strong>natus labore omnis ex</strong> adipisci voluptatem, quibusdam fugit recusandae reprehenderit eum? Quaerat eligendi qui unde <strong>nam libero esse eum</strong>, vel corporis temporibus saepe cupiditate.</p>
                  <p>Lorem ipsum dolor <strong>sit amet consectetur</strong> adipisicing elit. Sint, magni.</p>
                </span>
              </div>
            </div>
            <div className="founder">
              <h5>Founder and main host</h5>
              <div className="profile">
                {
                  hosts.map(host => (
                    <div key={host.id} className="person">
                      <img src={host.icon} className='icon-img' alt="" />
                      <div className="person-image">
                        <img src={host.avatar} alt="" />
                      </div>
                      <div className="person-info">
                        <small>Host {host.hostNumber}</small>
                        <h4>{host.name}</h4>
                        <p>{host.desc}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Listeners