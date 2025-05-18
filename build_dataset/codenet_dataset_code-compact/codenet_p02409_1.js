function initOfficialHouse(bMax, fMax, rMax) {
    var o = Array(bMax);
    for(var b = 0; b < bMax; b++) {
        o[b] = Array(fMax);
        for(var f = 0; f < fMax; f++) {
            o[b][f] = Array(rMax);
            for(var r = 0; r < rMax; r++) {
                o[b][f][r] = 0;
            }
        }
    }
    return o;
}
function toString(o){
    return o.map(function(b){
        return b.map(function(f){
            return ' ' + f.join(' ');
        }).join('\n');
    }).join('\n####################\n');
}

const chunk = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = chunk.trim().split('\n');
lines.shift(); // n
var o = initOfficialHouse(4, 3, 10);
lines.forEach(function (line) {
    var bfrv = line.split(' ').map(Number);
    var b = bfrv[0], f = bfrv[1], r = bfrv[2], v = bfrv[3];
    o[b - 1][f - 1][r - 1] += v;
});

console.log(toString(o));