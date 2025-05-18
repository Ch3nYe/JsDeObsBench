fs = require('fs');
l = fs['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a');
x = [];
for (i = 0x0; i < 0x6; i++) {
    x['push'](parseInt(l[i]));
}
if (x[0x4] - x[0x0] <= x[0x5]) {
    console['log']('Yay!');
} else {
    console['log'](':(');
}