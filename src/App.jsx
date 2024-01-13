import react from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Hero from './Component/Hero/Hero'
import Footer from './Component/Footer/Footer'
import {orginals,action,RomanceMovies,ComedyMovies,HorrorMovies,Documentaries} from './Component/imageurl';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'




function App() {
  

  return (
    <>
     <div className='App'>  
    
     <Router>
       
     <Header>  </Header>
        <Routes>
          <Route path='/' exact element={<Hero/>} />
          <Route path='/Categories' element={<Footer/>} />
          </Routes>
        
          {/* <Hero /> */}
          <Footer  title={orginals} url={orginals} titles='Netflix Orginals'/>
          <Footer  url={action} titles="Action" isSmall />
     <Footer  url={RomanceMovies} titles="Romance" isSmall />
     <Footer  url={ComedyMovies} titles="Comedy" isSmall />
     <Footer  url={HorrorMovies} titles="Horror" isSmall />
     <Footer  url={Documentaries} titles="Documentaries" isSmall />
   
     </Router>
       
    
     
  
   
   
     
      

</div>
</>

  )
}

export default App
