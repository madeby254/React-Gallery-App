//import React
import React from "react";

//Photo function creates one photo element
const Photo = (props) => (
    <li>
        <img src={props.url} alt="" />
    </li>
);
//export Photo function
export default Photo;