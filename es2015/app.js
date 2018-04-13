
let favoriteCityId = 'rome';
console.log(favoriteCityId);

favoriteCityId = 'paris';

console.log(favoriteCityId);

const citiesId = ['paris','nyc','rome','rio-de-janeiro'];
console.log(citiesId);

// citiesId = [];

 citiesId.push('tokyo');
 console.log(citiesId);

 function getWeather(cityId){
     let city = cityId.toUpperCase();
     let temperature = 20;

     return {city, temperature};
 }
console.log('Objet',getWeather("Paris"))

let weather = getWeather("Paris");

const {city ,temperature } = weather;

console.log(city);
console.log(temperature);

let [parisId, nycId,...otherCitiesId] = citiesId
console.log(parisId);
console.log(nycId);
console.log(otherCitiesId.length);

class Trip{
    constructor(id,name,imageUrl){
        this.id = id;
        this.name=name;
        this.imageUrl = imageUrl;
    }



    toString(){
        return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this.prix}]`;
    }

    static getDefaultTrip(){
      
        return `Trip ['rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg', ${this.prix}]`;
    }

    get _price(){
        return this._price;
    }

    set _price(prix){
        thid._price = prix;
    }
    
}
parisTrip = new Trip('Paris','Paris','img/paris.jpg');
  
    console.log(parisTrip.name);
    parisTrip.prix=100;

 console.log(parisTrip.toString());

 defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString())


class FreeTrip extends Trip{
    constructor(){
        super('nantes','Nantes','img/nanges.jpg');
               this.prix = 0;
    }
    toString(){
        return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this.prix}]`;
    }
}
freeTrip = new FreeTrip();

console.log(freeTrip.toString());



class TripService {

    constructor() {
        // TODO Set of 3 trips
        this.trips = new Set();
        this.trips.add( new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.trips.add( new Trip('nantes', 'Nantes', 'img/nanges.jpg'));
        this.trips.add( new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
        
    }

    findByName(tripName) {
        // TODO return promise
        return new Promise( (resolve, reject) => {

            let tripFound = Array.from(this.trips)
              .find(t => t.name == tripName)
      
              if(tripFound) {
                  resolve('Trip found : ' + tripFound);
              } else {
                  reject("No trip with name "+ tripName);
              }
          });  

}
}

class PriceService {

    constructor() {
        this.tripsMap = new Map();
        this.tripsMap.set("paris", 100);
        this.tripsMap.set("rio-de-janeiro", 800);
        // TODO Map of 2 trips
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        
        // no price for 'nantes'
    }

    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            let tripFromMap = this.tripsMap.get(tripId);
            if (tripFromMap != null) {
              resolve("Price found : " + tripFromMap);
            } else {
              reject("No price for trip id " + tripId);
            }
          }, 2000);
        });
      }
      
}
let tripService = new TripService();
let priceService = new PriceService();

tripService.findByName('Paris')
    .then(function(success){
        console.log(success)
        }, function(error){
            console.log(error)
        }
    );


tripService.findByName('Toulouse')
    .then(function(success){
        console.log(success)
        }, function(error){
            console.log(error)
        }
    );

priceService.findPriceByTripId('rio-de-janeiro')
.then(function(success){
    console.log(success)
    }, function(error){
        console.log(error)
    }
);

priceService.findPriceByTripId('nantes')
.then(function(success){
    console.log(success)
    }, function(error){
        console.log(error)
    }
);

    