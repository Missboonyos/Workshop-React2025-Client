//rafce
import React, { useEffect, useState } from 'react'

const UseEffectBasic = () => {
    //JS
    const [value, setValue] = useState(0);
    
    useEffect(()=> {
        console.log('Hello from useEffect');
    }, [value]); //dependency array

    useEffect(()=> {
        //function body
        console.log('Second useEffect - runs once on mount');
    }, [])

  return (
    <div>
        <h1>{value}</h1>
        <button onClick={()=>setValue(value+1)}>
            Count</button>        
        {console.log('Hello from Render')}
    </div>
  )
}

export default UseEffectBasic