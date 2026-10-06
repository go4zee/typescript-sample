"use strict";
class Person {
    name = "";
    getName() {
        return this.name;
    }
}
const person = new Person();
person.name = "Alan";
console.log(person.getName());
class RectangleShape {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
class SquareShape extends RectangleShape {
    constructor(width) {
        super(width, width);
    }
}
const square = new SquareShape(5);
console.log(`Square area: ${square.getArea()}`);
const rectangle = new RectangleShape(4, 5);
console.log(`Rectangle Area: ${rectangle.getArea()}`);
