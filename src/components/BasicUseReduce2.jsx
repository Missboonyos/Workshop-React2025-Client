//rafce
import React, { useReducer, useState } from 'react'

const data = [
    { id: 1, name: 'Jan' },
    { id: 2, name: 'Feb' }
]

const defaultState = {
    people:data
}

const reducer = (state, action) => {
    //fn body
    // console.log(action.type, action.payload.id)
    //logic
    if (action.type === "CLEAR") {
        //true
        return {...state, people:[]} 
        //we use ...to copy the whole data so that we can update only some data which is, in this case, people
    }
    if (action.type === "RESET") {
        return {...state, people:data} 
        //we set people:data bcos it's RESET. We want to reset that means we want to return the initial data.
    }
    if (action.type === "REMOVE_ITEM") {
        //console.log to see the console result
        // let newData = state.people.filter((el)=>console.log(el))

        //Ex1: We can code this way, but it's quite long. Thus, we can destructure it. See Ex2
        // let newData = state.people.filter((el)=>el.id !== action.payload.id)

        //Ex2: Destructuring Pattern
        // let id = action.payload.id //then we destructure it as below
        let {id} = action.payload
        let newData = state.people.filter((el)=>el.id !==id)
        // console.log(newData)
        return {...state, people:newData}
    }
    return state
}

const BasicUseReducer2 = () => {
    // JS
    // Local state
    // const [data, setData] = useState(people)
    // const [state, dispatch] = useReducer(reducer, defaultState)
    //we can name "state" in any words, it's not reserved word. In this sample, I name it as rabbit
    const [rabbit, dispatch] = useReducer(reducer, defaultState)

const hdlRemove = (id) => {  
    dispatch({type:"REMOVE_ITEM", payload:{id:id}})
    // dispatch({type:"REMOVE_ITEM", payload:{ id } }) // shorthand style
}
const hdlReset = () => { 
    dispatch({type:"RESET"})   
}
const hdlClear = () => {
    dispatch({type:"CLEAR"})   
}

  return (
    <div>
        {rabbit.people.map((el)=> {
                return (
                <div key={el.id}>
                    <h1>{el.name}</h1>
                    <button onClick={()=>hdlRemove(el.id)}>Remove User</button>
                </div>
                )
            })
        }
        <hr />
        {/*for reset and clear buttons, we don't need to pass any arguments. Thus, we don't use onClick with an arrow function*/}     
        <button onClick={hdlReset}>Reset</button>
        <button onClick={hdlClear}>Clear</button>
    </div>
  )
}
export default BasicUseReducer2