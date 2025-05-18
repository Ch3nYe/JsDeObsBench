var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
var lines = input.split('\n');

var line;
while (line = lines.shift()) {
    var time = line.split(' ').map(function(n){return +n;});
    if (time[0] == -1 && time[1] == -1 && time[2] == -1)
        break;

    var hour = time[0];
    var min = time[1] + hour * 60;
    var sec = time[2] + min * 60;

    var rem = 120 * 60 - sec;
    var rem3 = rem * 3;
    var remSec = rem % 60;
    var remSec3 = rem3 % 60;
    rem = Math.floor(rem / 60);
    rem3 = Math.floor(rem3 / 60);
    var remMin = rem % 60;
    var remMin3 = rem3 % 60;
    var remHour = Math.floor(rem / 60);
    var remHour3 = Math.floor(rem3 / 60);

    console.log(('0' + remHour).slice(-2) + ':' + ('0' + remMin).slice(-2) + ':' + ('0' + remSec).slice(-2));
    console.log(('0' + remHour3).slice(-2) + ':' + ('0' + remMin3).slice(-2) + ':' + ('0' + remSec3).slice(-2));
}