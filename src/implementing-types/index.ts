type PersonType = {
  name: string;
  lastName: string;
  fullName(): string;
};

class Person implements PersonType {
  constructor(
    public name: string,
    public lastName: string,
  ) {}

  fullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

const person = new Person('Julia', 'Sanchez');
console.log(person.fullName());

// Multiple types

type NameType = {
  name: string;
};

type LastNameType = {
  lastName: string;
};

type FullNameType = {
  fullName(): string;
};

class Person2 implements NameType, LastNameType, FullNameType {
  constructor(
    public name: string,
    public lastName: string,
  ) {}

  fullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

const person2 = new Person2('Julia', 'Sanchez');
console.log('person2', person2);
