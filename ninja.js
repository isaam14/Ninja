class Ninja{
    constructor(nombre,salud){
        this.nombre=nombre;
        this.salud=salud;
        this.velocidad=3;
        this.fuerza=3;
    }

    sayName(){
        console.log(this.nombre);
    }

    showStats(){
        console.log(`Stats:\nNombre: ${this.nombre} \nVelocidad: ${this.velocidad}\nFuerza: ${this.fuerza}\nSalud: ${this.salud}`);
    }

    drinkSake(){
        this.salud+=10;
    }
}


const ninja1 = new Ninja("Hyabusa",4);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();