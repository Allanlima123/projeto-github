import { baseUrl } from '../variables.js';

async function getUser(userName) {
    const url = `${baseUrl}/${userName}`;
    let resultdo = await fetch(url);
    return await resultdo.json();
}

export { getUser };