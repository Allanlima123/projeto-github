const user = {
    avatarUrl : '',
    name : '',
    bio : '',
    userName : '',
    followers : '',
    following : '',
    repositories : [],
    activities : [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.userName = gitHubUser.login;
        this.following = gitHubUser.following;
        this.followers = gitHubUser.followers;
    },
    setActivities(activities){
        this.activities = activities; 
    },
    setRepositories(repositories){
        this.repositories = repositories;
    }
}

export { user };