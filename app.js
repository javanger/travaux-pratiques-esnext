let favoriteCityId = 'rome';
console.log(favoriteCityId);

favoriteCityId = 'paris';
console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);

citiesId.push('tokyo');
console.log(citiesId);

function getWeather(cityId) {

    let city = cityId.toUpperCase();
    let temperature = 20;

    return {
        city,
        temperature
    };
}

const weather = getWeather(favoriteCityId);
console.log(weather);

const {
    city
} = weather;
const {
    temperature
} = weather;

console.log(city);
console.log(temperature);

const [parisId, nycId, ...othersCitiesId] = citiesId;

console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    static getDefaultTrip() {
        return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
    }

    toString() {
        return 'Trip [' + this.id + ', ' + this.name + ', ' + this.imageUrl + ', ' + this.price + ']';
    }
}

let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');
console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());

parisTrip.price = 100;
console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this._price = 0;
    }

    toString() {
        return 'Free' + super.toString();
    }
}

const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');
console.log(freeTrip.toString());

class TripService {

    constructor() {
        // TODO Set of 3 trips
        //
        // new Trip('paris', 'Paris', 'img/paris.jpg')
        // new Trip('nantes', 'Nantes', 'img/nantes.jpg')
        // new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
        this.trips = new Set();
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.trips.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName) {
        // TODO return promise

        return new Promise( (resolve, reject) => {

            setTimeout( () => {

                let tripTrouve = Array.from(this.trips).find(t => t.name == tripName);             

                if (tripTrouve) {
                    resolve(tripTrouve);
                } else {
                    reject('No trip with name ' + tripName);
                }

            }, 2000);

        });

    }
}

class PriceService {

    constructor() {
        // TODO Map of 2 trips
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'

        this.prices = new Map();
        this.prices.set('paris', 100);
        this.prices.set('rio-de-janeiro', 800);
    }

    findPriceByTripId(tripId) {
        // TODO return promise
        
        return new Promise( (resolve, reject) => {

            setTimeout( () => {

                let tripTrouve = this.prices.get(tripId);        

                if (tripTrouve) {
                    resolve(tripTrouve);
                } else {
                    reject('No trip with id ' + tripId);
                }

            }, 2000);

        });
    }
}

let tripService = new TripService();
let priceService = new PriceService();

tripService.findByName('Paris')
    .then(function (id) {
        console.log('Trip found : ' + id + '\n');

        priceService.findPriceByTripId(id.id)
        .then(function (price) {
            console.log('Price found : ' + price);
        }, function (error) {
            console.log('No price for trip id ' + id.id);
        });

    }, function (error) {
        console.log(error);
    });
    
tripService.findByName('Toulouse')
.then(function (id) {
    console.log('Trip found : ' + id);
}, function (error) {
    console.log(error);
});



