import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton';

const Messages = () => {
    const { loading, messages } = useGetMessages();
    // console.log(messages);

    const lastMessageRef = useRef();

    useEffect(() => {
        lastMessageRef.current?.scrollIntoView({ behavioir: "smooth" });
    }, [messages])

    return (
        <div className='px-4 flex-1 overflow-auto'>
            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

            {!loading && messages.length === 0 && (
                <p className='text-center text-gray-400'>Send a message to start the conversation</p>
            )}

            {!loading && messages.length > 0 && messages.map((message) => (
                <div key={message._id}
                    ref={lastMessageRef}
                >
                    <Message message={message} />
                </div>
            ))}
        </div>
    )
}

export default Messages
