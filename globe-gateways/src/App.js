import React, { useEffect } from 'react'
import Main from '../src/components/main'
import firstCss from "../src/assets/css/style.css"
import "../src/assets/js/main.js"
import $ from "../src/assets/js/main.js"
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
