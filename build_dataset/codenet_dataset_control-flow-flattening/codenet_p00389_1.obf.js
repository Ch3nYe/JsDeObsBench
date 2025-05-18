var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var [n, k] = input['trim']()['split']('\x20')['map'](Number);
var takasa = 0x0;
var w = 0x0;
var cnt = 0x0;
while (!![]) {
    if (n == 0x0)
        break;
    n--;
    cnt++;
    if (w <= k * cnt) {
        takasa++;
        w += cnt;
        cnt = 0x0;
    }
}
console['log'](takasa);