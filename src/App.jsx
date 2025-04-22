import { useReducer, createContext, useEffect } from "react"
import Mainchatarea from "./components/Mainchatarea"
import Sidebar from "./components/Sidebar"

const api_key = import.meta.env.VITE_GOOGLE_API_KEY

// import gemini
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: api_key});

function reducer(state, action) {

  switch(action.type)
  {
    case 'toggle_extend':
      return {...state, isExtend: !state.isExtend}
    case 'append_chat':
      return {...state, chatEntry: [...state.chatEntry, action.payload]}
    case 'toggle_user_turn':
      return {...state, isUserTurn: action.payload}
    default:
      return state
  }

}

const StateContext = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, {isExtend: false, chatEntry: [], isUserTurn: true})
  

  // useEffect to fetch gemeni api
  useEffect(() => {
      
      // wait for user input
      if (state.isUserTurn)
      {
          return ;
      }
      // then fetch response 
      const fetchResponse = async (contents) => {
          try {
              const response = await ai.models.generateContent({
                  model: "gemini-2.0-flash",
                  contents: contents,
                });

                handleToggleIsUserTurn(true)
                handleAppendChat({user: false, text: response.text});

          }
          catch (error)
          {
              console.log(error)
          }

      }

      // call the api fetching function
      fetchResponse(state.chatEntry[state.chatEntry.length -1].text)

  }, [state])

  // Handle state function
  const handleToggleIsExtend = () => {
    dispatch({type: 'toggle_extend'})
  }

  const handleAppendChat = (value) => {
    dispatch({type: 'append_chat', payload: value})
  }

  const handleToggleIsUserTurn = (value) => {
    dispatch({type: 'toggle_user_turn', payload: value})
  }

  return (
    <div className="flex items-start">
      <Sidebar isExtend={state.isExtend} handleToggleIsExtend={handleToggleIsExtend}/>
      <StateContext.Provider value={{state, handleToggleIsExtend, handleAppendChat, handleToggleIsUserTurn}}>
        <Mainchatarea/>
      </StateContext.Provider>

    </div>
  )
}

export { StateContext }
export default App
