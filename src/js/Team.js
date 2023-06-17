export default class Team {
  constructor(teamName) {
    this.name = teamName;
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      throw new Error('Персонаж уже присутствует');
    }
    this.members.add(member);
  }

  addAll(...rest) {
    rest.forEach((member) => this.members.add(member));
  }

  toArray() {
    return Array.from(this.members);
  }
}
