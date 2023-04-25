import React from 'react'
import { BsFillChatQuoteFill } from 'react-icons/bs';

type FeedbackProps = {
  name: string,
  avatar: string,
  source: string,
  quote: string
}

const SingleFeedback = ({name, avatar, source, quote}: FeedbackProps) => {
  return (
    <div className='single-feedback'>
      <div className='qoute'>
        <BsFillChatQuoteFill/>
      </div>
      <p>{quote}</p>
      <div className='writer'>
        <img src={avatar} className='avatar' alt="" />
        <p>{name}, </p>
        <img src={source} className='source' alt="" />
      </div>
    </div>
  )
}

export default SingleFeedback