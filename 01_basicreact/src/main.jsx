import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function chai(){
  return(
    <h1>hello fellows</h1>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'click me to visit google'
)

const myChai =(
  <a href="https://google.com">click here</a>
)

createRoot(document.getElementById('root')).render(
  <App />
)

