export default (content) => {
    const lines = content.split('\r\n').slice(2);
    //console.log(lines);
    const linesCount = lines.length;
    console.log(`Count: ${linesCount}`);
    
    const galaxies1 = lines.map(element => {
        const galax = element.split('|')[2];
        return galax.slice(1,-1);
    });

    const sortGalax = [...new Set(galaxies1)].sort().join(', ');
    console.log(`Galaxies: ${sortGalax}`);

    // lines.map(element => element.split('|')[1]);

    let minDistance = +lines[0].split('|')[5];
    let maxDistance = 0;

    lines.forEach(element => {
        const currentDistance = +element.split('|')[5];
        //console.log(currentDistance);
        if (currentDistance < minDistance) {
            minDistance = currentDistance;
        };
        if (currentDistance > maxDistance) {
            maxDistance = currentDistance;
        };
    });
    console.log(`Farest from Earth: ${maxDistance} light years, closest to Earth: ${minDistance} light years`);

    const galaxyString = lines.find(element => {
        const currentDistance = +element.split('|')[5];
        
        if(currentDistance === minDistance) {
            return true;
        } else {
            return false;
        }
    }).split("|");

    const galaxyString1 = lines.find(element => +element.split('|')[5] === minDistance).split("|");

    const galaxyName = galaxyString[2];
    const starName = galaxyString[1];

    console.log(`Closest to Earth:${starName}in${galaxyName}galaxy`);

    // 5

    // 1 шаг - ищем галактику, с наибольшим весом звезд
    const galaxies = {};
    // {
        // "Млечный путь": 108821,
        // ...
    // }
    lines.forEach(element => {
        const data = element.split("|");
        const galaxyName = data[2]
        if(!galaxies[galaxyName]) {
            galaxies[galaxyName] = +data[3];
        } else {
            galaxies[galaxyName] += +data[3];
        }
    })

    let maxWeight = 0;
    let maxWeightName = '';
    for (const galaxyName in galaxies) {
        if(galaxies[galaxyName] > maxWeight) {
            maxWeight = galaxies[galaxyName];
            maxWeightName = galaxyName;
        }
    }

    // Теперь мы знаем имя нужной галактики

    let maxRadius = 0;
    let maxRadiusName = '';

    lines.forEach(element => {
        const data = element.split("|");
        const galaxyName = data[2];
        const currentRadius = +data[4];
        if(galaxyName === maxWeightName && currentRadius > maxRadius) {
            maxRadius = currentRadius;
            maxRadiusName = data[1];
        }
    })

    //console.log(maxWeightName);
    console.log(`Star with largest radius from heaviest galaxy is${maxRadiusName}`);
}