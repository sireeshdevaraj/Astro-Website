let animeData = await fetch("https://api.kuuhaku.space/anilist")
let result = await animeData.json()
export const data = result