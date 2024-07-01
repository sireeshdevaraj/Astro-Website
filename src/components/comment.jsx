"use strict";
import "../styles/global.css";

export default function Comment(props){
    return <div className="comment">
        <div>
        <h2>{props.title}</h2>
        <p className="comment-p">{props.content}</p>
        </div>
        {/*<a className="comment-link">{props.button}</a>*/}
    </div>
}