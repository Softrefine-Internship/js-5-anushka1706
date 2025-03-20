// Write a JavaScript program that creates a class called
// 'Employee' with properties for name and salary.
// Include a method to calculate annual salary.
// Create a subclass called 'Manager' that inherits from the 'Employee' class
// and adds an additional property for department.
//  Override the annual salary calculation method to include bonuses for managers.
// Create two instances of the 'Manager' class and calculate their annual salary.

class Employee {
  #salary;
  constructor(name, salary) {
    if (typeof name !== "string" || !name.trim() || salary <= 0)
      return console.log("enter valid name or salary");
    else this.name = name;
    this.#salary = +salary;
  }
  annualSalary() {
    if (!this.getSalary() && !this.name)
      return console.log("object was not created enter valid values");
    return console.log(this.#salary * 12);
  }
  getSalary() {
    return this.#salary;
  }
}
class Manager extends Employee {
  constructor(name, salary, dept, bonus) {
    super(name, salary);
    if (typeof bonus !== "number") return console.log("invalid amount");
    else this.bonus = bonus;
    this.department = dept;
  }
  annualSalary() {
    if (this.getSalary() && this.bonus) {
      const annual = this.getSalary() * 12;
      console.log(annual + this.bonus);
    } else return console.log("invalid details");
  }
}
const manager1 = new Manager("karen", 50000, "CA", 20000);
const manager2 = new Manager("jessica", 55000, "CA", 25000);
manager1.annualSalary();
manager2.annualSalary();
const emp4 = new Employee("Jane Doe", -3000);
emp4.annualSalary();
