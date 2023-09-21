## 1 шаг

Выведите количество звезд в переданном файле. Учтите, что первая строчка в CVS файле является заголовочной, она не содержит данных и не должна учитываться, вторая срока с разделителем нам тоже не нужна. Вывод утилиты будет таким:

```bash
bin/stars.js __fixtures__/stars1.csv
Count: 18
```

## 2 шаг

Выведите список разных галактик, которые есть в таблице. Галактики должны быть отсортированы в алфавитном порядке.

```bash
bin/stars.js __fixtures__/stars1.csv
Count: 18
Galaxies: Андромеда, Журавль, Млечный путь
```

## 3 шаг

Выведите самое большое расстояние от звезды из таблицы до Земли и самое маленькое.

```bash
bin/stars.js __fixtures__/stars1.csv
Count: 18
Galaxies: Андромеда, Журавль, Млечный путь
Farest from Earth: 2500000 light years, closest to Earth: 4.24 light years
```

## 4 шаг

Выведите имя самой близкой к земле звезды и галактику, к которой она относится.

```bash
bin/stars.js __fixtures__/stars1.csv
Count: 18
Galaxies: Андромеда, Журавль, Млечный путь
Farest from earth: 2500000 light years, closest to Earth: 4.24 light years
Closest to Earth: Proxima Centauri in Млечный путь galaxy
```

## 5 шаг

Выведите планету c наибольшим радиусом из галактики, общая масса звезд в которой имеет наибольший вес.

```bash
bin/stars.js __fixtures__/stars1.csv
Count: 18
Galaxies: Андромеда, Журавль, Млечный путь
Farest from earth: 2500000 light years, closest to Earth: 4.24 light years
Closest to Earth: Proxima Centauri in Млечный путь galaxy
Star with largest radius from heaviest galaxy is Andromeda XIX
```