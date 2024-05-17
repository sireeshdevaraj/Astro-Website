import { data } from "./api.anime";

export const SITE_TITLE = "KuuHaKu's Blog";
export const SITE_DESCRIPTION = 'Welcome to my website!';
export const ABOUT = "Just a Self-learning programmer through research & development.I was never the best at school or academics, I’m just a super curious guy. I develop the ideas and theories that interest me. I love spending time to build random software. I love capybaras and dogs.";
export const GAMING_ABOUT = "I play a lot of games just like Sora from no game no life, I mostly play World of Warcraft, Valorant and OSU(To improve aim and reflex)"
export const VALORANT = {
    "rank": "Diamond 2",
    "url" : "https://tracker.gg/valorant/profile/riot/KuuHaku%23sora/overview"
}
export const OSU = {
    "rank": 4000,
    "url" : "https://osu.ppy.sh/users/21179459"
}
export const ANIME = data
export const PROFILE_PICTURE = "/images/white_hair.JPG"
export const EMOJIS = ['🥶','🧊','❄️','☃️','⛄']
export const DATE = new Date().toLocaleDateString("en-US",{ year: 'numeric', month: 'long', day: 'numeric' })