//import React
import React from "react";

//Error function for displaying error when 404
const Error = () => {
    return (
    <div className="error">
        <br/><br/>
        <h1>Oh noooo! Something went wrong!</h1>
        <p>It seems that the site you're requesting doesn't exist :(</p>
        <p>You can search new value or for example choose cow.</p>
    </div>
    )
};

export default Error;