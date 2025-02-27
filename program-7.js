// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year.
//  Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class
// and includes an additional property for book price. Override the display method to include the book price.
// Create an instance of the 'Ebook' class and display its details.

class Book {
  constructor(title, author, year) {
    if (
      !title.trim() ||
      !author.trim() ||
      !year.trim() ||
      typeof title !== "string" ||
      typeof author !== "string" ||
      typeof year !== "string"
    )
      return console.log("enter valid value");
    else this.title = title.trim();
    this.author = author.trim();
    this.year = year.trim();
  }
  displayDetails() {
    console.log(
      `${this.title} by ${this.author} published in the year ${this.year}`
    );
  }
}
class Ebook extends Book {
  constructor(title, author, year, price) {
    super(title, author, year);
    this.price = +price.trim();
  }
  displayDetails() {
    if (!this.title || !this.author || !this.year || !this.price)
      return console.log("invalid inputs");
    else
      console.log(
        `${this.title} by ${this.author} published in the year ${this.year} costs Rs.${this.price}`
      );
  }
}
const book = new Ebook("The Alchemist ", "  Paulo Coelho  ", " 1988", "400");
const book2 = new Ebook(" ", "  Paulo Coelho  ", " 1988", "400");
book.displayDetails();
book2.displayDetails();
