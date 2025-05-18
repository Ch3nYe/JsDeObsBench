let lines = [];
let reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', function (line) {
    lines.push(line);
});

reader.on('close', function () {
    if (lines.length === 1) {
        let date_int = lines[0].replace(/\//g, '');
        if (date_int <= 20190430) {
            console.log('Heisei');
            return;
        }
    }
    console.log('TBD');
});