//rafce
import React from 'react'

const Book = ({data, children}) => {
  //JSX
  console.log(data)
 
  return (
    <div> 
     {data.map((el, i)=> {
        // function body
        return <h1 key={i}>{el.name}</h1>
        // webpage result: Jan Feb
        // console result: {id: 1, name: "Jan"}, {id: 2, name: "Feb"}
      } )
     }
    </div>
   
  )
}

export default Book