import { baseUrl , userActivity } from '../variables.js';

async function getActivies(userName){
    let url = `${baseUrl}/${userName}/events?per_page=${userActivity}`
    const resultado = await fetch(url)
    return await resultado.json()
}

export{ getActivies }