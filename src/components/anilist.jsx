"use strict";
import {
    ANIME
} from "../consts";
import Note from "./note";
import { useEffect,useState } from "react";

export default function Anilist(){
    const [date,setDate] = useState("Jan x,xxxx")

    useEffect(()=>{
        setDate(new Date().toLocaleDateString("en-US",{ year: 'numeric', month: 'long', day: 'numeric' }))
    },[date])
    
    return <div>
        <p className="dark:tw-text-darkPara tw-text-gray-600 tw-text-lg">As of {date}, I have watched over {ANIME.user.statistics.anime.episodesWatched} episodes and {ANIME.user.statistics.anime.count} animes.(Tracked by <a className="hover:tw-text-purple-600 tw-cursor-pointer tw-font-sriracha" href="https://anilist.co/user/KuuHaKu7/">Anilist</a>)</p>
            <Note content={ANIME.mediaListCollection.lists[0].entries[0].status + " " + ANIME.mediaListCollection.lists[0].entries[0].media.title.english} header={"Progress:" + ANIME.mediaListCollection.lists[0].entries[0].progress + "eps"} />
        </div> 
}
