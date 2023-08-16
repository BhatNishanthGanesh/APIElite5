import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/carousel'
import Footer from '../components/footer'
import Questions from '../pages/Questions'

function Home() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Carousel/>
      </div>
      <div>
        {/* Body of the page  */}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
