//rafce
import React from 'react'
import FormInput from './components/FormInput'
import ListBasic from './components/ListBasic'
import UseEffectBasic from './components/UseEffectBasic';

const App = () => {
  const users = [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Charlie'}
    ];   

  return (
    <>
    <FormInput />
    <ListBasic users={users}/>
    <UseEffectBasic />
    </>
  )
}

export default App