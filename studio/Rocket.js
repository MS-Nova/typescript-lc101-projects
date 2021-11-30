"use strict";
// 1.Defined in Rocket.ts.
// 2.Properties:
// a.name should be a string.
// b.totalCapacityKg should be a number.
// c.cargoItems should be an array of Cargo objects.
//   Should be initialized to an empty array []
// d.astronauts should be an array of Astronaut objects.
//   Should be initialized to an empty array []
// 3.Constructor:
//  Parameter name should be a string.
//  Parameter totalCapacityKg should be a number.
//  Sets value of this.name and this.totalCapacityKg
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = []; //array of Cargo object and initialized to empty array
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        //Returns the sum of all items using each item's massKg property
        var totalMass = 0;
        for (var i = 0; i < items.length; i++) {
            totalMass += items[i].massKg;
        }
        return totalMass;
    };
    Rocket.prototype.currentMassKg = function () {
        //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        var astronautMass = this.sumMass(this.astronauts);
        var cargoMass = this.sumMass(this.cargoItems);
        return astronautMass + cargoMass;
    };
    Rocket.prototype.canAdd = function (item) {
        //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        // Uses this.canAdd() to see if another item can be added.
        if (this.canAdd(cargo)) {
            // If true, adds cargo to this.cargoItems and returns true.
            this.cargoItems.push(cargo);
        }
        else {
            // If false, returns false.
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        // Uses this.canAdd() to see if another astronaut can be added.
        if (this.canAdd(astronaut)) {
            // If true, adds astronaut to this.astronauts and returns true.
            this.astronauts.push(astronaut);
        }
        else {
            // If false, returns false
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
