export class Company {
  public readonly name: string;
  protected readonly collaborators: Collaborator[] = [];
  private readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addCollaborator(collaborator: Collaborator): void {
    this.collaborators.push(collaborator);
  }

  showCollaborators(): void {
    for (const collaborator of this.collaborators) {
      console.log(collaborator);
    }
  }
}

export class Facebook extends Company {
  constructor() {
    super('Facebook', '11.111.111/0001-11');
  }

  popCollaborator(): Collaborator | null {
    const collaborator = this.collaborators.pop();
    if (collaborator) return collaborator;
    return null;
  }
}

export class Collaborator {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
  ) {}
}

const company = new Facebook();
const collaborator1 = new Collaborator('David', 'Jones');
const collaborator2 = new Collaborator('Adam', 'Sandler');
const collaborator3 = new Collaborator('Mary', 'Stones');

company.addCollaborator(collaborator1);
company.addCollaborator(collaborator2);
company.addCollaborator(collaborator3);

const removedCollaborator = company.popCollaborator();
console.log(removedCollaborator);

console.log(company);
company.showCollaborators();
