var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var cnt, i, j;
input = input['split']('\x20');
for (cnt = 0x0; cnt < 0x3; cnt++) {
    for (i = 0x0; i < 0x3; i++) {
        if (input[i] > input[i + 0x1]) {
            j = input[i];
            input[i] = input[i + 0x1];
            input[i + 0x1] = j;
        }
    }
}
console['log']('%d\x20%d\x20%d', input[0x0], input[0x1], input[0x2]);