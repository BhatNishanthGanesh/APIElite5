import React from 'react'
import Inputfield from '../components/Inputfield'
import Header from '../components/Header'
import Userquestions from '../components/Userquestions'

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
        <dir>
          <h3>My Questions</h3>
          <Userquestions/>
        </dir>
    </div>
  )
}

export default Profilepage
