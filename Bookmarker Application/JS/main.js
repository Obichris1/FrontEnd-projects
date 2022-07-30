// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save Bookmark
function saveBookmark(e){
  // Get form values
  var siteName =document.getElementById('siteName').value;
  var siteUrl =document.getElementById('siteUrl').value;

  if(!validateForm(siteName, siteUrl)){
    return false;
  }

  var bookmark = {                            //bookmark object to store the name and the url in json format to submit to our local storage
    name: siteName,
    url: siteUrl
  }

//Local storage Test (local storage stores only strings but we will pass the json into a string and save it)
                // localStorage.setItem('test','Hello World');  // adds key value to the local storage
                // console.log(localStorage.getItem('test'));   // prints out the value in the local storage
                // localStorage.removeItem('test');             //removes items from the local storage 

  // Test if bookmarks is null
  if(localStorage.getItem('bookmarks') === null){
    // Init array
    var bookmarks = [];
    // Add to array
    bookmarks.push(bookmark);
    // Set to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));        // the stringify method will convert json value (object or array) into a json string
  } else {
    //  //if there is already a bookmark in the local storage fetch the bookmark
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));       //remember that the local storage only stores strings so we need to parse it back to json by using the JSON.parse method


    // Add bookmark to array
    bookmarks.push(bookmark);                          // push the new bookmark added into the array of bookmarks


    //re-set the bookmarks back into the local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  // Clear form
  document.getElementById('myForm').reset();

  // Re-fetch bookmarks
  fetchBookmarks();

//prevents the default behavior of the form (prevent form from submitting)
  e.preventDefault();
}

// Delete bookmark
function deleteBookmark(url){
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Loop through the bookmarks
  for(var i =0;i < bookmarks.length;i++){
    if(bookmarks[i].url == url){
      // Remove from array
      bookmarks.splice(i, 1);
    }
  }
  // Re-set back to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  console.log(bookmarks);

  // Re-fetch bookmarks
  fetchBookmarks();
}

// Fetch bookmarks
function fetchBookmarks(){
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Get output id
  var bookmarksResults = document.getElementById('bookmarksResults');

  // Build output
  bookmarksResults.innerHTML = '';
  for(var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML += '<div class="well">'+    // NOTE += is used to append in js
                                  '<h3>'+name+
                                  ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
                                  ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                  '</h3>'+
                                  '</div>';
  }
}

// Validate Form
function validateForm(siteName, siteUrl){
  if(!siteName || !siteUrl){
    alert('Please fill in the form');
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if(!siteUrl.match(regex)){
    alert('Please use a valid URL');
    return false;
  }

  return true;
}

// function addhttp(url) {
//   if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
//       url = "http://" + url;
//   }
//   return url;
// }