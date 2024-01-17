/* superclass */
export class Person {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

/* subclasses */
export class Student extends Person {
  constructor(
    name: string,
    lastName: string,
    age: number,
    cpf: string,
    public classroom: string,
  ) {
    super(name, lastName, age, cpf);
  }

  getFullName(): string {
    console.log('Something...');
    const result = super.getFullName();
    return result + '- Hi!';
  }
}
export class Client extends Person {
  getFullName(): string {
    return `Client ${this.name} ${this.lastName}`;
  }
}

const person = new Person('Ruth', 'Ferreira', 54, '665.442.889-22');
console.log(person.getFullName());

const student = new Student('João', 'Silva', 19, '123.432.544-55', '0001');
console.log(student);
console.log(student.getFullName());

const client = new Client('Maria', 'Pereira', 34, '555.332.12-45');
console.log(client.getFullName());
