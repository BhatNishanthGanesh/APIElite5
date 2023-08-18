import React from 'react'
import Inputfield from '../components/Inputfield'
import Header from '../components/Header'


const Profilepage = () => {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <div>
            {/*Post request field*/}
            <Inputfield/>
        </div>
    </div>
  )
}

export default Profilepage
