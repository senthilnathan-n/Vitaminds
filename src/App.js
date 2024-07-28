import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Signup/Signup'
import LoginForm from './Login/LoginForm.js'
import Home from './Home/Home.js'
import Calorie from './Calorie/Calorie.js'
import Dietcon from './Dietcon/Dietcon.js'
import Foodsaf from './Foodsafety/Foodsaf.js'
import About from './Aboutus/About.js'
import Contactus from './Contact/Contactus.js'

import Nav from './Components/Nav.js'
import Foodp from './FoodReceipe/Foodp.js'
import Preparation1 from './Preparation/Preparation1.js'
import Preparation2 from './Preparation/Preparation2.js'
import Preparation3 from './Preparation/Preparation3.js'
import Preparation4 from './Preparation/Preparation4.js'
import Preparation5 from './Preparation/Preparation5.js'
import Preparation6 from './Preparation/Preparation6.js'
import Preparation7 from './Preparation/Preparation7.js'
import Preparation8 from './Preparation/Preparation8.js'
import Preparation9 from './Preparation/Preparation9.js'
import Preparation10 from './Preparation/Preparation10.js'
import Preparation11 from './Preparation/Preparation11.js'
import Preparation12 from './Preparation/Preparation12.js'
import Preparation13 from './Preparation/Preparation13.js'
import Preparation14 from './Preparation/Preparation14.js'
import Share2 from './Share/Share2.js'

const App = () => {
  return (
    <>
   
   <BrowserRouter>
  <Routes>
   <Route path='/' element={<LoginForm/>}/>
   <Route path='/sign' element={<Signup/>}/>
   <Route path='/home' element={<Home/>}/>
  
    <Route path='/calorie' element={<Calorie/>}/>
    <Route path='/diet' element={<Dietcon/>}/>
    <Route path='/food' element={<Foodsaf/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contactus/>}/>
    <Route path='/foodpage' element ={<Foodp/>}/>
    <Route path='/share' element ={<Share2/>}/>

    <Route path='/p1' element ={<Preparation1/>}/>
    <Route path='/p2' element ={<Preparation2/>}/>
    <Route path='/p3' element ={<Preparation3/>}/>
    <Route path='/p4' element ={<Preparation4/>}/>
    <Route path='/p5' element ={<Preparation5/>}/>
    <Route path='/p6' element ={<Preparation6/>}/>
    <Route path='/p7' element ={<Preparation7/>}/>
    <Route path='/p8' element ={<Preparation8/>}/>
    <Route path='/p9' element ={<Preparation9/>}/>
    <Route path='/p10' element ={<Preparation10/>}/>
    <Route path='/p11' element ={<Preparation11/>}/>
    <Route path='/p12' element ={<Preparation12/>}/>
    <Route path='/p13' element ={<Preparation13/>}/>
    <Route path='/p14' element ={<Preparation14/>}/>
    


  
    
    
  
    
  </Routes>
  </BrowserRouter>



    </>
  )
}

export default App