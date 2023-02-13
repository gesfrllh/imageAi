import FileSaver from 'file-saver'

import { supriseMePrompt } from "../constants";

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * supriseMePrompt.length)
    const randomPrompt = supriseMePrompt[randomIndex]

    if(randomPrompt === prompt) return getRandomPrompt(prompt)

    return randomPrompt
}

export async function downloadImage(_id, photo){
    FileSaver.saveAs(photo, `download-${_id}.jpg`)
}