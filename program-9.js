// Write a JavaScript program that creates a class called Bank with properties for bank names and branches.
// Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class
// and perform operations to add and remove branches.

class Bank {
  constructor(bankName) {
    if (typeof bankName !== "string" || !bankName.trim()) {
      console.log("Invalid bank name.");
      return;
    }
    else
    this.name = bankName.trim();
    this.branches = [];
  }

  addBranches(branch) {
    if (typeof branch !== "string" || !branch.trim()) {
      console.log("Invalid branch name.");
      return;
    }
    branch = branch.trim().toLowerCase();

    if (this.branches.includes(branch)) {
      console.log("Branch already exists.");
      return;
    }
    this.branches.push(branch);
  }

  removeBranches(branch) {
    if (typeof branch !== "string" || !branch.trim()) {
      console.log("Invalid branch name.");
      return;
    }
    branch = branch.trim().toLowerCase();

    const index = this.branches.indexOf(branch);
    if (index !== -1) {
      this.branches.splice(index, 1);
    } else {
      console.log("This branch does not exist.");
    }
  }

  displayBranches() {
    if (this.branches.length === 0) {
      console.log("No branches available.");
      return;
    }
    console.log(`Branches of ${this.name}:`);
    this.branches.forEach((branch, i) => {
      console.log(branch);
    });
  }
}
const bank = new Bank("HDFC bank");
bank.addBranches(55);
bank.addBranches("      ahmedabad");
bank.addBranches("bangalore");
bank.displayBranches();
bank.removeBranches("delhi");
bank.displayBranches();
