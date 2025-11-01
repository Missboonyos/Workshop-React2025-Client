// *rfce
// import React from 'react'

// function Title() {
//   return (
//     <div>Title</div>
//   )
// }

// export default Title

// *rafce
import React from 'react'

const Title = (props) => {
    //JS
console.log(props) // result: { txt: "Easy React", price: 500 }
// key = txt ; value = "Easy React"
// key = price ; value = 500

    //JSX
  return (
    <div>
      Title...{props.txt}
      Price = {props.price}
    </div> 
    // console result: { txt: "Easy React", price: 500 }
    // webpage result: Title...Easy React Price = 500
    // we can use props.txt to access the value passed from App.jsx
  )
}

export default Title