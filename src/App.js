import React from 'react'
import { Route } from 'react-router-dom'

import AppRouter from './component/config/router/router'
//import { useEffect } from 'react'
//import axious from "axios"

const App = () => {
// useEffect(() => {
//   axious.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
//     console.log(res)
//   })

  
// }, [])







  return (
    <>
    <AppRouter />
    </>
  )
  }

export default App