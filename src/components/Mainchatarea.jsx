import Chatbox from "./Chatbox"
import Navbar from "./Navbar"
import Responsebox from "./Responsebox"

function Mainchatarea()
{

    return (
        <div className="w-full h-screen flex flex-col items-center bg-gray-800">
            <Navbar/>
            <Responsebox/>
            <Chatbox/>
        </div>
    )
}


export default Mainchatarea