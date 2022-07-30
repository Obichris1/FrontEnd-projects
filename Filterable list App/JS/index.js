let filterInput = document.getElementById("filterInput"); //get input element

filterInput.addEventListener("keyup",filterNames);

function filterNames(){
    let filterValue = document.getElementById("filterInput").value.toUpperCase();
    let ul = document.getElementById("names");
    let li = ul.querySelectorAll(".collection-item")

    // loop through collection items

    for(let i = 0 ; i < li.length ; i++){
        let a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            a.style.display = '';
        }
        else{
            a.style.display = 'none';
        }

    }


 
}
