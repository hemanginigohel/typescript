enum car_type {
    hatchback = "hatchback",
    sedan = "sedan",
    crossover = "crossover",
}
enum car_brand {
    audi = "audi",
    ford = "ford",
    toyota = "toyota",
}
enum bike_brand {
    brand1 = "bike1",
    brand2 = "bike2",
}
enum cycle_brand{
    brand1="cycle1",
    brand2="cycle2",
}
class Vehicle {
    wheels: string;
    seats: string;
    price: number;
    constructor() { }
    public get_price():void{
   // document.getElementById("extra").innerHTML="price id not given.";
    }
}
class Car extends Vehicle {
    type: string;
    brand: string;
    model: string;
    engine: string;
    year_purchase: string;
    constructor() {
        super();
    }
    public get_price() {
        if (obj2.brand === car_brand.audi && obj2.type === car_type.sedan) {
            document.getElementById("r8c1").innerHTML = "price is 50000";
        }
        if (obj2.brand === car_brand.audi && obj2.type === car_type.hatchback) {
            document.getElementById("r8c1").innerHTML = "price is 500";
        }
        if (obj2.brand === car_brand.ford && obj2.type === car_type.hatchback) {
            document.getElementById("r8c1").innerHTML = "price is 50";
        }
        if (obj2.brand === car_brand.ford && obj2.type === car_type.sedan) {
            document.getElementById("r8c1").innerHTML = "price is 5000";
        }
    }
}
class Bike extends Vehicle {
    brand: string;
    model: string;
    engine: string;
    year_purchase: string;
    constructor() {
        super();
    }
    public get_price() {
        if (obj3.brand === bike_brand.brand1) { document.getElementById("r8c2").innerHTML = "price is 50000"; }
        if (obj3.brand === bike_brand.brand2) { document.getElementById("r8c2").innerHTML = "price is 20000"; }
    }
}
class Cycle extends Vehicle {
    brand: string;
    model: string;
    year_purchase: string;
    constructor() {
        super();
    }
    public get_price(){
    if (obj4.brand === cycle_brand.brand1) { document.getElementById("r6c3").innerHTML = "price is 500"; }
    if (obj4.brand === cycle_brand.brand2) { document.getElementById("r6c3").innerHTML = "price is 800"; }
    }

}
var obj2 = new Car();
function fun(): void {
    obj2.wheels = ((document.getElementById("wheels_car") as HTMLInputElement).value);
    document.getElementById("r1c1").innerHTML = obj2.wheels;
    obj2.seats = ((document.getElementById("seat_car") as HTMLInputElement).value);
    document.getElementById("r2c1").innerHTML = obj2.seats;
    obj2.type = ((document.getElementById("type") as HTMLInputElement).value);
    document.getElementById("r3c1").innerHTML = obj2.type;
    obj2.brand = ((document.getElementById("brand") as HTMLInputElement).value);
    document.getElementById("r4c1").innerHTML = obj2.brand;
    obj2.model = ((document.getElementById("model_car") as HTMLInputElement).value);
    document.getElementById("r5c1").innerHTML = obj2.model;
    obj2.engine = ((document.getElementById("engine_car") as HTMLInputElement).value);
    document.getElementById("r6c1").innerHTML = obj2.engine;
    obj2.year_purchase = ((document.getElementById("year_car") as HTMLInputElement).value);
    document.getElementById("r7c1").innerHTML = obj2.year_purchase;
    obj2.get_price();

}
var obj3 = new Bike();
function fun2(): void {
    obj3.wheels = ((document.getElementById("wheels_bike") as HTMLInputElement).value);
    document.getElementById("r1c2").innerHTML = obj3.wheels;
    obj3.seats = ((document.getElementById("seat_bike") as HTMLInputElement).value);
    document.getElementById("r2c2").innerHTML = obj3.seats;
    obj3.brand = ((document.getElementById("brand_bike") as HTMLInputElement).value);
    document.getElementById("r3c2").innerHTML = obj3.brand;
    obj3.model = ((document.getElementById("model_bike") as HTMLInputElement).value);
    document.getElementById("r4c2").innerHTML = obj3.model;
    obj3.engine = ((document.getElementById("engine_bike") as HTMLInputElement).value);
    document.getElementById("r5c2").innerHTML = obj3.engine;
    obj3.year_purchase = ((document.getElementById("year_bike") as HTMLInputElement).value);
    document.getElementById("r6c2").innerHTML = obj3.year_purchase;
    obj3.get_price();

}
var obj4 = new Cycle();
function fun3(): void {
    obj4.wheels = ((document.getElementById("wheels_cycle") as HTMLInputElement).value);
    document.getElementById("r1c3").innerHTML = obj4.wheels;
    obj4.seats = ((document.getElementById("seat_cycle") as HTMLInputElement).value);
    document.getElementById("r2c3").innerHTML = obj4.seats;
    obj4.brand = ((document.getElementById("brand_cycle") as HTMLInputElement).value);
    document.getElementById("r3c3").innerHTML = obj4.brand;
    obj4.model = ((document.getElementById("model_cycle") as HTMLInputElement).value);
    document.getElementById("r4c3").innerHTML = obj4.model;
    obj4.year_purchase = ((document.getElementById("year_cycle") as HTMLInputElement).value);
    document.getElementById("r5c3").innerHTML = obj4.year_purchase;
    obj4.get_price();
}