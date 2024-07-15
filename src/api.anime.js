let animeData = await fetch("https://api.kuuhaku.space/anilist/5631742")
let result = await animeData.json()
export const data = result