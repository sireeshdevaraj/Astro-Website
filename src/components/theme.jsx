import { theme } from "../state.store";
import { useState, useEffect} from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';

export default function Theme(){
    const [dark,setDark] = useState(theme.get())
    
    const handleThemeClick = () => theme.get() ? setDark(false) : setDark(true)

    useEffect(()=>{
        theme.set(dark)
        dark ? document.documentElement.classList.add("tw-dark") : document.documentElement.classList.remove("tw-dark") 
    },[dark])
    return <div className="hover:tw-cursor-pointer" onClick={handleThemeClick}>{dark ? <LightModeIcon className="dark:tw-text-darkPara"/> : <NightsStayIcon/>}</div>
}