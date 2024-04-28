import React from 'react'

const ChatMessage = () => {
  return (
    <div className={`flex ${true ? "justify-start" : "justify-end"}`}>
      <div className={`p-1 ${true ? "rounded-md ": "px-5 rounded-full"} bg-[#191c21] text-white`}>
        {true && <img className='w-[12rem] h-[17rem] object-cover rounded-md' src='https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=400' 
        alt=''
        />}
            <p className={`${true ? "py-2" : "py-1"}`}>Message</p>
      </div>
    </div>
  )
}

export default ChatMessage
