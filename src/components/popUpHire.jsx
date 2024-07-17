import { useState, useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Survey from "./survey";
import { survey } from "../state.store";

export default function PopUpHire(props){
    const message = "Are you a recruiter?" 
    const [display,setDisplay] = useState("tw-invisible")
    const [isRecruiter,setRecruiter] = useState(false);
    const shouldPopUp = survey.get("isSurveyCompleted")

    function showPopUp(){
        setDisplay("tw-visible");
        document.getElementsByClassName("main")[0].style.opacity = 0.3;
    }
    
    function closePopUp(){
        // General opt-out..Nothing here to do.
        setDisplay("tw-invisible");
        document.getElementsByClassName("main")[0].style.opacity = 1;
    }

    function yesButton(){
        // I would love to get some simple ping that someone viewed my profile.
        setRecruiter(true);
        closePopUp();
    }

    function noButton(){
        // No, someone besides a HR viewed the website.
        setRecruiter(false);
        closePopUp();        
    }

    useEffect(() => {
        setTimeout(() => {
            if (!shouldPopUp) showPopUp();
            survey.set(true) // Do not pop up again(i.e in between re-renders).
        },5000)
    },[]) // We only need to run this once.

    return <>
    <div className={"tw-w-[40vw] tw-h-[20vh] tw-m-auto tw-bg-gray-900 tw-fixed tw-top-1/2 tw-left-1/2 tw-p-6 tw-z-40 tw--translate-x-1/2 tw--translate-y-1/2 " + display}>
        <CloseIcon className="tw-right-4 tw-absolute tw-cursor-pointer tw-text-gray-600 hover:tw-text-white" onClick={closePopUp} />
        <p className="tw-text-white tw-text-lg tw-font-bold">{message}</p>
        <div className="tw-flex tw-gap-2">
            <button onClick={yesButton} className="tw-p-2 tw-text-center tw-cursor-pointer tw-w-12 tw-rounded-md tw-bg-indigo-500 tw-text-base tw-text-white tw-shadow-sm hover:tw-bg-indigo-400 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-indigo-500">Yes</button>
            <button onClick={noButton} className="tw-p-2 tw-text-center tw-cursor-pointer tw-w-12 tw-rounded-md tw-bg-indigo-500 tw-text-base tw-text-white tw-shadow-sm hover:tw-bg-indigo-400 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-indigo-500">No</button>
        </div>
    </div>
        <Survey client:only="react" isRecruiter={isRecruiter}/>
    </>
}