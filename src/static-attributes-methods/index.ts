export class Person {
  static standardAge = 0;
  static standardCpf = '000.000.000-00';

  constructor(
    public name: string,
    public lastName: string,
    public age: number,
    public cpf: string,
  ) {}

  regularMethod(): void {
    console.log(Person.standardAge, Person.standardCpf);
  }

  static createPerson(name: string, lastName: string): Person {
    return new Person(name, lastName, Person.standardAge, Person.standardCpf);
  }
}

const person = new Person('Ruth', 'Ferreira', 54, '665.442.889-22');
const person2 = Person.createPerson('Mary', 'Sands');

console.log(person);
console.log(person2);

person.regularMethod();

console.log(Person.standardAge, Person.standardCpf);
