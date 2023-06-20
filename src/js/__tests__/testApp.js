import Character from '../Character.js';
import Team from '../Team.js';

test('Создаём команду - класс Team', () => {
  const testTeam = new Team('angels');
  const result = { name: 'angels', members: new Set() };
  expect(testTeam).toEqual(result);
});

test('Добавляем персонажа - метод add', () => {
  const team = new Team('angels');
  const unit = new Character('hero');
  team.add(unit);
  const result = {
    name: 'angels',
    members: new Set([{
      name: 'hero',
      level: 1,
      health: 100,
    }]),
  };
  expect(team).toEqual(result);
});

test('Проверка на дублирование персонажа', () => {
  const team = new Team('angels');
  const unit = new Character('hero');
  team.add(unit);
  expect(() => team.add(unit)).toThrow(new Error('Персонаж уже присутствует'));
});

// Тест не обязателен, т.к. есть следующий тест.
// test('Добавляем нескольких персонажей - метод addAll', () => {
//   const team = new Team('angels');
//   const unit1 = new Character('hero-1');
//   const unit2 = new Character('hero-2');
//   const unit3 = new Character('hero-3');
//   team.addAll(unit1, unit2, unit3);
//   const result = {
//     name: 'angels',
//     members: new Set([{
//       name: 'hero-1',
//       level: 1,
//       health: 100,
//     },
//     {
//       name: 'hero-2',
//       level: 1,
//       health: 100,
//     },
//     {
//       name: 'hero-3',
//       level: 1,
//       health: 100,
//     }]),
//   };
//   expect(team).toEqual(result);
// });

test('Добавляем нескольких персонажей - метод addAll, задвоения быть не должно', () => {
  const team = new Team('angels');
  const unit1 = new Character('hero-1');
  const unit2 = new Character('hero-2');
  const unit3 = new Character('hero-3');
  team.addAll(unit1, unit2, unit1, unit3);
  const result = {
    name: 'angels',
    members: new Set([{
      name: 'hero-1',
      level: 1,
      health: 100,
    },
    {
      name: 'hero-2',
      level: 1,
      health: 100,
    },
    {
      name: 'hero-3',
      level: 1,
      health: 100,
    }]),
  };
  expect(team).toEqual(result);
});

test('Производим конвертация Set в массив', () => {
  const team = new Team('angels');
  const unit1 = new Character('hero-1');
  const unit2 = new Character('hero-2');
  const unit3 = new Character('hero-3');
  team.addAll(unit1, unit2, unit3);
  const result = [
    {
      name: 'hero-1',
      level: 1,
      health: 100,
    },
    {
      name: 'hero-2',
      level: 1,
      health: 100,
    },
    {
      name: 'hero-3',
      level: 1,
      health: 100,
    }];
  expect(team.toArray()).toEqual(result);
});
