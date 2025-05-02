import React from 'react'
import Conversation from './Conversation'
import useConversations from '../../hooks/useGetConversation'
import { getRandomEmoji } from '../../utils/emojis'

const Conversations = () => {
    const { loading, conversations } = useConversations();
    // console.log(conversations);

    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {conversations.map((conversation, idx) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    emoji={getRandomEmoji()}
                    lastIdx={idx === conversations.length - 1}
                />
            ))}
            {loading ? <span className="loading loading-spinner loading-lg"></span> : null}
        </div>
    )
}

export default Conversations
