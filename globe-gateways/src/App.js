import React from 'react'
import Main from '../src/components/main'
import "../src/assets/css/style.css"
import {Router,Route} from 'react-router-dom'

export default function App() {
  return (
    <>
    <Router>
      <Route path='/' element={<Main></Main>}></Route>
    </Router>
    </>
  )
}
