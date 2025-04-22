import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { useContext } from "react";
import { StateContext } from "../App";


function Navbar()
{
    const {state, handleToggleIsExtend} = useContext(StateContext)
    
    return (
        <nav className="w-full flex p-2 items-center text-white">
            <button 
            onClick={() => {handleToggleIsExtend()}}
            className="md:hidden hover:bg-gray-500 rounded-full p-2 "><IoIosMenu size={25}/>
            </button>
            <span className=" font-semibold text-lg">Gemini Clone</span>
            <button className=" ml-auto">
                <MdOutlineAccountCircle size={35}/>
            </button>
        </nav>
    )
}


export default Navbar;