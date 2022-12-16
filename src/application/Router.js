import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from '../App'
import FortunePage from '../pages/FortunePage'

function Router() {
  return (
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/fortune' element={<FortunePage/>}/>
        </Routes>
     </BrowserRouter>
  )
}

export default Router