let [a, b, c] = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x20')['map'](Number);
console['log'](a + b + c - Math['max'](...[
    a,
    b,
    c
]));