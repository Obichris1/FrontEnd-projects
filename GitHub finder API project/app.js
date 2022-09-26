// init GitHub class
const github = new GitHub;
const ui = new UI;  

//Search Input
const searchUser = document.getElementById('searchUsers');
 
//search input event listener
searchUser.addEventListener('keydown',searchUsers);


function searchUsers(event){
 
    const userText = event.target.value;
    if(!userText == ""){
        //Make http call
       
        github.getUsers(userText)
        .then(data => { 
            if(data.profile.message === 'Not Found'){
                //show alert
                console.log('not found');
                ui.showAlert('user not found', 'alert alert-danger');
            }


            else{
                // show profile
              ui.showProfile(data.profile);
              ui.showRepos(data.repos);
                
            }
        } )
    
   
}
else{
    //clear profile
   ui.clearProfile();
}

    

}  