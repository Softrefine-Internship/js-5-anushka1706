// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price.
// Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called
// PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period.
// Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct
// class and calculate its total price.

class Product {
    constructor(productID, name, price) {
      if (typeof productID !== "number" || productID <= 0) {
        console.log("Invalid product ID");
        return;
      }
      if (typeof name !== "string" || !name.trim()) {
        console.log("Invalid product name");
        return;
      }
      if (typeof price !== "number" || price <= 0) {
        console.log("Invalid price");
        return;
      }
  
      this.productId = productID;
      this.name = name.trim();
      this.price = price;
    }
  
    calculateTotalPrice(qty) {
      if (!this.productId || !this.name || !this.price) {
        console.log("Invalid product instance. Cannot calculate total price.");
        return;
      }
      if (typeof qty !== "number" || qty <= 0) {
        console.log("Enter a valid quantity.");
        return;
      }
      return this.price * qty;
    }
  }
  
  class PersonalCareProduct extends Product {
    constructor(productID, name, price, warrantyPeriod) {
      super(productID, name, price);
  
      if (typeof warrantyPeriod !== "number" || warrantyPeriod <= 0) {
        console.log("Invalid warranty period");
        return;
      }
  
      this.warranty = warrantyPeriod;
    }
  
    calculateTotalPrice(qty) {
      if (!this.productId || !this.name || !this.price || !this.warranty) {
        console.log("Invalid product instance. Cannot calculate total price.");
        return;
      }
      if (typeof qty !== "number" || qty <= 0) {
        console.log("Enter a valid quantity.");
        return;
      }
  
      console.log(
        `Total price for ${this.name} is Rs.${this.price * qty} with a warranty period of ${this.warranty} months.`
      );
    }
  }  
const product = new PersonalCareProduct('101', "hair dryer", 500, 5);
product.calculateTotalPrice(10);
