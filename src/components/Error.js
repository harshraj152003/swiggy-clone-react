import React from 'react';
import { useRouteError } from 'react-router-dom';
import '../styles/Error.css';

const Error = () => {
    const err = useRouteError();

    return (
        <div className="full-screen-container">
            <div className="error-container">
                <div className="error-content">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPm949IcUeOWGe2c-AbxptOouPaPuN6r14Aw&s"
                        alt="Confused cat looking at a computer screen"
                        className="error-cat-image"
                    />
                    <h1 className="error-title">Meow! Aww, Snap!</h1>
                    <p className="error-message">
                        Looks like something went wrong... Even our expert cat engineers are stumped!
                    </p>
                    <h3 className="error-status">
                        {err.status} {err.statusText}
                    </h3>
                    <p className="error-sub-message">
                        {err.data || "Don't worry, we're on it! Try heading back home or refreshing the page."}
                    </p>
                    <a href="/" className="home-button">Take Me Home!</a>
                </div>
            </div>
        </div>
    );
};

export default Error;