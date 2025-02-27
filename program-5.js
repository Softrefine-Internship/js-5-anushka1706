// Write a JavaScript program that creates a class called
// 'Shape' with a method to calculate the area. Create two subclasses,
// 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method.
// Create an instance of the 'Circle' class and calculate its area. Similarly,
// do the same for the 'Triangle' class.

class Shape {
  calArea() {
    return 0;
  }
}
class Circle extends Shape {
  constructor(r) {
    super();
    this.radius = +r > 0 ? +r : 0;
  }
  calArea() {
    return this.radius > 0
      ? console.log(
          `Area of the circle is : ${(
            Math.PI *
            this.radius *
            this.radius
          ).toFixed(3)}`
        )
      : console.log("Invalid radius");
  }
}
class Triangle extends Shape {
  constructor(h, w) {
    super();
    if (typeof h !== "number" || typeof w !== "number" || h <= 0 || w <= 0)
      return console.log("invalid inputs");
    else this.height = h;
    this.width = +w;
  }
  calArea() {
    return this.height > 0 && this.width > 0
      ? console.log(
          `Area of the triangle is : ${(this.height * this.width) / 2}`
        )
      : console.log("invalid dimensions");
  }
}
const circle = new Circle(20);
const triangle = new Triangle("10", 2);
circle.calArea();
triangle.calArea();
