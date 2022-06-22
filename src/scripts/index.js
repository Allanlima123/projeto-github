import { getUser } from '../scripts/services/user.js';
import { getRepositories } from '../scripts/services/repositories.js';

import { user } from '../scripts/objects/user.js';
import { screen } from '../scripts/objects/screen.js';

import{ getActivies } from '../scripts/activies/active.js';
 
document.getElementById("btn-search").addEventListener("click", () => {
    let inputName = document.getElementById("input-search");
    let userName = inputName.value;
    if(validateEmpyInput(userName))return
    getUserData(userName);
});

document.getElementById("input-search").addEventListener("keyup", event => {
    const userName = event.target.value;
    const key = event.which || event.keyCode;
    const isEnterKeyPressed = key === 13;

    if (isEnterKeyPressed){
        if(validateEmpyInput(userName))return
        getUserData(userName);
    }
});

function validateEmpyInput(userName){
    if(userName.length === 0){
        alert("Preencha o campo com o nome do usuário do GitHub");
        return true //Aqui diz que não tem usuário
    }
}

async function getUserData(userName){
    const userResponse = await getUser(userName);
    const repositoriesResponse = await getRepositories(userName);
    const activies = await getActivies(userName);

    if(userResponse.message === "Not Found"){
        screen.renderNotFound();
        return
    }

    user.setInfo(userResponse);
    user.setRepositories(repositoriesResponse);
    user.setActivities(activies)

    screen.renderUser()
    screen.renderActivies()
};

