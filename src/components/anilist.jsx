"use strict";
import {useState,useEffect} from "react";
import {
    DATE,
    ANIME
} from "../consts"
import {data} from "../api.anime";
import Note from "./note";

export default function Anilist(){
    const [anilist, setAnilist] = useState(["test"]);
    useEffect(()=>{
        setAnilist(data);
    },[])
    return <div>
        <p>As of {DATE}, I have watched over {ANIME.userStat.episodes} episodes and {ANIME.userStat.watched} animes.(Tracked by <a href="https://anilist.co/user/KuuHaKu7/">Anilist</a>)</p>
            <Note content={ANIME.activityStat.status.toUpperCase() + " " + ANIME.activityStat.media.title.english} header={"Recently Watched/Completed"} />
        </div> 
}
