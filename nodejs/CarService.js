function forEach(array, callbackFunction) {
    for(let i=0; i< array.length; i++) {
        const arrayElement = array[i];
        callbackFunction(arrayElement);
    }
}

class CarService {
    constructor(name, country) {
        this.name = name;
        this.country = country;

        this.carsToRepair = [];
    }

    addCar(car) {
        this.carsToRepair.push(car);
    }

    displayAllCars() {
        forEach(this.carsToRepair, function (car) {
            car.displayCarInformations();
        })
    }
}

module.exports = CarService;