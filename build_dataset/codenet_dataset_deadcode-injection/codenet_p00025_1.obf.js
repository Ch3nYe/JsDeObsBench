var a0_0xdc128c = a0_0x47f2;
var input = require('fs')[a0_0xdc128c(0x0)]('/dev/stdin', a0_0xdc128c(0x1));
var lines = input[a0_0xdc128c(0x2)]('\x0a');
function a0_0xe3d1() {
    var _0x2b0573 = [
        'readFileSync',
        'utf8',
        'split',
        'shift',
        'map',
        'indexOf',
        'log'
    ];
    a0_0xe3d1 = function () {
        return _0x2b0573;
    };
    return a0_0xe3d1();
}
function a0_0x47f2(sGESmm, key) {
    var stringArray = a0_0xe3d1();
    a0_0x47f2 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x47f2(sGESmm, key);
}
var imagine;
while (imagine = lines[a0_0xdc128c(0x3)]()) {
    var guess = lines[a0_0xdc128c(0x3)]();
    var a = imagine[a0_0xdc128c(0x2)]('\x20')[a0_0xdc128c(0x4)](function (n) {
        return +n;
    });
    var b = guess[a0_0xdc128c(0x2)]('\x20')['map'](function (n) {
        return +n;
    });
    var hit = 0x0;
    for (var i = 0x0; i < 0x4; i++) {
        if (a[i] == b[i]) {
            hit++;
        }
    }
    var blow = 0x0;
    for (var i = 0x0; i < 0x4; i++) {
        if (a[a0_0xdc128c(0x5)](b[i]) >= 0x0) {
            blow++;
        }
    }
    blow -= hit;
    console[a0_0xdc128c(0x6)](hit + '\x20' + blow);
}