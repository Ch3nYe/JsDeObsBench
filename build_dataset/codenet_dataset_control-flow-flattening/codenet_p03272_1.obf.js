a = require('fs')['readFileSync']('/dev/stdin', 'utf8')['match'](/\d+/g);
console['log'](a[0x0] - a[0x1] + 0x1);