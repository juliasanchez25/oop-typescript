interface Person {
  name: string;
}

interface Person {
  readonly lastName: string;
}

interface Person {
  readonly addresses: readonly string[];
}

export const person: Person = {
  name: 'Julia',
  lastName: 'Sanchez',
  addresses: ['Av. Brasil', 'Av. Corrientes'],
};

console.log(person);
