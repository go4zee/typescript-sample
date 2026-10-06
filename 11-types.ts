class Person {
  name: string = "";


  public getName(): string{
    return this.name;
  }
}

const person = new Person();
person.name = "Alan";


console.log(person.getName());


interface Shape{
  getArea(): number;
}

class RectangleShape implements Shape{
  public constructor(protected readonly width: number, protected readonly height: number){}

  public getArea(): number {
    return this.width * this.height;
  }
}

class SquareShape extends RectangleShape{
  public constructor(width: number){
    super(width, width);
  }
}

const square = new SquareShape(5);
console.log(`Square area: ${square.getArea()}`);

const rectangle = new RectangleShape(4, 5);
console.log(`Rectangle Area: ${rectangle.getArea()}`);
