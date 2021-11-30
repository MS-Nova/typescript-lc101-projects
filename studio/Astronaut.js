"use strict";
//1. Defined in Astronaut.ts
//2. Implements the Payload interface
//3. Properties
// massKg should be a number.
// name should be a string.
// 4. Constructor
// Parameter massKg should be a number.
// Parameter name should be string.
// Sets value of this.massKg and this.name
exports.__esModule = true;
exports.Astronaut = void 0;
var Astronaut = /** @class */ (function () {
    function Astronaut(massKg, name) {
        this.massKg = massKg;
        this.name = name;
    }
    return Astronaut;
}());
exports.Astronaut = Astronaut;
