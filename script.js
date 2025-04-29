// ¡El país te necesita!

const fs = require('fs');
const path = require('path');

subestaciones = fs.readdirSync(path.join('subestaciones'));

for (file of subestaciones) {
    let data = fs.readFileSync(path.join('subestaciones', file),'utf-8');
    data = data.trim();
    const [ first, second ] = data.split(',');
    const result = first - second;
    if (result == 15000) {
        console.log(`Subestación con fallo detectada: ${ file }\n Lecturas: ${first},${second}\n Diferencia: ${result}`);
        break;
    }
}

