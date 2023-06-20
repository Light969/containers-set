export default class Character {
  constructor(unit) {
    // if (name === undefined || name.length < 2 || name.length > 10) {
    //   throw new Error('Имя должно быть сткрой от 2 до 10 символов включительно');
    // }
    this.name = unit;
    this.level = 1;
    this.health = 100;
  }
}

// const unit1 = new Character('hero-1');
// console.log(unit1);

// const unit2 = new Character('hero-2');
// console.log(unit2);
