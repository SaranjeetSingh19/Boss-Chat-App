import React from 'react'
import OneConversation from './OneConversation'

const Conversations = () => {
  return (
    <div className='py-2 flex flex-col overflow-auto'>
        <OneConversation />
        <OneConversation />
        <OneConversation />
        <OneConversation />
        <OneConversation />
        <OneConversation />
    </div>
  )
}

export default Conversations