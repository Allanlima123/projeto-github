import { baseUrl, repositoriesQuantity } from '../variables.js';

async function getRepositories(userName) {
    const url = `${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`;
    let resultdo = await fetch(url);
    return await resultdo.json();
}

export { getRepositories };
