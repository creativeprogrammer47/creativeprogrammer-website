import React from 'react'
import './comingSoon.css'
import csv from './images/comingSoonVector.png'

function ComingSoon() {
    return (
        <div className="main">
        <div className = "coming__soon">
            <h1>COMING SOON</h1>
            <h5>#underconstruction</h5>
        </div>
        <img className = "csvimg" src = {csv} alt="coning soon"/>
        </div>
    )
}

export default ComingSoon
