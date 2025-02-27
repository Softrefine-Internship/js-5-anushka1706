//  Write a JavaScript program to create a class called
// 'Rectangle' with properties for width and height.
// Include two methods to calculate rectangle area and perimeter.
//  Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class rectangle {
  constructor(height, width) {
    if (
      typeof height !== "number" ||
      typeof width !== "number" ||
      height <= 0 ||
      width <= 0
    )
      return console.log("invalid details");
    else this.height = height;
    this.width = width;
  }
  calPerimeter() {
    if (!this.height || !this.width) return console.log("invalid inputs");
    else console.log(`Perimeter is : ${2 * (this.height + this.width)}`);
  }
  calArea() {
    if (!this.height || !this.width) return console.log("invalid inputs");
    else console.log(`Area is : ${this.height * this.width}`);
  }
}
const rect1 = new rectangle(10, 5);
rect1.calArea();
rect1.calPerimeter();
