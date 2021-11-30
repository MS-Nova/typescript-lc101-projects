// 1.Defined in Cargo.ts
// 2.Implements the Payload interface
//3. Properties
// massKg should be a number.
// material should be a string.
// 4.Constructor
// Parameter massKg should be a number.
// Parameter material should be a string.
// Sets value of this.massKg and this.material

import { Payload } from './Payload';
export class Cargo implements Payload {
    // properties and methods
    //class variables
    massKg: number;
    material: string;
    constructor (massKg: number,material: string){
        this.massKg = massKg;
        this.material = material;
    }

 }