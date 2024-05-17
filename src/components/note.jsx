"use strict";
import "../styles/global.css";
export default function Note(props){
    return <div className="note">
        <div className="note-head" style={{visibility: (props.header!==undefined ? "visible" : "hidden")}}>{props.header}</div>
        <p className="note-p">{props.content}</p>
    </div>
}