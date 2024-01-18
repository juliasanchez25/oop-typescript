export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected attack: number,
    protected life: number,
  ) {}

  strike(character: Character): void {
    this.scream();
    character.loseLife(this.attack);
  }

  loseLife(attackStrength: number): void {
    this.life -= attackStrength;
    console.log(
      `${this.emoji} ${this.name} now has ${this.life} life points...`,
    );
  }

  abstract scream(): void;
}

export class Warrior extends Character {
  protected emoji = '>:D';

  scream(): void {
    console.log(`${this.emoji} AAAAAHHH!!!`);
  }
}
export class Monster extends Character {
  protected emoji = '>:(';

  scream(): void {
    console.log(`${this.emoji} GRRRRRRRR!!!`);
  }
}

const warrior = new Warrior('Mary', 80, 1000);
const monster = new Monster('Giant', 300, 3000);

warrior.strike(monster);
monster.loseLife;

monster.strike(warrior);
warrior.loseLife;
