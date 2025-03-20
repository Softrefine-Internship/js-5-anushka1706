// Write a JavaScript program that creates a class called University with properties for university name and departments.
// Include methods to add a department, remove a department, and display all departments. Create an instance of the University
// class and add and remove departments.

class University {
  constructor(name) {
    if (typeof name !== "string" || name.trim() === "")
      return console.log("invalid input");
    else this.name = name.trim();
    this.department = [];
  }
  addDepartment(name) {
    if (!this.name) return console.log("invalid name");
    else if (!this.department.includes(name)) {
      this.department.push(name.toLowerCase());
      console.log(`Department : '${name.toUpperCase()}' Added`);
    } else console.log(`this departmet already exists`);
  }
  removeDepartment(name) {
    const lowerCase = name.toLowerCase();
    if (!this.name) return console.log("invalid name");
    else if (this.department.includes(lowerCase)) {
      let index = this.department.indexOf(lowerCase);
      if (index !== -1) {
        this.department.splice(index, 1);
        console.log(`Department : '${name.toUpperCase()}' Removed`);
      }
    } else console.log(`enter valid name`);
  }
  displayDepartment() {
    if (!this.name) return console.log("invalid name");
    else
      this.department.forEach((e) => {
        console.log(`DEpartment : ${e}`);
      });
  }
}
const uni = new University("Adani University");
uni.addDepartment("ICT");
uni.addDepartment("civil");
uni.addDepartment("electronic");
uni.removeDepartment("civil");
uni.displayDepartment();
uni.addDepartment("computer science");
uni.displayDepartment();
