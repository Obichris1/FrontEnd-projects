class Storage {
    constructor(){
    this.city;
    this.defaultCity = 'Miami';

    }

    getLocationData(){
        if(localStorage.getItem('city') === null){
            this.city = this.defaultCity  
        }
        else{
            this.city = localStorage.getItem('city')
        }

        return   this.city
   
        

    }
            
    
    setLocationData(city){
        localStorage.setItem('city',city);  //we dont use JSON.Stringify here because we are saving the data as strings and not arrays because we want just one value saved
    }



}



