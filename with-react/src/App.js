import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [value, setValue] = useState(0)
  return (
    <div className="App">
      <Header logotext = "CodeWithHarry"/>
      <div className="value">{value}</div>
      <button onClick={()=>{setValue(value+1)}}>Add</button>
      <br />
      <button onClick={()=>{setValue(value-1)}}>Sub</button>
      <br />
      <button onClick={()=>{setValue(0)}}>Reset</button>
      <Footer />
    </div>
  );
}
  


export default App;
