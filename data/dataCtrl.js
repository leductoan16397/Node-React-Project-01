const fs = require('fs');
// const a=require('./data.json')

const readData = () => {
    // console.log(process.cwd() + '\\data\\data.json');
    let filePath = process.cwd() + '\\data\\data.json';
    let conf = fs.readFileSync(filePath);
    let data = JSON.parse(conf);
    return data.data;
}

module.exports = { readData };