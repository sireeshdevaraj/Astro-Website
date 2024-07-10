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
        <p className="tw-text-gray-600 tw-text-lg">As of {DATE}, I have watched over {ANIME.userStat.episodes} episodes and {ANIME.userStat.watched} animes.(Tracked by <a className="hover:tw-text-purple-600 tw-cursor-pointer" href="https://anilist.co/user/KuuHaKu7/">Anilist</a>)</p>
            <Note content={ANIME.activityStat.status.toUpperCase() + " " + ANIME.activityStat.media.title.english} header={"Recently Watched/Completed"} />
        </div> 
}
