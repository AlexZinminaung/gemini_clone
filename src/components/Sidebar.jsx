import { IoIosMenu } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";
import { AiFillSetting } from "react-icons/ai";


function Sidebar({isExtend, handleToggleIsExtend, handleToggleDisplayMessage}) {

  return (
    <>
      <div className={`overflow-hidden absolute md:static md:p-2 flex flex-col h-screen items-start bg-gray-600 text-white/60 tranistion-[width] duration-200 ${isExtend ? 'w-[350px] p-2': 'w-0 md:w-[55px]' }`}>
        <button 
          onClick={() => {handleToggleIsExtend(!isExtend)}}
          className=" hover:bg-gray-500 rounded-full p-2 "><IoIosMenu size={25}/>
        </button>
        
        <div className="flex-1 w-full">
          <button 
          onClick={ () => {handleToggleDisplayMessage(true)}}
          className="flex gap-2 hover:bg-gray-500 rounded-full p-2">
            <IoAddOutline size={25}/>
            {isExtend && <span>New chat</span>}
          </button>
          <ul className="w-full">
            <li><button 
                 onClick={ () => {handleToggleDisplayMessage(true)}}
                 className={`w-full hover:bg-gray-500 rounded-full p-2 ${isExtend ? 'flex' : 'hidden'}`}>What is Genimi AI</button></li>
          </ul>
        </div>

        <button 
        onClick={ () => {handleToggleDisplayMessage(true)}}
        className="flex gap-2 hover:bg-gray-500 rounded-full p-2 mt-auto w-full">
          <AiFillSetting size={25}/>
          {isExtend && <span>Settings</span>}
        </button>
      </div>
    </>
  )
}

export default Sidebar
