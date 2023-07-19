import React from 'react'
import Typewriter from 'typewriter-effect';
import "./Typewriter.scss"
const TypeWriter = () => {
  return (
    <div className='writer'>
<Typewriter
  options={{
    strings: ['BLOGS' ,'DISCUSSION', 'CODES' , 'FUN'],
    autoStart: true,
    loop: true,
    delay:10,
    pauseFor:800
  }}
/>

    </div>  )
}

export default TypeWriter