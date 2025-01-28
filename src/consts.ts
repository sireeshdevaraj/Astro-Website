import { data } from "./api.anime";

export const SITE_TITLE = "Sireesh's Blog";
export const SITE_DESCRIPTION = 'Hi! This is Sireesh. I write all kinds of stuff here that is on my mind.';
export const ABOUT_1 = `
I'm a recreational programmer with extensive experience in research and development. I am currently working as a Software Engineer.`
export const ABOUT_2 = `I am proficient in Go, Javascript, Python, R, and Vensim for system modeling. My database expertise includes MySQL and PostgreSQL.
Additionally, I have strong deployment skills with NGINX, pm2, and Docker. Worked with AWS, SES and also google analytics.`
export const ABOUT_3 = `Challenging roles in backend or frontend development.`
export const ABOUT_LOVE= `I love spending time to build random software and reading books.`
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
export const PROFILE_PICTURE = "/images/profile_pics/fy.png"
export const EMOJIS = ['🥶','🧊','❄️','☃️','⛄']
export const NAMES = [
    'Sireesh',   // English, Spanish, French, German, Portuguese, Italian
    '시리쉬',     // Korean
    'シリーシュ', // Japanese
    '西瑞什',     // Chinese
    'سيريش',     // Arabic
    'Сириш',     // Russian

];
export const SKILLS = {
    "languages" : [ // Image Array of programming languages
            "/images/skills/js.png",
            "/images/skills/go.png",
            "/images/skills/python.png",
            "/images/skills/R.png"

    ], 
    "databases" : [
        "/images/skills/mysql.png",
        "/images/skills/psql.png"

    ], 
    "modelling" : ["/images/skills/vensim.png"
    ],   
    "deployment": [
        "/images/skills/docker.png",
        "/images/skills/pm2.png",
        "/images/skills/nginx.png"
    ],
    "cloud"     : [
        "/images/skills/aws.png",
        "/images/skills/ses.png"

    ]

}