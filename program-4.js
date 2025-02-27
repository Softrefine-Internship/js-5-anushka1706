// Write a JavaScript program that creates a class called
// "BankAccount" with properties for account number and balance.
// Include methods to deposit and withdraw money from the account.
// Create some instances of the "BankAccount" class, deposit some money,
//  and withdraw a portion of it.

class BankAccount {
  #balance;
  #accNumber;
  constructor(accNumber, balance) {
    if (typeof accNumber !== "number" || accNumber.toString().length !== 5)
      return console.log("enter valid acc number");
    else this.#accNumber = accNumber;
    this.#balance = typeof balance === "number" && balance >= 0 ? balance : 0;
  }
  deposit(amount) {
    if (typeof amount === "number" && amount > 0) this.#balance += amount;
    else return console.log("enter valid amount");
  }
  withdraw(amount) {
    if (typeof amount === "number" && amount <= this.#balance && amount > 0)
      this.#balance -= amount;
    else console.log("insufficent balance");
  }
  checkBalance() {
    console.log(`Available balance : Rs ${this.#balance}`);
  }
}
const customer1 = new BankAccount(12345, "25000");
const customer2 = new BankAccount(67890, 10000);
customer1.deposit(2000); // 2000
customer2.withdraw(1000); // 9000
customer1.withdraw(25000);
customer2.deposit(4000); // 13000
customer1.checkBalance();
customer2.checkBalance();
