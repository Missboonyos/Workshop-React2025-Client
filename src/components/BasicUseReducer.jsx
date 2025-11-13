//rafce
import React, { useState } from 'react'

const people = [
    { id: 1, name: 'Jan' },
    { id: 2, name: 'Feb' }
]

const BasicUseReducer = () => {
// JS
// Local state
const [data, setData] = useState(people)

const hdlRemove = (id) => {
    let newData = data.filter((el)=>el.id !==id);
    setData(newData)
    
    //The following code; people.filter is not correct bcos after we remove user, one user still show bcos we select const people everytime. In fact, we should use data.filter to delete each people
    // let newData = people.filter((el)=>el.id !==id)
    // console.log(newData) // newData = data we don't delete
    // setData(newData)

    // let newData = people.filter((el)=> console.log(el.id)) //to filter the unwanted data, in this case el.id = id is unwanted data
    // alert(`Hello Remove, id = ${id}`)
    //alert("Hello Remove" +id)
}
const hdlReset = () => {
    setData(people)
    //After click Reset button, the data will return back to initial state
    // alert("Hello Reset")
}
const hdlClear = () => {
    setData([]) 
    //After click Clear button, there'll be no data shown. That's why we use [] empty array.
    // alert("Hello Clear")
}

  return (
    <div>
        {data.map((el)=> {
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
export default BasicUseReducer