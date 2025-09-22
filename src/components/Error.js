import React from 'react';
// import '../styles/Error.css'; // Don't forget to create this CSS file!

// const Error = () => {
//     return (
//         <div className="error-container">
//             <div className="error-content">
//                 <img
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPm949IcUeOWGe2c-AbxptOouPaPuN6r14Aw&s"
//                     alt="Confused cat looking at a computer screen"
//                     className="error-cat-image"
//                 />
//                 <h1 className="error-title">Meow! Aww, Snap!</h1>
//                 <p className="error-message">Looks like something went wrong... Even our expert cat engineers are stumped!</p>
//                 <p className="error-sub-message">Don't worry, we're on it! Try heading back home or refreshing the page.</p>
//                 <a href="/" className="home-button">Take Me Home!</a>
//             </div>
//         </div>
//     );
// }

import { useRouteError } from 'react-router-dom';

const Error = ()=> {
    const err = useRouteError()
    return (
        <div className='error'>
            <h1>{err.status + " " + err.statusText}</h1>
            <h3>{err.data}</h3>
        </div>
    )
}

export default Error;