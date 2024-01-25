interface NameType {
  name: string;
}

interface LastNameType {
  lastName: string;
}

interface FullNameType {
  fullName(): string;
}

// type PersonType = NameType & LastNameType & FullNameType;

interface PersonType2 extends NameType, LastNameType, FullNameType {}

export class Person implements PersonType2 {
  constructor(
    public name: string,
    public lastName: string,
  ) {}

  fullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

const personObject: PersonType2 = {
  fullName() {
    return `${this.name} ${this.lastName}`;
  },
  name: 'Julia',
  lastName: 'Sanchez',
};

const person = new Person('Julia', 'Sanchez');
console.log(person.fullName());
console.log(personObject.fullName());
