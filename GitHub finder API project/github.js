class GitHub{
     constructor(){
        this.client_id = '82d695693cd884380a78'
        this.client_secret = 'f4efadf73ccd4795f7e27fad33d14cb536f30ac8'
        this.repos_count = 5;
        this.repos_sort ='created: asc';
    }
   

    // Request to the users from github
   async  getUsers(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?
    client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?
    per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();
    const reposData = await repoResponse.json();

      //data (object)
    return {
        
        profile : profileData,
        repos: reposData
        
    }
}
}