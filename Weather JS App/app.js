//Init storage object
const storage = new Storage();

const weatherLocation = storage.getLocationData();


// Init weather object

const weather = new Weather(weatherLocation)
const ui = new UI()



//Get weather on DOM load
document.addEventListener('DOMContentLoaded',getWeather)

// weather.changeLocation('Ejigbo')

//change location event
document.getElementById('w-change-btn').addEventListener('click', (e)=> {
    console.log(e);
    const city = document.getElementById('city').value;
    
    weather.changeLocation(city);


    //set city to local storage
     storage.setLocationData(city);

    
    //get and display weather
    getWeather();
    
    $('#locModal').modal('hide');   //using jQuery to hide the modal

    document.getElementById('w-form').reset();
});


function getWeather(){
   
weather.getWeather()
.then(results =>{
    console.log(results);
   
        ui.paint(results);
    }
   
)
.catch(err => console.log(err)); 
}


