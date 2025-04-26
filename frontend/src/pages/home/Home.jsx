import React from 'react'
import SideBar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
    return (
        <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-white-400/30 bg-clip-padding backdrop-filter backdrop-blur-lg'>
            <SideBar />
            <MessageContainer />
        </div>
    )
}

export default Home
