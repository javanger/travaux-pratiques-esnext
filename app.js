let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);

console.log("________________________________________");

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
//citiesId = [];
citiesId.push("tokyo");
console.log(citiesId);

console.log("________________________________________");

function getWeather(cityId) {
  let city = cityId.toUpperCase();
  let temperature = 20;
  return {city,temperature};
}
let weather = getWeather(favoriteCityId);
console.log("Object ", weather);

console.log("________________________________________");

const{
   city: city,
   temperature: temp
} = weather;

 console.log(city);
 console.log(temp);

 console.log("________________________________________");

const[parisId,nyId,...otherId] = citiesId;

console.log(parisId);
console.log(nyId);
console.log(otherId.length);

console.log("________________________________________");

class Trip {
  constructor(id, name, imageUrl) {
    this.id = id;
    this.name= name;
    this.imageUrl = imageUrl;
  }

  get price(){
    return this._price;
  }
  set price(newPrice){
    this._price = newPrice;
  }

  static getDefaultTrip(){
    return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
  }

  toString(){
    return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this.price}]`
  }
}

let parisTrip = new Trip("paris", "Paris", "img/paris.jpg");
const defaultTrip = Trip.getDefaultTrip();

console.log(parisTrip);
console.log(parisTrip.name);
parisTrip.price = 100;
console.log(parisTrip.toString());
console.log(defaultTrip.toString());

console.log("________________________________________");

class FreeTrip extends Trip {
  constructor(id, name , imageUrl, price=0){
    super(id, name, imageUrl);
    this.price = price;
  }

  toString(){
    return "Free".concat(super.toString());
  }
}

let nantesTrip = new FreeTrip("nantes","Nantes","images/nantes.jpg");
console.log(nantesTrip.toString());

console.log("________________________________________");

class TripService {

  constructor(){
    this.trips = new Set();
    this.trips.add(new Trip("paris", "Paris", "img/paris.jpg"));
    this.trips.add(new Trip("nantes","Nantes","images/nantes.jpg"));
    this.trips.add(new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg"));
  }

  findByName(tripName){
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        let tripFound = Array.from(this.trips)
          .find(t => t.name == tripName)

          if(tripFound) {
              resolve("Trip found : " + tripFound);
          } else {
              reject("No trip with name "+ tripName);
          }
      },2000);
    });
  }
}

class PriceService {

    constructor() {
        this.tripsMap = new Map();
        this.tripsMap.set("paris",100);
        this.tripsMap.set("rio-de-janeiro",800);
    }

    findPriceByTripId(tripId) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let tripFromMap = this.tripsMap.get(tripId);
            if(tripFromMap != null) {
                resolve("Price found : " + tripFromMap);
            } else {
                reject("No price for trip id "+ tripId);
            }
        },2000);
      });
    }
}

let tripService = new TripService();
let priceService = new PriceService();

tripService.findByName("Paris")
        .then(function(result){
          console.log(result);
        }, function(error){
          console.log(error);
        }
);

tripService.findByName("Toulousse")
            .then(function(result){
              console.log(result);
            }, function(error){
              console.log(error);
            }
);

priceService.findPriceByTripId("rio-de-janeiro")
                          .then(function(result){
                            console.log(result);
                          }, function(error){
                            console.log(error);
                          }
);
priceService.findPriceByTripId("nantes")
                  .then(function(result){
                    console.log(result);
                  }, function(error){
                    console.log(error);
                  }
);
