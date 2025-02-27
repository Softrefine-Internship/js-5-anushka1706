// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name,
//  and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the
// BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

class BankAccount {
  #accNum;
  #balance;
  constructor(accNum, accHolder, balance) {
    if (
      typeof accNum !== "number" ||
      typeof accHolder !== "string" ||
      typeof balance !== "number"
    )
      return console.log("invalid input");
    else this.#accNum = accNum;
    this.#balance = balance;
    this.accHolder = accHolder.trim();
  }
  transfer(acc, amount) {
    if (!this.#balance)
      return console.log("invalid balance amount in object creation");
    else if (amount <= 0) return console.log(`enter valid amount`);
    else {
      this.#balance -= amount;
      acc.#balance += amount;
    }
  }
  deposit(amount) {
    if (!this.#balance)
      return console.log("invalid balance amount in object creation");
    else if (amount > 0) this.#balance += amount;
    else return console.log("enter valid amount");
  }
  withdraw(amount) {
    if (!this.#balance)
      return console.log("invalid balance amount in object creation");
    else if (this.#balance > amount && amount > 0) this.#balance -= amount;
    else return console.log("enter valid amount");
  }
  checkBalance() {
    if (!this.#balance)
      return console.log("invalid balance amount in object creation");
    else console.log(`Available balance Rs.${this.#balance}`);
  }
}
const acc1 = new BankAccount(789456, "Anushka", 60000);
const acc2 = new BankAccount(789456, "Parth", 40000);
const acc3 = new BankAccount(789456, "     jessica", 30000);
acc1.deposit(5000); //65000
acc2.transfer(acc3, 2500); //37500
acc3.deposit(15000); // 47500
acc1.withdraw(1000); // 64000
acc2.deposit(4000); // 41500
acc3.transfer(acc2, 2000); //45500 43500
acc1.checkBalance();
acc2.checkBalance();
acc3.checkBalance();
