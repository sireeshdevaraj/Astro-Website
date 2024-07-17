import { useState, useEffect } from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CloseIcon from '@mui/icons-material/Close';


export default function Survey(props){
    const messageFooter = "Recruiters, I would love your feedback!" 
    const surveyMessage = `Please provide some feedback, whether it be on the resume or website.`

    let isRecruiter = props.isRecruiter // returns true or false
    const [display,setDisplay] = useState("tw-invisible")
    const [surveyCompleted, setSurveyCompleted] = useState(false);
    function showPopUp(){
        setDisplay("tw-visible");
        document.getElementsByClassName("main")[0].style.opacity = 0;
    }
    
    function closePopUp(){
        // General opt-out..Nothing here to do.
        setDisplay("tw-invisible");
        document.getElementsByClassName("main")[0].style.opacity = 1;
    }

    function submitButton(){
        // Send it to either Backend using API
        // Or
        // Keep it simple using disord web-sockets.
        closePopUp();
        setSurveyCompleted(true);
    }

    function recruiterSurveyHandler(){
        showPopUp();
    }

    function RecruiterSurvey(){
        return <>
        <div className={"tw-w-[50vw] tw-h-max tw-m-auto tw-bg-gray-900 tw-fixed tw-top-1/2 tw-left-1/2 tw-p-6 tw-z-30 tw--translate-x-1/2 tw--translate-y-1/2 " + display}>
            <CloseIcon client:only="react" className="tw-right-4 tw-absolute tw-cursor-pointer tw-text-gray-600 hover:tw-text-white" onClick={closePopUp} />
            <p className="tw-text-gray-200 tw-text-lg">{surveyMessage}</p>
            <div className="tw-h-[30vh] tw-flex tw-gap-2 tw-flex-col">
                <textarea 
                placeholder="You can drop a Hi too!"
                autoFocus={true}
                rows={4}
                cols={40}
                className="tw-font-sans"/>
                <p onClick={submitButton} className="tw-p-2 tw-text-center tw-cursor-pointer tw-w-14 tw-rounded-md tw-bg-indigo-500 tw-text-base tw-text-white tw-shadow-sm hover:tw-bg-indigo-400 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-indigo-500">Submit</p>
            </div>
        </div>
        </>
    }

    
    return isRecruiter === true
            ? // Check if the survey is completed!! (Could plan cookies and localstorage later!!)
            ( !surveyCompleted && <> 
            <div onClick={recruiterSurveyHandler} className={"tw-w-[100vw] tw-h-6 tw-fixed tw-bottom-0 tw-justify-center tw-items-center tw-flex tw-inline tw-z-30 tw-visible tw-bg-cyan-500 tw-cursor-pointer"}>
                <ArrowOutwardIcon className="tw-cursor-pointer" />
                <p className="tw-text-black tw-text-base">{messageFooter}</p>    
            </div>
            <RecruiterSurvey client:only="react" />
            </>)
            : 
            null
}