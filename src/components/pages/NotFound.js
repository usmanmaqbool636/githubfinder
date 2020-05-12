import React from 'react'
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div style={{color:"white"}}>
            <h1>
                Not Found
            </h1>
            <p className="lead"> the page your are looking for does not exist.</p>
            <p> back to home <Link to="/">Home</Link></p>
        </div>
    )
}

export default NotFound;