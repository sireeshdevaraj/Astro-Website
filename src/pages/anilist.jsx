"use strict";
import {useState,useEffect} from "react";
import {
    DATE,
    ANIME
} from "../consts"
import data from "../api.anime";

export default function Anilist(){
    const [anilist, setAnilist] = useState([]);
    useEffect(()=>{
        setAnilist(data);
    },[])
    return <div>
        <p>As of {DATE}, I have watched over {ANIME.userStat.episodes} episodes and {ANIME.userStat.watched} animes.</p>
			<blockquote >
				<p>Recent: </p>
				<p style={{color:"red"}}>{ANIME.activityStat.status.toUpperCase()}{" "}</p>
				<p> {ANIME.activityStat.media.title.english}</p>
			</blockquote>
        </div> 
    

}
