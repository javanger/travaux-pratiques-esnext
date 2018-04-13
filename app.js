/* LET */
let favoriteCityId = "rome"
//console.log (favoriteCityId)
favoriteCityId = "paris"
//console.log (favoriteCityId)

/* CONST */
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"]
//console.log(citiesId)
//citiesId = []
citiesId.push("tokyo")
//console.log(citiesId)

/* CREATION D'OBJET */
function getWeather(cityId){
  let city = cityId.toUpperCase()
  let temperature = 20
  return {city , temperature}
}
let weather = getWeather(favoriteCityId)
//console.log("Object ", weather)

/* AFFECTATION DESTRUCTUREE */
const{
  city: city,
  temperature: temperature
} = weather
//console.log(city)
//console.log(temperature)

/* REST OPERATOR */
const [parisId, nycId, ...othersCitiesId] = citiesId
/*console.log(parisId)
console.log(nycId)
console.log(othersCitiesId.length)*/

/* CLASSE */
class Trip{
  constructor(id, name, imageUrl){
    this.id = id
    this.name = name
    this.imageUrl = imageUrl
  }

  get price(){
    return this._price
  }

  set price(newPrice){
    this._price = newPrice
  }

  static getDefaultTrip(){
    return new Trip("rio-de-janeiro", "Rio de Janeiro" , "img/rio-de-janeiro.jpg")
  }

  toString(){
    return "Trip [ " + this.id + ", " + this.name + ", " + this.imageUrl +", " + this.price + "]"
  }
}

let parisTrip = new Trip("paris","Paris","img/paris.jpg")
parisTrip.price = 100

//console.log(parisTrip)
//console.log(parisTrip.name)
//console.log(parisTrip.toString())
const defaultTrip = Trip.getDefaultTrip()
//console.log(defaultTrip.toString())

/* HERITAGE */
class FreeTrip extends Trip{
  constructor(id,name,imageUrl, price=0){
    super(id, name, imageUrl)
    this.price = price
  }

  toString(){
    return "Free" + super.toString()
  }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg")
//console.log(freeTrip.toString())

/* PROMISE, SET, MAP, ARROW FUNCTION */
class TripService {

    constructor() {
        this.trips = new Set()
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'))
        this.trips.add(new Trip('nantes', 'Nantes', 'img/nanges.jpg'))
        this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'))
    }

    findByName(tripName) {

      return new Promise((resolve, reject) => {

        setTimeout(() => {
          let tripFound = Array.from(this.trips)
          .find(t => t.name == tripName)

          if(tripFound) {
              resolve(tripFound)
          } else {
              reject("No trip with name " + tripName)
          }
        }, 2000)
      })
    }
}

class PriceService {

    constructor() {
        this.map = new Map()

        this.map.set('paris',100)
        this.map.set('rio-de-janeiro',800)
    }

    findPriceByTripId(tripId) {
      return new Promise((resolve, reject) => {

        setTimeout(() => {
          let priceFound = this.map.get(tripId)

          if(priceFound) {
              resolve(priceFound)
          } else {
              reject(tripId)
          }
        }, 2000)
      })
    }
}

const tripService = new TripService()
const priceService = new PriceService()
tripService.findByName("Rio de Janeiro")
  .then(function(ville){
    return ville.id
  }).then(id => {
    return priceService.findPriceByTripId(id)
  }).then(function(price){
    console.log("Price found : " +price)
  }).catch(function (error){
    console.log("No price for trip id " + error)
  })

  tripService.findByName("Nantes")
    .then(function(ville){
      return ville.id
    }).then(id => {
      return priceService.findPriceByTripId(id)
    }).then(function(price){
      console.log("Price found : " +price)
    }).catch(function (error){
      console.log("No price for trip id " + error)
    })
