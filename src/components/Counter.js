import React ,{useState} from "react"
import PropTypes from 'prop-types';

export default function Myfunc(props)
{

    const [text,setText]=useState("");
    const [btnText,setbtnText]=useState("Enable Dark  Mode");

    const [darkStyle,setdarkStyle]=useState({
        color : '#000',
        backgroundColor : '#fff'
    });

    let set_darkmode_style=() =>{
        if(darkStyle.color==='#000')
        {
            setdarkStyle({
            color :'#fff',
            backgroundColor: "#000"
            }
            ),
            setbtnText("Enable White mode")
        }

        else
        {
            if(darkStyle.color==='#fff')
            {
                setdarkStyle({
                color :'#000',
                backgroundColor: "#fff"
                }
                ),
                setbtnText("Enable Dark mode")
            }            

        }
    }

    const handleClick_uppercase=() =>{
        console.log("button is clicked");
        let upperText=text.toUpperCase();
        setText(upperText);
    }

    const handleClick_lowercase=() =>{
        let lowerText=text.toLowerCase();
        setText(lowerText);
    }

    const handleChange=(event)=>{
         console.log("Tries to change the input value");
         setText(event.target.value);
    }

    const handleClick_clearText=() =>{
        setText("");
    }
    
    return (
        <>
        {/* <div>
            <h1> {props.heading} </h1>
            <p>This is the paragraph text</p>
            <p>{props.paraText}</p>

        </div> */}

        <div className="main_box" style={darkStyle}>
            <div>
                <h1>Enter the text </h1>
                <textarea className="txt_area" id="myBox" rows="5" value={text} onChange={handleChange}> </textarea>
            </div>

            <div className="buttons">
                <button onClick={handleClick_uppercase}>Convert to Uppercase</button>

                <button onClick={handleClick_lowercase}>Convert to Lowercase</button>

                <button onClick={handleClick_clearText}>Clear Text</button>

                <button onClick={set_darkmode_style}>{btnText}</button>
            </div>

            <div className="container" >
                 <h1>{props.summary}</h1>
                 <p>{text.split(" ").length} words and {text.length} characters</p>
                 <p>{0.008 * text.split(" ").length} Minutes to read</p>

            </div>

            <div className="preview">
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

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

