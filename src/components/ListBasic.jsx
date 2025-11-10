//rafce
import React from 'react'

const ListBasic = () => {

    const users = [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Charlie'}
    ];
        // console.log(users[0].name);// Alice
        // console.log(users[1].name);// Bob
        // console.log(users[2].name);// Charlie
        // console.log(users[1]);// {id: 2, name: 'Bob'}
        //.map(fn (el,index, arr))
  return (
    <div>ListBasic
        {
            users.map ((el)=> {
                // fn body
                return <div key={el.id}>
                <h1>{el.name}</h1>
                <h2>{el.id}</h2>
                </div>                
            })
        }
    </div>
  )
}

export default ListBasic