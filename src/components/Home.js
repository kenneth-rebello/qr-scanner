import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">
            <h1 className="title">QR Scanner</h1>
            <button className="btn">
                <Link to="/scanner">Open QR Scanner</Link>
            </button>
        </div>
    )
}

export default Home;