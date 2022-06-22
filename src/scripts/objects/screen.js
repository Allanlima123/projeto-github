import { user } from "../objects/user.js";

const screen = {
    userProfile : document.querySelector(".profile-data"),
    renderUser() {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do Usuário"/>
                                        <div class="data">
                                            <h1>${user.name ?? "Não possuei nome cadastrado 😫"}</h1>
                                            <p>${user.bio ?? "Não possui Bio cadastrado 😫"}</p>
                                        </div>
                                    </div>`;

        user.repositories.forEach(repo => {
            if (repo.language === null) {
                repo.language = 'Sem Linguagem';
            }
        })

        let respositoriesItens = user.repositories.reduce((acumulador, repo) => {
            return acumulador += `<li>
                                        <a href="${repo.html_url}" target="_blank" rel="external">${repo.name}</a>;
                                        <div class="extra-information">
                                            <span>🍴  ${repo.forks}</span>
                                            <span>⭐ ${repo.stargazers_count}</span>
                                            <span>👀 ${repo.watchers_count}</span>
                                            <span>👩‍💻 ${repo.language}</span>
                                        </div>
                                    </li>`;
        }, "");

        this.userProfile.innerHTML += `<div class="status-data">
                                            <div class="follwers">
                                                <h3>👥Seguidores</h3>
                                                <div class="total-follwers">${user.followers}</div>
                                            </div>
                                            <div class="following">
                                                <h3>👥Seguindo</h3>
                                                <div class="total-following">${user.following}</div>
                                            </div>
                                    </div>`;

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${respositoriesItens}</ul>
                                            </div>`;
        }
    },
    renderActivies() {
        // let activitiesItens = "";
        // user.activities.map(activi =>{
        //     activitiesItens += `<li>
        //                            <strong>${activi.repo.name}</strong>/${activi.type}
        //                       </li>`;
        // })

        // for(let i = 0; i < 10; i++){
        //     activitiesItens += `<li>
        //                             <strong>${user.activities[i].repo.name}</strong>/${user.activities[i].type}
        //                         </li>`;
        // }

        let activitiesItens = user.activities.reduce((acumulador, activi) => {
            return acumulador += `<li>
                                    <strong>${activi.repo.name}</strong>/${activi.type}
                                </li>`;

        }, "");
        if (user.activities.length > 0) {
            this.userProfile.innerHTML += `<div class="activies">
                                                <h3>Atividades</h3>
                                                <ul class="list">${activitiesItens}</ul>
                                            </div>
                                        `
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>";
    }
}

export { screen }