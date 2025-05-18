let n = Number(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
console['log'](0x320 * n - 0xc8 * ~~(n / 0xf));