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
  constructor(id, name, nameUrl) {
    this.id = id;
    this.name = name;
    this.nameUrl = nameUrl;
  }

  toString() {
    return (
      "Trip [" +
      this.id +
      " " +
      this.name +
      " " +
      this.nameUrl +
      " " +
      this._price +
      "]"
    );
  }

  static getDefaultTrip() {
    let id = "rio-de-janeiro";
    let name = "Rio de Janeiro";
    let nameUrl = "img/rio-de-janeiro.jpg";
    return new Trip(id, name, nameUrl);
  }

  get price() {
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

class FreeTrip extends Trip {
  constructor(id, name, nameUrl) {
    super(id, name, nameUrl);

    this._price = 0;
  }

  toString() {
    return "Free" + super.toString();
  }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");

console.log(freeTrip.toString());

class TripService {
  constructor() {
    // TODO Set of 3 trips

    this.setTrips = new Set();
    this.setTrips.add(new Trip("paris", "Paris", "img/paris.jpg"));
    this.setTrips.add(new Trip("nantes", "Nantes", "img/nanges.jpg"));
    this.setTrips.add(
      new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg")
    );
  }

  findByName(tripName) {
    // TODO return promise

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let tripTrouve = Array.from(this.setTrips).find(
          t => t.name == tripName
        );

        if (tripTrouve) {
          resolve(tripTrouve);
        } else {
          reject("No trip found " + tripName);
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

    this.mapPriceService = new Map();
    this.mapPriceService.set("paris", 100);
    this.mapPriceService.set("rio-de-janeiro", 800);
  }

  findPriceByTripId(tripId) {
    // TODO return promise

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let tripTrouve = this.mapPriceService.get(tripId);

        if (tripTrouve) {
          resolve(tripTrouve);
        } else {
          reject("No trip with id " + tripId);
        }
      }, 2000);
    });
  }
}

let testService = new TripService();

let testPriceService = new PriceService();

testService.findByName("Paris").then(
  function(resultatQuandOk) {
    // cas resolve
    console.log("Trip trouvé", resultatQuandOk);
  },
  function(errorQuandKo) {
    console.log(errorQuandKo);
  }
);

testService.findByName("Toulouse").then(
  function(id) {
    console.log("Trip found : " + id);
  },
  function(error) {
    console.log(error);
  }
);

testService.findByName("Rio de Janeiro").then(
  function(resultOk) {
    console.log("Trip found : " + resultOk + "\n");

    testPriceService.findPriceByTripId(resultOk.id).then(
      function(priceOk) {
        console.log("Price found : " + priceOk);
      },
      function(error) {
        console.log("No price for trip id " + resultOk.id);
      }
    );
  },
  function(error) {
    console.log(error);
  }
);

testService.findByName("Toulouse").then(
  function(id) {
    console.log("Trip found : " + id);
  },
  function(error) {
    console.log(error);
  }
);

testService.findByName("Nantes").then(
  function(resultOk) {
    console.log("Trip found : " + resultOk + "\n");

    testPriceService.findPriceByTripId(resultOk.id).then(
      function(priceOk) {
        console.log("Price found : " + priceOk);
      },
      function(error) {
        console.log("No price for trip id " + resultOk.id);
      }
    );
  },
  function(error) {
    console.log(error);
  }
);
