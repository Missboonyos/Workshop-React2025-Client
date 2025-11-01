// rafce
import React from 'react'
import Title from './components/Title'
import Book from './components/Book'

const App = () => {
  return (
    <div>
      <Title 
      txt="Easy React"
      price={500} />
      <Book />
      </div>
  )
}

export default App