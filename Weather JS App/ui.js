class UI{
    constructor(){
        this.location =  document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.feelsLike = document.getElementById('w-feels-like');
        this.base = document.getElementById('w-base');
    }

    paint(weather){
           this.location.textContent = `${weather.name},${weather.sys.country}`;
           
           this.desc.textContent = weather.weather[0].description;

           this.string.textContent = weather.main.temp;
         
            const iconCode = weather.weather[0].icon
            var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
           this.icon.setAttribute ('src', iconUrl);

           this.humidity.textContent= `Relative Humidity: ${weather.main.humidity} `
           this.pressure.textContent= `Pressure: ${weather.main.pressure} `
           this.feelsLike.textContent= `FeelsLike: ${weather.main.feels_like} `
           this.base.textContent= `Base: ${weather.base} `
        
    }
} 