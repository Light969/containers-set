import Character from '../Character.js';

test('Проверяем Character', () => {
  const testPerson = new Character('Кеша', 'Zombie');
  const result = {
    name: 'Кеша', type: 'Zombie', health: 100, level: 1,
  };
  expect(testPerson).toEqual(result);
});

test('Проверяем имя', () => {
  const name = () => new Character('М', 'Zombie');
  expect(name).toThrow('Имя должно быть строкой и содержать от 2х до 10 символов');
});

test('Проверяем имя', () => {
  const name = () => new Character('Мммммммммммммммммм', 'Zombie');
  expect(name).toThrow('Имя должно быть строкой и содержать от 2х до 10 символов');
});

test('Проверяем имя на предмет строки', () => {
  const name = () => new Character(3, 'Zombie');
  expect(name).toThrow('Имя должно быть строкой и содержать от 2х до 10 символов');
});

test('Проверяем тип', () => {
  const type = () => new Character('Gosha', 'Ludoed');
  expect(type).toThrow('Тип героя должен быть: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie');
});

// test('Basic Test', () => {
//   let result = 4;
//   expect(result).toBe(4);
// });

test('На 1 повышает поле level', () => {
  const testLevel = new Character('Кеша', 'Zombie');
  testLevel.health = 70;
  testLevel.attack = 20;
  testLevel.defense = 20;
  testLevel.levelUp();
  const result = {
    name: 'Кеша', type: 'Zombie', health: 100, level: 2, attack: 24, defense: 24,
  };
  expect(testLevel).toEqual(result);
});

test('нельзя повысить левел умершего', () => {
  function test() {
    const testLevel = new Character('Кеша', 'Zombie');
    testLevel.health = 0;
    return testLevel.levelUp();
  }
  expect(test).toThrow('нельзя повысить левел умершего');
});

test('Проверяем урон, наносимый персонажу', () => {
  const testHealth = new Character('Кеша', 'Zombie');
  testHealth.attack = 40;
  testHealth.defense = 10;
  testHealth.damage(10);
  const result = {
    name: 'Кеша', type: 'Zombie', health: 91, level: 1, attack: 40, defense: 10,
  };
  expect(testHealth).toEqual(result);
});

test('Проверяем урон, наносимый мёртвому персонажу', () => {
  const testHealth = new Character('Кеша', 'Zombie');
  testHealth.health = 0;
  expect(() => testHealth.damage(10)).toThrow('Персонаж мёртв');
});

test('Проверяем урон, наносимый персонажу умершего после нанесения урона', () => {
  const testHealth = new Character('Кеша', 'Zombie');
  testHealth.health = 5;
  testHealth.attack = 40;
  testHealth.defense = 10;
  expect(() => testHealth.damage(10)).toThrow('Персонаж мёртв');
});
