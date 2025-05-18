var fs = require('fs');
var inn = parseInt(fs['readFileSync'](0x0)['toString']());
function isPrime(n) {
    var GNszuI = {
        'fUvPM': function (x, y) {
            return x <= y;
        },
        'ciCNh': function (x, y) {
            return x === y;
        },
        'rTwCy': function (x, y) {
            return x % y;
        },
        'oDaUy': function (x, y) {
            return x === y;
        },
        'PfyVl': function (x, y) {
            return x % y;
        },
        'vfiCl': function (x, y) {
            return x + y;
        }
    };
    if (GNszuI['fUvPM'](n, 0x3))
        return n > 0x1;
    else if (GNszuI['ciCNh'](n % 0x2, 0x0) || n % 0x3 === 0x0)
        return ![];
    var i = 0x5;
    while (GNszuI['fUvPM'](Math['pow'](i, 0x2), n)) {
        if (GNszuI['rTwCy'](n, i) === 0x0 || GNszuI['oDaUy'](GNszuI['PfyVl'](n, GNszuI['vfiCl'](i, 0x2)), 0x0))
            return ![];
        i += 0x6;
    }
    return !![];
}
while (!isPrime(inn)) {
    inn++;
}
console['log'](inn);