import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Questions from './Questions'
import Input from '../components/Inputfield'
import "bootstrap/dist/css/bootstrap.min.css"

function Home() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Input/>
      </div>
      <div>
        {/* Body of the page  */}
        <Questions/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
