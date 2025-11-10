//rafce
import React from 'react'

const ListBasic = () => {

    const users = [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Charlie'}
    ];

        console.log(users[0].name);// Alice
        console.log(users[1].name);// Bob
        console.log(users[2].name);// Charlie
        console.log(users[1]);// {id: 2, name: 'Bob'}
  return (
    <div>ListBasic</div>
  )
}

export default ListBasic