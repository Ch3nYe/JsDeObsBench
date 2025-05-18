const [n, aStr] = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split'](/\n/);
let as = aStr['split'](/\s/)['map'](Number);
let total = as['reduce']((a, b) => a ^ b);
console['log'](as['map'](n => n ^ total)['join']('\x20'));