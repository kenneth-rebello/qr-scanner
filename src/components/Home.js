import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">
            <h1 className="title">QR Code App</h1>
            <div className="btn-box">
                <button className="btn">
                    <Link to="/scanner">Open QR Scanner</Link>
                </button>
                <button className="btn">
                    <Link to="/generator">Open QR Generator</Link>
                </button>
            </div>
        </div>
    )
}

export default Home;