let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
citiesId.push("tokyo");
console.log(citiesId);

function getWeather(cityId){
    let city = cityId.toUpperCase();
    let temperature = '20';
    return {city, temperature};
}
let weather = getWeather("Paris");
console.log('Object', weather);

const{city , temperature} = weather;
console.log(city);
console.log(temperature);

let [parisId, nycId, ...othersCitiesId] = citiesId;

console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);


class Trip {

    constructor(id,name,imageUrl){
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    static getDefaultTrip(){
        return `Trip [ rio-de-janeiro, Rio de Janeiro, img/rio-de-janeiro.jpg, ${this._price} ]`;
    }

    toString(){
        return `Trip [ ${this.id}, ${this.name}, ${this.imageUrl}, ${this._price} ]`;
    }

    get price(){
        return this._price
    }

    set price(newPrice){
        this._price = newPrice;
    }
}

parisTrip = new Trip ("paris","Paris","img/paris.jpg");

console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());

parisTrip.price = 100;

console.log(parisTrip.toString());

defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

class FreeTrip extends Trip{

    constructor(){
        super("nantes","Nantes","img/nantes.jpg");
        this.price = 0;
    }
    
    toString(){
        return `FreeTrip  [ ${this.id}, ${this.name}, ${this.imageUrl}, ${this._price} ]`;
    }
}

freeTrip = new FreeTrip();
console.log(freeTrip.toString());

class TripService {

    constructor() {
        this.trips = new Set();
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.trips.add(new Trip('nantes', 'Nantes', 'img/nanges.jpg'));
        this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName){
        return new Promise((resolve, reject) => {
            let tripFound = Array.from(this.trips)
            .find(t => t.name == tripName)
    
            if(tripFound) {
                resolve("Trip found : " + tripFound);
            } else {
                reject("No trip with name "+ tripName);
            }
        });
    }
}

class PriceService {

    constructor() {
        this.trips = new Map()
        this.trips.set('paris', '100');
        this.trips.set('rio-de-janeiro', '800');
    }

    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout(()=> { let tripsMap = this.trips.get(tripId);
                if(tripsMap != null) {
                    resolve('Price found : ' + tripsMap);
                } else {
                    reject("No price for trip id "+ tripId);
                }
            }, 2000);
        });
    }
}

let tripService = new TripService();
let priceService = new PriceService();

tripService.findByName('Paris')
    .then(function(sucess){
        console.log(sucess);
    }, function(error){
        console.log(error);
    }
);

tripService.findByName('Toulouse')
    .then(function(sucess){
        console.log(sucess);
    }, function(error){
        console.log(error);
    }
);

priceService.findPriceByTripId('rio-de-janeiro')
    .then(function(sucess){
        console.log(sucess);
    }, function(error){
        console.log(error);
    }
);

priceService.findPriceByTripId('nantes')
    .then(function(sucess){
        console.log(sucess);
    }, function(error){
        console.log(error);
    }
);