/*
Créer une variable favoriteCityId (à l'aide mot clé let) qui contient la chaîne de caractères : "rome".
Afficher dans la console (console.log(...)) la variable favoriteCityId.
Affecter une nouvelle valeur à la variable favoriteCityId : une chaînes de caractères : "paris".
Afficher dans la console (console.log(...)) la variable favoriteCityId.
Vérifier le résultat dans la console
 */
let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);
/*
Créer une constante citiesId (à l'aide mot clé const) qui contient un tableau de chaînes de caractères : "paris", "nyc", "rome", "rio-de-janeiro".
Afficher dans la console (console.log(...)) la constante citiesId.
Vérifier le résultat dans la console .
Affecter une nouvelle valeur à la constante citiesId : un tableau vide par exemple. Que constatez-vous dans la console ? Mettre en commentaire la ligne de code de la nouvelle affectation.
Ajouter un nouvel élément au tableau : "tokyo".
Afficher dans la console (console.log(...)) la constante citiesId.
*/
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
//citiesId = []; // error à l'excution
citiesId.push("tokyo");
console.log(citiesId);
/*
Créer une fonction getWeather qui possède un paramètre cityId.
Dans cette fonction, ajouter 2 variables locales :
city qui stocke la valeur du paramètre cityId en lettres majuscules.
temperature valorisé à 20.
Utiliser la nouvelle syntaxe ES2015, pour retourner un objet de la forme {city: "PARIS", temperature: 20}.
Créer une constante weather qui exécute la fonction getWeather en lui passant en paramètre favoriteCityId.
Afficher dans la console constante weather
*/
function getWeather(cityId) {
  let city = cityId.toUpperCase();
  let temperature = 20;
  return { city, temperature };
}
const weather = getWeather(favoriteCityId);
console.log("weather: ", weather);
/**
 * Affectation destructurée
Avec la nouvelle syntaxe d'affectation destructurée, créer deux constantes city et temperature qui récupère leurs valeurs à partir de la constante weather.
Afficher dans la console la valeur de constante city.
Afficher dans la console la valeur de constante temperature
 */
const { city, temperature } = weather;
console.log("city", city, "temperature:", temperature);

