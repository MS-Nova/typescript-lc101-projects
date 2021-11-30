//1. Defined in Astronaut.ts
//2. Implements the Payload interface
//3. Properties
// massKg should be a number.
// name should be a string.
// 4. Constructor
// Parameter massKg should be a number.
// Parameter name should be string.
// Sets value of this.massKg and this.name

import { Payload } from './Payload';
export class Astronaut implements Payload {
    // properties and methods
    //class variables
    massKg: number;
    name: string;
    constructor (massKg: number,name: string){
        this.massKg = massKg;
        this.name = name;
    }

 }