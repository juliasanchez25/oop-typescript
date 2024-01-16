export class Company {
  public readonly name: string;
  private readonly collaborators: Collaborator[] = [];
  protected readonly cnpj: string;

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

export class Collaborator {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
  ) {}
}

const company = new Company('Facebook', '13.322.333/0001-11');
const collaborator1 = new Collaborator('David', 'Jones');
const collaborator2 = new Collaborator('Adam', 'Sandler');
const collaborator3 = new Collaborator('Mary', 'Stones');

company.addCollaborator(collaborator1);
company.addCollaborator(collaborator2);
company.addCollaborator(collaborator3);

console.log(company);
company.showCollaborators();
