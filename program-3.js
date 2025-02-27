// Write a JavaScript program that creates a class called
// 'Vehicle' with properties for make, model, and year.
// Include a method to display vehicle details.
// Create a subclass called 'Car' that inherits from the 'Vehicle' class
// and includes an additional property for the number of doors.
// Override the display method to include the number of doors.

class Vehicle {
  constructor(make, model, year) {
    if (typeof make !== "string" || !make.trim()) {
      console.log("Invalid make");
      return;
    }
    if (typeof model !== "string" || !model.trim()) {
      console.log("Invalid model");
      return;
    }
    if (typeof year !== "number" || year > new Date().getFullYear()) {
      console.log("Invalid year. Enter a valid 4-digit year.");
      return;
    }
    this.make = make.trim();
    this.model = model.trim();
    this.year = year;
  }
  displayDetails() {
    console.log(
      `This is a ${this.make} of model ${this.model} manufactured in the year ${this.year}`
    );
  }
}
class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    if (typeof doors !== "number" || doors <= 0)
      return console.log("invalid input");
    else this.doors = doors;
  }
  displayDetails() {
    if (!this.year || !this.make || !this.model || !this.doors)
      return console.log("this data does not exists");
    else
      console.log(
        `This is a ${this.make} ${this.model} manufactured in the year ${this.year} having ${this.doors} doors`
      );
  }
}
const car1 = new Car("BMW", "  series-7", 2024, 4);
car1.displayDetails();
