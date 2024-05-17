import React ,{useState} from "react"
import PropTypes from 'prop-types';


export default function Myfunc(props)
{    
    return (
        <>
        <div>
            <h1> {props.heading} </h1>
            <p>This is the paragraph text</p>
            <p>{props.paraText}</p>

        </div>
        </>
    )
};

Myfunc.propTypes={
    heading : PropTypes.string,
    paraText : PropTypes.string
};


Myfunc.defaultProps={
    heading : "Default Heading",
    paraText : "Default ParaText"
}

