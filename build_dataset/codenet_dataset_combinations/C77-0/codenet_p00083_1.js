var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
var lines = input.split('\n');

var line;
while (line = lines.shift()) {
    var arr = line.split(' ').map(function(n){return +n;});
    var year = arr[0];
    var month = arr[1];
    var day = arr[2];
    var era = '';

    var today = new Date(year, month - 1, day);
    if (today < new Date(1868, 8, 8)) {
        era = 'pre-meiji';
    } else if (today < new Date(1912, 6, 30)) {
        era = 'meiji';
        year -= 1867;
    } else if (today < new Date(1926, 11, 25)) {
        era = 'taisho';
        year -= 1911;
    } else if (today < new Date(1989, 0, 8)) {
        era = 'showa';
        year -= 1925;
    } else {
        era = 'heisei';
        year -= 1988;
    }

    if (era == 'pre-meiji') {
        console.log('pre-meiji');
        continue;
    }
    console.log(era, year, month, day);
}