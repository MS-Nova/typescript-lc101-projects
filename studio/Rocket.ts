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

import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    name:string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];    //array of Cargo object and initialized to empty array
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass( items: Payload[] ): number{
        //Returns the sum of all items using each item's massKg property
        let totalMass = 0;
        for (let i = 0; i < items.length; i++){
            totalMass += items[i].massKg;
        }
        return totalMass;
    }
    currentMassKg(): number{
        //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        let astronautMass: number = this.sumMass(this.astronauts);
        let cargoMass: number = this.sumMass(this.cargoItems);
        return astronautMass + cargoMass;

    }
    canAdd(item: Payload): boolean {
        
    //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg

    }
    addCargo(cargo: Cargo): boolean{
        // Uses this.canAdd() to see if another item can be added.
        if(this.canAdd(cargo)){
            // If true, adds cargo to this.cargoItems and returns true.
            this.cargoItems.push(cargo);
        }else{
            // If false, returns false.
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut): boolean{
        // Uses this.canAdd() to see if another astronaut can be added.
        if (this.canAdd(astronaut)){
             // If true, adds astronaut to this.astronauts and returns true.
            this.astronauts.push(astronaut);
        }else{
            // If false, returns false
            return false;
        }
    }
    
        
}