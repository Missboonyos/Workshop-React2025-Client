// rafce
import React from 'react'
import Title from './components/Title'
import Book from './components/Book'

const App = () => {
  const user = [
    {id: 1, name: "Jan"},
    {id: 2, name: "Feb"}
  ]

  return (
    <div>
      <Title 
        txt="Easy React"         price={500}       />
      <Book data={user}>
        <p>
          This is a book about React.
          <span> It is very useful for beginners. </span>
        </p>
        <button>Add to Cart</button>
      </Book>              
      </div>
  )
}

export default App