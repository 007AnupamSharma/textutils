import React,{useState} from 'react'

export default function FormText(props) {

    const HandleUpClick = ()=>{
        console.log("UpperCase was click" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const HandleLoClick = ()=>{
        console.log("LowerCase was click" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }
    const [text, setText] = useState('')
  return (
    <>
    <div className="container">
        <h1 style={{color: props.mode === 'light'? 'black':'white'}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'? 'white':'grey', color: props.mode === 'light'? 'black':'white'}} id="myBox" rows="8"></textarea>
        </div>

        <button className="btn btn-primary" onClick={HandleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-secondary mx-3" onClick={HandleLoClick}>Convert to Lowercase</button>
        </div>
        <div className="container mt-3" style={{color: props.mode === 'light'? 'black':'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something to preview it"}</p>
        </div>
    </>
  )
}
