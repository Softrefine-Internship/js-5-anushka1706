// Write a JavaScript program to create a class called "Person" with properties for
// name, age and country.
// Include a method to display the person's details.
//  Create two instances of the 'Person' class and display their details.

class person {
  constructor(name, age, country) {
    if (typeof name !== "string" || !name.trim()) {
      console.log("Invalid name. It must be a non-empty string.");
      return;
    }
    if (typeof age !== "number" || age < 0) {
      console.log("Invalid age");
      return;
    }
    if (typeof country !== "string" || !country.trim()) {
      console.log("Invalid country. It must be a non-empty string.");
      return;
    }
    this.name = name;
    this.age = +age;
    this.country = country;
  }
  displayDetails() {
    if (this.name && this.age && this.country)
      console.log(
        `${this.name} is ${this.age} year old and lives in ${this.country}`
      );
    else return console.log("invalid inputs");
  }
}

const p1 = new person("parth", "fds", "india");
const p2 = new person("jasmine", 20, "USA");
p1.displayDetails();
p2.displayDetails();
