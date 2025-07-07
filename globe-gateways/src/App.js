import React from 'react'
import Main from '../src/components/main'
import "../src/assets/css/style.css"
import {Routes,Route} from 'react-router-dom'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Main></Main>}></Route>
    </Routes>
    </>
  )
}
