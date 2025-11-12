//rafce
import React from 'react'

const ConditionBasic = () => {
// JS
//checking true or false in JavaScript
    // console.log(Boolean("")); // false  
    // console.log(Boolean(0)); // false
    // console.log(Boolean(null)); // false
    // console.log(Boolean(undefined)); // false
    // console.log(Boolean(NaN)); // false
    
    // console.log(Boolean(" ")); // true
    // console.log(Boolean(1)); // true
    // console.log(Boolean('anonymous')); // true

    // OR operator "||" finds the first truthy value
    // const user = 'Rabbit' // returns 'Rabbit'
    // const user = 'Rabbit' || 'Guest' // returns 'Rabbit'
    // const user = null || 'Guest' // returns 'Guest'
    // const user = null || undefined || "Guest" || "Admin" 
    // returns 'Guest'
    // const user = null || undefined || 0 // returns 0
    // const user = null || undefined || "Anonymous" 
    // returns 'Anonymous'

    // AND operator "&&" finds the first falsy value
    // const user = 'Rabbit' && 'Guest' // returns 'Guest'    
    // const user = 'Rabbit' && '' // returns ''
    // const user = 'Rabbit' && 0 && 'Guest' // returns 0
    
    // Conditional expressions
    // if(condition) {
    //true block
    //} else {
    //false block
    //}

    // JavaScript with else if
//     let time = 14;

// if (time < 12) {
//     console.log("Good morning!");
// } else if (time < 18) {
//     console.log("Good afternoon!");
// } else {
//     console.log("Good evening!");
// }
    // const user = "Rabbit"
const user = null;
    // if(user){
        //     //true block
        //     return <h1>Welcome {user}</h1> 
        // } else {
            //     //false block
            //     return <h1>Login please!</h1>
            // }    
               

//     return (
//     <div>
//         {user || "Anonymous"}  
//         {
//             user && <h1>Please logout, {user}</h1>
//         }
        
//     </div>
//   )

  // Ternary operator "?" for conditional expressions
  // condition ? true block : false block
  return (
    <div>
{
    user === "ADMIN" // strict equality check
    ? "Welcome, Admin"
    : user === "USER"
    ? "Welcome, User"
    : "Welcome, Guest"
}
    </div>
     
  )
}

export default ConditionBasic