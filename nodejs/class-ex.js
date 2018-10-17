var Car = require('./Car');
var CarService = require('./CarService');

var carService = new CarService('SuperCars', 'England');

var car1 = new Car('ford', 'focus', 2015);

var car2 = new Car('ford', 'firesta', 2000);

carService.addCar(car1);
carService.addCar(car2);

carService.displayAllCars();