var cars = /** @class */ (function () {
    //constructor
    function cars(nam, type, mno, capacity, cylinders, power, torque, mileage) {
        console.warn("inside constructor");
        this.nam = nam;
        this.type = type;
        this.mno = mno;
        this.capacity = capacity;
        this.cylinders = cylinders;
        this.power = power;
        this.torque = torque;
        this.mileage = mileage;
    }
    //all spec. method 
    cars.prototype.carmethod1 = function () {
        //   console.log(`inside car method 
        //   ${this.nam}
        //   ${this.type}
        //   ${this.mno}
        //   ${this.capacity}cc
        //   ${this.cylinders}
        //   ${this.power}@6000RPM
        //   ${this.torque}@4000RPM
        //   ${this.mileage}Km/l
        //   `)
        var view = document.getElementById("view1");
        view.innerHTML = "\n                    Name = " + this.nam + " <br>\n                    Type = " + this.type + " <br>\n                    Model n.o = " + this.mno + "<br>\n                    Capacity = " + this.capacity + "cc <br>\n                    cylinders = " + this.cylinders + " <br>\n                    power = " + this.power + "@6000RPM <br>\n                    torque = " + this.torque + "@4000RPM <br>\n                    mileage = " + this.mileage + "Km/l <br>\n                  ";
    };
    cars.prototype.carmethod2 = function () {
        var view = document.getElementById("view2");
        view.innerHTML = "\n                    Name = " + this.nam + " <br>\n                    Type = " + this.type + " <br>\n                    Model n.o = " + this.mno + "<br>\n                    Capacity = " + this.capacity + "cc <br>\n                    cylinders = " + this.cylinders + " <br>\n                    power = " + this.power + "@6000RPM <br>\n                    torque = " + this.torque + "@4000RPM <br>\n                    mileage = " + this.mileage + "Km/l <br>\n                  ";
    };
    cars.prototype.carmethod3 = function () {
        var view = document.getElementById("view3");
        view.innerHTML = "\n                    Name = " + this.nam + " <br>\n                    Type = " + this.type + " <br>\n                    Model n.o = " + this.mno + "<br>\n                    Capacity = " + this.capacity + "cc <br>\n                    cylinders = " + this.cylinders + " <br>\n                    power = " + this.power + "@6000RPM <br>\n                    torque = " + this.torque + "@4000RPM <br>\n                    mileage = " + this.mileage + "Km/l <br>\n                  ";
    };
    return cars;
}());
var mar = new cars("Maruti Baleno", "petrol", 1, 1997, 4, 85, 115, 21.4);
mar.carmethod1();
var hyu = new cars("Hyundai Elite", "petrol", 2, 1997, 4, 83, 115, 18.60);
hyu.carmethod2();
var hon = new cars("Honda Jazz", "petrol", 3, 1998, 4, 90, 110, 18.0);
hon.carmethod3();
