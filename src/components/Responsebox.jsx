import { useContext, useEffect, useRef, useState } from 'react'
import { StateContext } from "../App";
import Markdown from 'react-markdown'

function Responsebox()
{
    const {state} = useContext(StateContext)
    const messageEndRef = useRef(null)

    // check if user input massage ? if it is then scroll down
    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [state])

    return (
        <div className="w-full h-full flex flex-col justify-start items-center overflow-y-auto">
                {/* Display if the prompt is new */}
                {state.chatEntry.length === 0 && (
                        <div className="text-transparent bg-gradient-to-r bg-clip-text text-center text-4xl from-blue-400 to-red-400 m-auto">Hello, How can I help?</div>
                    )}

                {state.chatEntry.map( (chat, index) => {
                    return (
                            <div ref={messageEndRef} key={index}  className={`flex w-full md:w-[50%] p-6 md:p-0 ${chat.user ? ' justify-end ' : ' justify-start '}`}>
                                <article className={`${chat.user ? 'text-white ml-auto bg-gray-500 rounded-xl px-4 py-2 mr-4 text-right' : 'prose dark:prose-invert lg:prose-xl max-w-none w-full'}`}>
                                                    <Markdown>{chat.text}</Markdown>
                                </article> 
                            </div>         
                        )
                })}
        </div>
    )
}


export default Responsebox