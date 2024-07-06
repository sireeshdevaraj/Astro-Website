import { useEffect, useState } from "react";


export default function Name(){
    const [index,setIndex] = useState(0)
    let myNames = [
        'Sireesh',   // English, Spanish, French, German, Portuguese, Italian
        '시리쉬',     // Korean
        'シリーシュ', // Japanese
        'सिरीश',     // Hindi
        'సిరీష్',    // Telugu
        '西瑞什',     // Chinese
        'سيريش',     // Arabic
        'Сириш',     // Russian
        'সিরীশ'      // Bengali
      ];
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