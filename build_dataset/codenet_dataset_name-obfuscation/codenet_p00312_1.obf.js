var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var [D, L] = input['trim']()['split']('\x20')['map'](Number);
var amari = D % L;
var yakusuu = (D - amari) / L;
console['log'](yakusuu + amari);