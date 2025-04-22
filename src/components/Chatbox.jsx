import { FaArrowUp } from "react-icons/fa";
import { useContext, useState } from "react";
import { StateContext } from "../App";

function Chatbox()
{
    const {state, handleAppendChat, handleToggleIsUserTurn} = useContext(StateContext)
    const [text, setText] = useState('')
    
    const handleChangeText = ({target}) => {
        setText(target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // check if input is empty
        if (text.trim() === '')
        {
            return ;
        }
        handleAppendChat({user: true, text: text})
        handleToggleIsUserTurn(false)
        setText('')

    }


    return (
            <form
            onSubmit={handleSubmit} 
            className="flex justify-between border border-gray-500 p-2 rounded-2xl w-[80%] lg:w-[600px] mt-auto mb-4 text-gray-500 bg-gray-800">
                <input 
                type="text" 
                placeholder="Ask Genmini"
                value={text}
                onChange={handleChangeText}
                className="w-full p-2 focus:outline-none bg-gray-800"
                />
                <button 
                disabled={!state.isUserTurn}
                className="flex md:hidden p-2  text-white">
                    <FaArrowUp size={25}/>
                </button>
            </form>
        )
}



export default Chatbox;