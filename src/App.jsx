//rafce
import React, { useState } from 'react'

const App = () => {
  //JS
  //const [state, setState] = useState(initialState)
  const [msg, setMsg] = useState("Believe in yourself!")
  console.log(msg)

 
  
    //HTML (JSX)
  return (
    <div>
      App...{msg}
      <button onClick={()=>setMsg("You can do it")}>BeepBeep</button>
      </div>
  )
}

export default App