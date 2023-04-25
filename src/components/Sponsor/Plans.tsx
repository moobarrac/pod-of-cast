import React from 'react'

type PlanProps = {
  plan: SponsorPlan,
  index?: number
}

const Plans = ({ plan, index }:PlanProps) => {
  return (
    <div className='plan'>
      <div className={`plan-top ${index === 1 && 'plan-orange'}`}>
        <h4>{plan.name}</h4>
        <p>{plan.description}</p>
        <div className='extra'>
          <button className='btn btn-dark btn-shadow'>SUBSCRIBE</button>
          <div className='pricing'>
            <span className='price'>{plan.price}</span>
            <small className='freq'>/month</small>
          </div>
        </div>
      </div>
      <div className={`plan-bottom ${index === 1 && 'plan-orange'}`}>
        <p>What's included;</p>
        <ul>
          {
            plan.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Plans