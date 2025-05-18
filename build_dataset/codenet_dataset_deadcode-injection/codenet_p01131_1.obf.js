function a0_0xa422() {
    var _0x5e61d4 = [
        '/dev/stdin',
        'utf8',
        '.,!?\x20',
        'abc',
        'def',
        'ghi',
        'mno',
        'pqrs',
        'tuv',
        'split',
        'forEach',
        'length',
        'log'
    ];
    a0_0xa422 = function () {
        return _0x5e61d4;
    };
    return a0_0xa422();
}
var a0_0x496402 = a0_0x1ffe;
function a0_0x1ffe(JfITQZ, key) {
    var stringArray = a0_0xa422();
    a0_0x1ffe = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1ffe(JfITQZ, key);
}
var input = require('fs')['readFileSync'](a0_0x496402(0x0), a0_0x496402(0x1));
var Arr = input['trim']()['split']('\x0a');
var AL = Arr['shift']();
var abc = [
    '',
    a0_0x496402(0x2),
    a0_0x496402(0x3),
    a0_0x496402(0x4),
    a0_0x496402(0x5),
    'jkl',
    a0_0x496402(0x6),
    a0_0x496402(0x7),
    a0_0x496402(0x8),
    'wxyz'
];
abc = abc['map'](function (v) {
    var _0x79a823 = a0_0x1ffe;
    return v[_0x79a823(0x9)]('');
});
for (var i = 0x0; i < AL; i++) {
    var arr = Arr[i]['split']('')['map'](Number);
    var str = '';
    var a = '';
    var n = -0x1;
    arr[a0_0x496402(0xa)](function (v) {
        var _0xbfcb37 = a0_0x1ffe;
        if (v > 0x0) {
            n++;
            a = abc[v][n % abc[v][_0xbfcb37(0xb)]];
        } else {
            str += a;
            n = -0x1;
            a = '';
        }
    });
    console[a0_0x496402(0xc)](str);
}