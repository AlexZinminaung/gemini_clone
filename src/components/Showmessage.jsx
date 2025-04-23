
function Showmessage({handleToggleDisplayMessage})
{
    return (
        <div className="flex flex-col justify-center items-center gap-2 p-2 absolute z-10
                        backdrop-blur-md min-w-[170px] w-80% left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 rounded-lg shadow-sm">
            <p className=" text-white text-center">Sorry this app is only for client side, this feature may not work!</p>
            <button
            onClick={ () => {handleToggleDisplayMessage(false)}}
            className="text-white border p-2 rounded-lg">close</button>
        </div>
    );
}


export default Showmessage;