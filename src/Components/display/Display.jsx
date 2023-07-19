import React from 'react'
import "./Display.scss"
import TypeWriter from './TypeWriter'
import developer from "../../image/developer.png"

const Display = () => {
  return (
    <div className="featured">
        <div className="container">
            <div className="left">
                <h1>Your Perfect Stop For <TypeWriter className="writer" /> </h1>
                <div className="popular">
                    <button>Create</button>
                    <button>Read</button>
                </div>
            </div>
            <div className="right">
                <img src={developer} alt="" srcset="" />
            </div>
        </div>
    </div>
  )
}

export default Display