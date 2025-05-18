var a0_0x761afa = a0_0x1a52;
var input = require('fs')[a0_0x761afa(0x0)](a0_0x761afa(0x1), a0_0x761afa(0x2));
function a0_0x1a52(BzUmjd, key) {
    var stringArray = a0_0x2aea();
    a0_0x1a52 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1a52(BzUmjd, key);
}
var lines = input[a0_0x761afa(0x3)]()[a0_0x761afa(0x4)]('\x0a');
function a0_0x2aea() {
    var _0x571e3b = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'forEach',
        'log'
    ];
    a0_0x2aea = function () {
        return _0x571e3b;
    };
    return a0_0x2aea();
}
var ret = lines['filter'](function (line) {
    var _0x819984 = a0_0x1a52;
    var items = line[_0x819984(0x4)](',');
    var w = +items[0x1];
    var h = +items[0x2];
    return w / (h * h) >= 0x19;
});
ret[a0_0x761afa(0x5)](function (line) {
    var _0x3885b2 = a0_0x1a52;
    console[_0x3885b2(0x6)](line['split'](',')[0x0]);
});