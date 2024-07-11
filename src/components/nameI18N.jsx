import { useEffect, useState } from "react";
import { NAMES } from "../consts";

export default function Name(){
    const [index,setIndex] = useState(0)
    const myNames = NAMES;
    useEffect(() => {
        let intervalId = setInterval(() => {
            setIndex((index+1)%myNames.length)
        },4000)

        return () => clearInterval(intervalId)
    },[index])

    return <>{myNames[index]}
    {
        index > 0 
        ? 
        <span style={{fontSize:"14px",color:"blue"}}>
            (Sireesh)
        </span> 
        : null
    }
    
    </>
}