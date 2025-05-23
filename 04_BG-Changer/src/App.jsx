import { useState } from "react"

function App() {
  const [color, setcolor] = useState("white")

  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor : color}}>
      <div className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 
        shadow-lg bg-black px-3 py-2 rounded-3xl">
          <button onClick={()=> setcolor("red")}
          className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"Red"}}>Red</button>
          <button onClick={()=> setcolor("silver")}
           className="outline-none px-4 py-1 
          rounded-full text-black shadow-lg"
          style={{backgroundColor:"Silver"}}>Silver</button>
          <button onMouseOver={()=> setcolor("pink")}
           className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"Pink"}}>Pink</button>
          <button onMouseOver={()=> setcolor("green")}
           className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"Green"}}>Green</button>
          <button onMouseOver={()=> setcolor("violet")}
           className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"violet"}}>violet</button>
          <button onMouseOver={()=> setcolor("yellow")}
          className="outline-none px-4 py-1 
          rounded-full text-black shadow-lg"
          style={{backgroundColor:"Yellow"}}>Yellow</button>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
