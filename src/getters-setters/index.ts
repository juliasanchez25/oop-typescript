export class Person {
  constructor(
    private name: string,
    private lastName: string,
    private age: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(cpf: string) {
    console.log('Setter');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('Getter');
    return this._cpf.replace(/\D/g, '');
  }
}

const person = new Person('Ruth', 'Ferreira', 54, '665.442.889-22');
person.cpf = '111.111.111-22'; // setter
console.log(person.cpf); // getter
