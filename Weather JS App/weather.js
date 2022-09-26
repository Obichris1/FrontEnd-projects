class Weather{

    constructor(city,state,country){
        this.apiKey = 'a8fca5f3f3e1cc276b73cd1a8744db3c';
        this.city = city;
        this.state = state;
        this.country = country; 
    }

    async getWeather(){
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${this.city },${this.state},${this.country}&appid=${this.apiKey}`);
        console.log(response.json());
        const responseData = await response.json();

        return responseData;

    
    } 


    changeLocation(city,state){
        this.city = city;
        this.state = state
    }

}

