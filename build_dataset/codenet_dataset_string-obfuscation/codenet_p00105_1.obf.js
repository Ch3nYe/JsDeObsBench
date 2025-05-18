var a0_0x70d5cf = a0_0x2fa1;
(function (stringArrayFunction, comparisonValue) {
    var _0x143376 = a0_0x2fa1;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x143376(0x12e)) / 0x1 + parseInt(_0x143376(0x124)) / 0x2 + -parseInt(_0x143376(0x128)) / 0x3 * (-parseInt(_0x143376(0x121)) / 0x4) + -parseInt(_0x143376(0x122)) / 0x5 + -parseInt(_0x143376(0x131)) / 0x6 + -parseInt(_0x143376(0x123)) / 0x7 * (-parseInt(_0x143376(0x12c)) / 0x8) + parseInt(_0x143376(0x12d)) / 0x9 * (-parseInt(_0x143376(0x12f)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x17a9, 0x26427));
var d = require('fs')[a0_0x70d5cf(0x12a)]('/dev/stdin', a0_0x70d5cf(0x12b))[a0_0x70d5cf(0x125)]()['split']('\x0a');
function a0_0x17a9() {
    var _0x589e09 = [
        'trim',
        'log',
        'join',
        '27921BSflel',
        'push',
        'readFileSync',
        'utf8',
        '2608JNnKmx',
        '4039047OjchMm',
        '145625xDQJRg',
        '10TIvnXm',
        'split',
        '251424Nxfyzr',
        '28LkpHLv',
        '733775cGhEOO',
        '6524YjuWXV',
        '559094TMUfiE'
    ];
    a0_0x17a9 = function () {
        return _0x589e09;
    };
    return a0_0x17a9();
}
var info = line = '';
var map = [];
while (line = d['shift']()) {
    info = line[a0_0x70d5cf(0x130)]('\x20');
    map[a0_0x70d5cf(0x129)]([
        info[0x0],
        +info[0x1]
    ]);
}
map['sort'](function (a, b) {
    if (a[0x0] < b[0x0])
        return -0x1;
    if (a[0x0] > b[0x0])
        return 0x1;
    if (a[0x1] < b[0x1])
        return -0x1;
    if (a[0x1] > b[0x1])
        return 0x1;
    return 0x0;
});
var word = '';
function a0_0x2fa1(ZrStPp, key) {
    var stringArray = a0_0x17a9();
    a0_0x2fa1 = function (index, key) {
        index = index - 0x121;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2fa1(ZrStPp, key);
}
var pages = [];
map['forEach'](function (info, i) {
    var _0x289b8e = a0_0x70d5cf;
    if (word !== info[0x0]) {
        if (i !== 0x0) {
            console[_0x289b8e(0x126)](pages[_0x289b8e(0x127)]('\x20'));
            pages = [];
        }
        console[_0x289b8e(0x126)](info[0x0]);
    }
    pages[_0x289b8e(0x129)](info[0x1]);
    word = info[0x0];
});
console[a0_0x70d5cf(0x126)](pages[a0_0x70d5cf(0x127)]('\x20'));