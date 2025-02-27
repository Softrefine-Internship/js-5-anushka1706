// Write a JavaScript program that creates a class called 'Animal' with properties for species and sound.
// Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class zand
// adds an additional property for color. Override the make sound method to include the dog's color.
// Create an instance of the 'Dog' class and make it make its sound.

class Animal {
  constructor(species, sound) {
    if (
      typeof species !== "string" ||
      typeof sound !== "string" ||
      species.trim() == "" ||
      sound.trim() == ""
    )
      return console.log("enter valid value");
    else this.species = species.trim();
    this.sound = sound.trim();
  }
  makeSound() {
    console.log(`${this.species} makes ${this.sound} sound`);
  }
}
class Dog extends Animal {
  constructor(species, sound, color) {
    super(species, sound);
    this.color = color.trim();
  }
  makeSound() {
    if (!this.species || !this.color || !this.sound)
      return console.log("invalid inputs");
    else
      console.log(
        `${this.species} has ${this.color} color and makes ${this.sound} sound`
      );
  }
}
const dog = new Dog(5, " ", "black  ");
const dog2 = new Dog("dog", "      bhaw bhaw     ", " black  ");
dog.makeSound();
dog2.makeSound();
