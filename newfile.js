var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var car_type;
(function (car_type) {
    car_type["hatchback"] = "hatchback";
    car_type["sedan"] = "sedan";
    car_type["crossover"] = "crossover";
})(car_type || (car_type = {}));
var car_brand;
(function (car_brand) {
    car_brand["audi"] = "audi";
    car_brand["ford"] = "ford";
    car_brand["toyota"] = "toyota";
})(car_brand || (car_brand = {}));
var bike_brand;
(function (bike_brand) {
    bike_brand["brand1"] = "bike1";
    bike_brand["brand2"] = "bike2";
})(bike_brand || (bike_brand = {}));
var cycle_brand;
(function (cycle_brand) {
    cycle_brand["brand1"] = "cycle1";
    cycle_brand["brand2"] = "cycle2";
})(cycle_brand || (cycle_brand = {}));
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.get_price = function () {
        // document.getElementById("extra").innerHTML="price id not given.";
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super.call(this) || this;
    }
    Car.prototype.get_price = function () {
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
    };
    return Car;
}(Vehicle));
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike() {
        return _super.call(this) || this;
    }
    Bike.prototype.get_price = function () {
        if (obj3.brand === bike_brand.brand1) {
            document.getElementById("r8c2").innerHTML = "price is 50000";
        }
        if (obj3.brand === bike_brand.brand2) {
            document.getElementById("r8c2").innerHTML = "price is 20000";
        }
    };
    return Bike;
}(Vehicle));
var Cycle = /** @class */ (function (_super) {
    __extends(Cycle, _super);
    function Cycle() {
        return _super.call(this) || this;
    }
    Cycle.prototype.get_price = function () {
        if (obj4.brand === cycle_brand.brand1) {
            document.getElementById("r6c3").innerHTML = "price is 500";
        }
        if (obj4.brand === cycle_brand.brand2) {
            document.getElementById("r6c3").innerHTML = "price is 800";
        }
    };
    return Cycle;
}(Vehicle));
var obj2 = new Car();
function fun() {
    obj2.wheels = (document.getElementById("wheels_car").value);
    document.getElementById("r1c1").innerHTML = obj2.wheels;
    obj2.seats = (document.getElementById("seat_car").value);
    document.getElementById("r2c1").innerHTML = obj2.seats;
    obj2.type = (document.getElementById("type").value);
    document.getElementById("r3c1").innerHTML = obj2.type;
    obj2.brand = (document.getElementById("brand").value);
    document.getElementById("r4c1").innerHTML = obj2.brand;
    obj2.model = (document.getElementById("model_car").value);
    document.getElementById("r5c1").innerHTML = obj2.model;
    obj2.engine = (document.getElementById("engine_car").value);
    document.getElementById("r6c1").innerHTML = obj2.engine;
    obj2.year_purchase = (document.getElementById("year_car").value);
    document.getElementById("r7c1").innerHTML = obj2.year_purchase;
    obj2.get_price();
}
var obj3 = new Bike();
function fun2() {
    obj3.wheels = (document.getElementById("wheels_bike").value);
    document.getElementById("r1c2").innerHTML = obj3.wheels;
    obj3.seats = (document.getElementById("seat_bike").value);
    document.getElementById("r2c2").innerHTML = obj3.seats;
    obj3.brand = (document.getElementById("brand_bike").value);
    document.getElementById("r3c2").innerHTML = obj3.brand;
    obj3.model = (document.getElementById("model_bike").value);
    document.getElementById("r4c2").innerHTML = obj3.model;
    obj3.engine = (document.getElementById("engine_bike").value);
    document.getElementById("r5c2").innerHTML = obj3.engine;
    obj3.year_purchase = (document.getElementById("year_bike").value);
    document.getElementById("r6c2").innerHTML = obj3.year_purchase;
    obj3.get_price();
}
var obj4 = new Cycle();
function fun3() {
    obj4.wheels = (document.getElementById("wheels_cycle").value);
    document.getElementById("r1c3").innerHTML = obj4.wheels;
    obj4.seats = (document.getElementById("seat_cycle").value);
    document.getElementById("r2c3").innerHTML = obj4.seats;
    obj4.brand = (document.getElementById("brand_cycle").value);
    document.getElementById("r3c3").innerHTML = obj4.brand;
    obj4.model = (document.getElementById("model_cycle").value);
    document.getElementById("r4c3").innerHTML = obj4.model;
    obj4.year_purchase = (document.getElementById("year_cycle").value);
    document.getElementById("r5c3").innerHTML = obj4.year_purchase;
    obj4.get_price();
}
