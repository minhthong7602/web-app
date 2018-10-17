class Car {
    constructor(brand = 'Default Brand', model = 'Default Model', year = '2018') {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayCarInformations() {
        console.log(this.brand + ' ' + this.model + ' ' + this.year);
    }
}


module.exports = Car;