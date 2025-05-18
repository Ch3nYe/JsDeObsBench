var a0_0x5ea936 = a0_0x16ef;
function a0_0x454b() {
    var _0x567ad0 = [
        'readFileSync',
        '/dev/stdin',
        'replace',
        'split',
        'shift',
        'map',
        'push',
        'log',
        'join'
    ];
    a0_0x454b = function () {
        return _0x567ad0;
    };
    return a0_0x454b();
}
var input = require('fs')[a0_0x5ea936(0x0)](a0_0x5ea936(0x1), 'utf8');
var Arr = input[a0_0x5ea936(0x2)](/\n$/, '')[a0_0x5ea936(0x3)]('\x0a');
var n = Arr[a0_0x5ea936(0x4)]() - 0x0;
function a0_0x16ef(tMlSQy, key) {
    var stringArray = a0_0x454b();
    a0_0x16ef = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x16ef(tMlSQy, key);
}
for (var i = 0x0; i < n; i++) {
    var arr = Arr[i]['split']('\x20')[a0_0x5ea936(0x5)](Number);
    var s = arr[0x0];
    var g = arr[0x1];
    var ans = [s];
    var plus = 0x1;
    if (s < g) {
        do {
            s++;
            ans[a0_0x5ea936(0x6)](s);
        } while (s != g);
    } else if (s > g && s <= 0x5) {
        do {
            s--;
            ans[a0_0x5ea936(0x6)](s);
        } while (s != g);
    } else if (s > g && s >= 0x6 && g >= 0x6) {
        do {
            s++;
            if (s == 0xa) {
                s = 0x5;
            }
            ans[a0_0x5ea936(0x6)](s);
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
    console[a0_0x5ea936(0x7)](ans[a0_0x5ea936(0x8)]('\x20'));
}