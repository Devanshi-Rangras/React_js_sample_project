import { useState } from 'react'
import './App.css'

function App() {
  // using js

  // counter = 0 
  // const addValue = ()=> {
  //   counter += 1
  //   const h2 = document.querySelector('h2')
  //   h2.innerHTML = `counter value : ${counter}`  
  // }

  // const removeValue = () => {
  //   if(counter <= 0){
  //     const h2 = document.querySelector('h2')
  //     h2.innerHTML = 'Value is 0 you can not decrees the value '      
  //   }else{
  //     counter -= 1
  //     const h2 = document.querySelector('h2')
  //     h2.innerHTML = `counter value : ${counter}`  
  //   }
  // }


  // Using React Js

  let [counter,setCounter] = useState(0)

  const addValue = () => {
    if (counter <20) setCounter(counter + 1)
  }
  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1)
  }

  return (
    <>
    <h1>chai or  react</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={removeValue}>-</button>
    <button onClick={addValue}>+</button>
    </>
  )
}

export default App
