inp = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
l = inp['shift']()['split']('\x20');
a = l['shift']() * 0x1;
b = l['shift']() * 0x1;
x = l['shift']() * 0x1;
l = 0x0;
r = 0x5a;
mid = 0x2d;
c = 0x0;
S = a * a * b;
if (S / 0x2 < x) {
    while (l < r) {
        s = S - a * a * Math['tan'](mid / 0xb4 * Math['PI']) / 0x2 * a;
        if (x < s) {
            l = mid;
        } else {
            r = mid;
        }
        mid = (l + r) / 0x2;
        c++;
        if (c > 0xc8) {
            break;
        }
    }
    console['log'](mid['toFixed'](0xa));
} else {
    while (l < r) {
        s = b * b * Math['tan'](mid / 0xb4 * Math['PI']) / 0x2 * a;
        if (x < s) {
            r = mid;
        } else {
            l = mid;
        }
        mid = (l + r) / 0x2;
        c++;
        if (c > 0xc8) {
            break;
        }
    }
    console['log']((0x5a - mid)['toFixed'](0xa));
}