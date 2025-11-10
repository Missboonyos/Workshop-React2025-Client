//rafce
import React, { useState } from 'react'

const FormInput = () => {
    // JS
    const [value, setValue] = useState({
        title: "",
        address: ""
    })

    const hdlOnChange = (e)=> {       
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const hdlSubmit = (e)=> {
        e.preventDefault()  
        console.log(value)
        console.log("submit")
    }
    

    console.log(value)
     // JSX (HTML+JS)
  return (
    <div>
        <h1>{value.title}</h1>
        <form onSubmit={hdlSubmit}>
            <label>Title:</label>
            <input name="title" onChange={(e)=>hdlOnChange(e)}
            // shorthand below is ok too but prefer the above callback fn for clarity
            // <input name="title" onChange={hdlOnChange} />
            />

            <label>Address:</label>
            <input name="address" onChange={(e)=>hdlOnChange(e)}
            />

            <button>Submit</button>
        </form>
    </div>
  )
}
export default FormInput