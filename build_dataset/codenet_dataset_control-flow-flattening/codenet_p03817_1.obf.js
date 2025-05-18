input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
lines = input['split']('\x0a');
N = lines['shift']() * 0x1;
ans = Math['floor'](N / 0xb) * 0x2;
m = N % 0xb;
if (m == 0x0) {
} else if (m <= 0x6) {
    ans += 0x1;
} else {
    ans += 0x2;
}
console['log'](ans);