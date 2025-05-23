import { useState, useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState('8')
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "012346789"
    if(charAllowed) str += "!@#$%^&*()_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,11)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, charAllowed,passwordGenerator])
  return (

    <div className='w-ful max-w-md mx-auto shadow-md 
    rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-800'>
          <h1 className='text-white text-center '>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-amber-50 text-yellow-900'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref = {passwordRef}
         />
         <button 
         onClick={copyPasswordToClipboard}
         className='outline-none bg-cyan-400
          text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input type="range"
          min={4}
          max={10}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          
           />
           <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-l'>
          <input
           type="checkbox"
           defaultChecked={numberAllowed}
           id='numberInput'
           onChange={() => {
            setNumberAllowed((prev) => !prev);
           }}
           />
           <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-l'>
          <input
           type="checkbox"
           defaultChecked={charAllowed}
           id='characterinput'
           onChange={() => {
            setCharAllowed((prev) => !prev)
           }}
           />
           <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
