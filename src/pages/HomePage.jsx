import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'

const HomePage = () => {

  const [selectedUser, setSelectedUser] = useState(false)

  return (
    <div className='w-full h-screen border sm:px-[15%] sm:py-[5%]'>
      <div className={`text-white w-full h-full grid grid-cols-1 border-2 border-gray-600 rounded-2xl overflow-hidden backdrop-blur-xl relative ${selectedUser ? 'md:grid-cols-[1fr_1.5_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>
        <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        <ChatContainer />
        <RightSidebar />
      </div>
    </div>
  )
}

export default HomePage
