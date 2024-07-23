"use strict";
import "../styles/global.css";

export default function Comment(props){
    return <div className="comment dark:tw-bg-dark tw-flex-col dark:tw-ring-1 dark:tw-ring-gray-900 tw-p-8">
        <h2 className="dark:tw-text-darkHeading">{props.title}</h2>
        <p className="comment-p dark:tw-text-darkPara">{props.content}</p>

        {/*<a className="comment-link">{props.button}</a>*/}
    </div>
}