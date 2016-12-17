class Car {
    engine: string;

    constructor (engine: string){
        this.engine = engine;
     }

     start(){
         alert('Engine Started: ' + this.engine);
     }
     stop(){
         alert('Engine Stopped: compile! ' + this.engine);
     }
}

window.onload = function(){
    var car = new Car('V8');
    car.start();
    car.stop();

}