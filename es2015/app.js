let favoriteCityId = "rome";

console.log(favoriteCityId);

favoriteCityId = "Paris";

console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "Rome", "rio-de-janeiro"];

console.log(citiesId);

// citiesId = [];

// console.log(citiesId);

citiesId.push("Tokyo");

console.log(citiesId);

function getWeather(cityId) {
  let city = cityId.toUpperCase();
  let temperature = 20;

  return { city, temperature };
}

const weather = getWeather(favoriteCityId);

console.log(weather);

const { city } = weather;

const { temperature } = weather;

console.log(city);

console.log(temperature);

const [parisId, nycId, ...othersCitiesId] = citiesId;

console.log(parisId);

console.log(nycId);

console.log(othersCitiesId.length);

class Trip {
    constructor(id, name, nameUrl){
        this.id = id;
        this.name = name;
        this.nameUrl = nameUrl;
    }

    toString(){

        return 'Trip [' + this.id + ' ' + this.name + ' ' + this.nameUrl + ' ' + this._price + ']';
    }

    static getDefaultTrip(){

        let id = "rio-de-janeiro";
        let name = "Rio de Janeiro";
        let nameUrl = "img/rio-de-janeiro.jpg";
        return new Trip(id,name, nameUrl);

    }

    get price(){
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }


}

let parisTrip = new Trip("paris", "Paris", "img/paris.jpg");

console.log(parisTrip);

console.log(parisTrip.toString());

parisTrip.price = 100;
console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();

console.log(defaultTrip.toString());

class FreeTrip extends Trip{

    constructor(id, name, nameUrl){
        super(id, name, nameUrl);
       
       this._price = 0;

    }
    
    toString(){
         return 'Free' + super.toString();
    }
    
    }





const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");

console.log(freeTrip.toString());




