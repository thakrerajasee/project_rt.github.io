

class cars{
    public nam:string;
    public type:string;
   protected mno:number;
    public capacity:number;
    public cylinders:number;
    public power:number;
    public torque:number;
    public mileage:number;
    //constructor
     constructor(nam:string, type:string, mno:number, capacity:number,cylinders:number, power:number, torque:number, mileage:number )

         { console.warn("inside constructor")
            this.nam=nam
            this.type=type
            this.mno=mno
            this.capacity=capacity
            this.cylinders=cylinders
            this.power=power
            this.torque=torque
            this.mileage=mileage
         }

    //all spec. method 
          carmethod1()
          {
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
              var view = document.getElementById(`view1`);
                    view.innerHTML=`
                    Name = ${this.nam} <br>
                    Type = ${this.type} <br>
                    Model n.o = ${this.mno}<br>
                    Capacity = ${this.capacity}cc <br>
                    cylinders = ${this.cylinders} <br>
                    power = ${this.power}@6000RPM <br>
                    torque = ${this.torque}@4000RPM <br>
                    mileage = ${this.mileage}Km/l <br>
                  `
          }

          carmethod2()
          {
              var view = document.getElementById(`view2`);
                    view.innerHTML=`
                    Name = ${this.nam} <br>
                    Type = ${this.type} <br>
                    Model n.o = ${this.mno}<br>
                    Capacity = ${this.capacity}cc <br>
                    cylinders = ${this.cylinders} <br>
                    power = ${this.power}@6000RPM <br>
                    torque = ${this.torque}@4000RPM <br>
                    mileage = ${this.mileage}Km/l <br>
                  `
          }

          carmethod3()
          {
              var view = document.getElementById(`view3`);
                    view.innerHTML=`
                    Name = ${this.nam} <br>
                    Type = ${this.type} <br>
                    Model n.o = ${this.mno}<br>
                    Capacity = ${this.capacity}cc <br>
                    cylinders = ${this.cylinders} <br>
                    power = ${this.power}@6000RPM <br>
                    torque = ${this.torque}@4000RPM <br>
                    mileage = ${this.mileage}Km/l <br>
                  `
          }
   
}

 
 }
 

  var mar:cars = new cars("Maruti Baleno", "petrol", 1, 1997, 4, 85, 115, 21.4);
    mar.carmethod1()


  var hyu:cars = new cars("Hyundai Elite", "petrol", 2, 1997, 4, 83, 115, 18.60);
    hyu.carmethod2()

  
  var hon:cars = new cars("Honda Jazz", "petrol", 3, 1998, 4, 90, 110, 18.0);
    hon.carmethod3()

