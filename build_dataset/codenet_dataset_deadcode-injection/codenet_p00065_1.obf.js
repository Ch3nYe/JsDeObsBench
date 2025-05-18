var a0_0x4ad7bb = a0_0x5868;
var input = require('fs')[a0_0x4ad7bb(0x0)](a0_0x4ad7bb(0x1), 'utf8');
var lines = input[a0_0x4ad7bb(0x2)]()[a0_0x4ad7bb(0x3)]('\x0a');
var lm = [];
function a0_0x5868(YRwxQR, key) {
    var stringArray = a0_0x5d3c();
    a0_0x5868 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5868(YRwxQR, key);
}
var line;
while (line = lines[a0_0x4ad7bb(0x4)]()) {
    lm[a0_0x4ad7bb(0x5)](line[a0_0x4ad7bb(0x3)](',')[0x0]);
}
var tm = [];
while (line = lines[a0_0x4ad7bb(0x4)]()) {
    tm[a0_0x4ad7bb(0x5)](line[a0_0x4ad7bb(0x3)](',')[0x0]);
}
lm['sort'](function (a, b) {
    return a - b;
});
function a0_0x5d3c() {
    var _0x411f54 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        'shift',
        'push',
        'filter',
        'length'
    ];
    a0_0x5d3c = function () {
        return _0x411f54;
    };
    return a0_0x5d3c();
}
lm['forEach'](function (c) {
    var _0x161703 = a0_0x5868;
    var cnt = tm[_0x161703(0x6)](function (n) {
        return n == c;
    })['length'];
    if (cnt > 0x0) {
        var tcnt = lm['filter'](function (n) {
            return n == c;
        })[_0x161703(0x7)];
        console['log'](c, cnt + tcnt);
    }
});