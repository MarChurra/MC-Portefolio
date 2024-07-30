import React from "react"
import { Link } from "react-router-dom"
import withPageTransition from '../components/TransitionComponent.jsx';

function NotFound() {
    return (
        <div className="not-found-container">
            <img src="/assets/icons/404.png" alt="Not found error 404 icon" className="not-found"></img>
            <h1>Sorry, the page you were looking for was not found.</h1>
            <Link to="/" className="link-button">Return to Home</Link>
        </div>
    )
}

export default NotFound