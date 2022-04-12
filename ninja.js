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


class Sensei extends Ninja{
    constructor(nombre){
        super(nombre,200);
        this.velocidad=10;
        this.fuerza=10;
        this.sabiduria=10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}
// ejemplo de salida
console.log("------------------------");
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"