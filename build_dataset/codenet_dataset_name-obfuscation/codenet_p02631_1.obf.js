const [n, aStr] = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split'](/\n/);
let as = aStr['split'](/\s/)['map'](Number);
let total = as['reduce']((_0xbf89ac, _0x1bcb45) => _0xbf89ac ^ _0x1bcb45);
console['log'](as['map'](_0x50826b => _0x50826b ^ total)['join']('\x20'));