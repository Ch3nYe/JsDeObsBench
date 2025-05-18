var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
var n = Arr['shift']() - 0x0;
for (var i = 0x0; i < n; i++) {
    var arr = Arr[i]['split']('\x20')['map'](Number);
    var s = arr[0x0];
    var g = arr[0x1];
    var ans = [s];
    var plus = 0x1;
    if (s < g) {
        do {
            s++;
            ans['push'](s);
        } while (s != g);
    } else if (s > g && s <= 0x5) {
        do {
            s--;
            ans['push'](s);
        } while (s != g);
    } else if (s > g && s >= 0x6 && g >= 0x6) {
        do {
            s++;
            if (s == 0xa) {
                s = 0x5;
            }
            ans['push'](s);
        } while (s != g);
    } else if (s > g && s >= 0x6 && g <= 0x5) {
        do {
            s += plus;
            if (s == 0xa) {
                s = 0x5;
                plus = -0x1;
            }
            ;
            ans['push'](s);
        } while (s != g);
    }
    console['log'](ans['join']('\x20'));
}