import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from '../components/Body';
function Routes() {
  return (
   <Routes>
    <Route path='/appoint' Component={Body}></Route>
   </Routes>
  )
}

export default Routes