/*
Rest operator
A l'aide du rest operator, créer à partir du tableau citiesId, 3 constantes : parisId, nycId et othersCitiesId.
Afficher dans la console la valeur de constante parisId.
Afficher dans la console la valeur de constante nycId.
Afficher dans la console la taille du tableau othersCitiesId.
*/
const [parisId, nycId, ...othersCitiesId] = citiesId;
console.log("parisId ", parisId);
console.log("nycId ", nycId);
console.log("othersId ", othersCitiesId);
/*
Créer une classe Trip.
Ajouter un constructeur avec les propriétés : id, name, imageUrl.
Créer un objet parisTrip avec la classe Trip avec les informations suivantes :
id : paris
name : Paris
imageUrl : img/paris.jpg
Afficher dans la console :
l'objet parisTrip.
la propriété name de l'objet parisTrip.
Vérifier le résultat dans la console.

*/
class Trip {
  constructor(id, name, image) {
    this.id = id;
    this.name = name;
    this.imageUrl = image;
  }
  /*
    Ajouter la méthode toString() à la classe Trip qui permet d'avoir l'affichage ci-après.
    Trip [paris, Paris, img/paris.jpg] 
    Afficher dans la console le résultat de son exécution sur l'objet parisTrip.
    */
  toString() {
    return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this._price}]`;
  }
  /*
    Ajouter un getter et un setter pour la propriété price. La classe sauvegardera la valeur dans une variable privée appellée _price.
    Compléter la méthode toString() pour qu'elle affiche la valeur de _price.
    Valoriser à 100 la propriété price de l'objet parisTrip.
    Afficher dans la console, le résultat de la méthode toString() de l'objet parisTrip.
    */
  get price() {
    return this._price;
  }

  set price(valeur) {
    this._price = valeur;
  }

  /*
    Ajouter à la classe Trip une méthode statique getDefaultTrip() qui retourne une instance de la classe Trip valorisée avec les informations suivantes :
    id : rio-de-janeiro
    name : Rio de Janeiro
    imageUrl : img/rio-de-janeiro.jpg
    Créer une constante defaultTrip qui récupère le résultat de l'exécution de la méthode getDefaultTrip().
    Afficher dans la console defaultTrip.toString().
    */
  static getDefaultTrip() {
    return new Trip(
      "rio-de-janeiro",
      "Rio de Janeiro",
      "img/rio-de-janeiro.jpg"
    );
  }
}
let parisTrip = new Trip("paris", "Paris", "img/paris.jpg");
console.log("parisTrip ", parisTrip);
console.log("parisName ", parisTrip.name);
parisTrip.price = 100;
console.log(parisTrip.toString());
const defaultTrip = Trip.getDefaultTrip();
console.log("defaultTrip ", defaultTrip.toString());
/*
Créer la classe FreeTrip qui étends Trip.
Elle se construit avec les informations suivantes : id, name et imageUrl. La propriété price est valorisé par défaut à 0.
Créer une constante freeTrip, instance de la classe FreeTrip avec les informations suivantes :
id : nantes
name : Nantes
imageUrl : img/nantes.jpg
Afficher dans la console freeTrip.toString()
Redéfinir la méthode toString() dont le résultat est la concaténation de la chaîne de caractères Free et du résultat de l'exécution de la méthode toString() de la classe Trip.
*/
class FreeTrip extends Trip {
  constructor(id, name, image) {
    super(id, name, image);
    this._price = 0;
  }

  toString() {
    return `Free${super.toString()}`;
  }
}
const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
console.log("freeTrip: ", freeTrip.toString());
/*
Compléter le constructeur de la classe TripService pour initialiser un Set de 3 objet Trip.

Compléter le constructeur de la classe PriceService pour initialiser une Map (clé = identifiant voyage, valeur = prix). Stocker y 2 prix pour les villes Paris et Rio de Janeiro.

Compléter la méthode findByName(tripName) pour qu'elle renvoie une promesse.

Pour simuler une récupération des données distantes, utiliser la méthode setTimeout(fn,delay) pour créer une latence de 2s.
Renvoyer l'objet Trip correspondant au nom du voyage en paramètre.
Si aucun voyage ne correspond au nom en paramètre, renvoyer une erreur No trip with name xxx.
Compléter la méthode findPriceByTripId pour qu'elle renvoie une promesse.

Utiliser la méthode setTimeout(fn,delay) pour créer une latence de 2s.
Renvoyer la valeur du prix si trouvé
Si aucun prix trouvé, renvoyer l'erreur No price found for id xxxx.
Créer une instance de TripService et une instance de PriceService.

Effectuer une recherche par nom de voyage avec la valeur Paris. Afficher dans la console le résultat trouvé.
*/
class TripService {
  constructor() {
    //  Set of 3 trips
    this.trips = new Set();
    this.trips.add(new Trip("paris", "Paris", "img/paris.jpg"));
    this.trips.add(new Trip("nantes", "Nantes", "img/nantes.jpg"));
    this.trips.add(
      new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg")
    );
  }

  findByName(tripName) {
    return new Promise((succes, error) => {
      setTimeout(() => {
        let res = Array.from(this.trips).find(
          t => t.name.toLowerCase() == tripName.toLowerCase()
        );
        res ? succes(res) : error(`No trip with name ${tripName}`);
      }, 2000);
    });
  }
}

console.log(new TripService());
new TripService()
  .findByName("Paris")
  .then(
    val => console.log("succes :", val),
    val => console.log("error: ", val)
  );

class PriceService {
  constructor() {
    this.prices = new Map();
    this.prices.set("paris", 100);
    this.prices.set("rio-de-janeiro", 800);
  }

  findPriceByTripId(tripId) {
    return new Promise((succes, error) => {
      setTimeout(() => {
        let res = this.prices.get(tripId.toLowerCase());
        res ? succes(res) : error(`No price found for id ${tripId}`);
      }, 2000);
    });
  }
}
console.log(new PriceService());
new PriceService()
  .findPriceByTripId("nantes")
  .then(
    val => console.log("succes :", val),
    val => console.log("error: ", val)
  );
