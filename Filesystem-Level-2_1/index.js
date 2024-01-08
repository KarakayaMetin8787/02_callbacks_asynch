import fs from 'fs';

fs.readFile("./data.json", 'utf8', (err, data) => {
    if (err) {
        return console.log('Could not read file', err);
    } else {
        const jsonObject = JSON.parse(data)
        // console.log(jsonObject)
        const jsonString = Object.keys(jsonObject).map(key => {
            return `${jsonObject[key].id} - ${jsonObject[key].title}\n${jsonObject[key].description}\n`;
        }).join('');
        fs.writeFile('json.txt', jsonString, (err) => {
            if (err) {
                return console.log('Could not create txt file', err);
            } else {
                return console.log('JSON converted to TXT');
            }
        });
    }
});