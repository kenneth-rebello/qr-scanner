import React, { useState } from 'react'
import QrReader from 'react-qr-reader';

const Scanner = () => {

    const [result, setResult] = useState('No image detected')

    const handleScan = data => {
        if (data) {
            setResult(data)
        }
    }

    const handleError = err => {
        alert(err)
    }

    return (
        <div className="home">
            <div className="container">
                <QrReader
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: '100%' }}
                />
            </div>
            <p>{result}</p>
        </div>
    )
}

export default Scanner;