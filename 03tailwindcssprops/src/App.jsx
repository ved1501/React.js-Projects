import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './components/Card1'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Ved",
    age: 21
  }
  let newArr =[1,2,3,4]

  return (
    <>
    <h1 className='bg-amber-600 text-black p-4 rounded-2xl mb-5'>Tailwind css test</h1>
    <Card1 username="chaiaurcode" btnText="Visit Me"/>
    <Card1 username="Sai" btnText="Go Ahead"/>
    </>
  )
}

export default App
