//rafce
import React from 'react'

const ListBasic = (props) => {
    const {users} = props; //destructuring      
    console.log(users)
    return <div>
        ListBasic 
        {users.map((el,i)=>{
            // return <h1 key={i}>{el.name}</h1>;              
            return <h1 key={i}>{el.name}</h1>;              
    })
}
    </div>    
    
}
export default ListBasic