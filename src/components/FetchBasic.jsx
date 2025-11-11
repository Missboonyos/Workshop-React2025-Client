//rafce
import React, { useEffect, useState } from 'react'

const url = "https://api.github.com/users";

const FetchBasic = () => {
    const [users, setUsers] = useState([ ]);

    useEffect (()=>{
        hdlFetch();
    },[ ])

    const hdlFetch = async()=> {
        // fn body
    try {
        const res = await fetch(url)
        const data = await res.json();
        setUsers(data);
    } catch (error) {
        console.log(error.message)
    }          
    }
  return (
    <div>
        <h1>Hello Fetch</h1>
        {users.map((item)=> {
                console.log(item);
                return <div>
                    <img src={item.avatar_url} />
                    <h3>{item.login}</h3>
                    </div>
            })}        
    </div>
  )}
export default FetchBasic