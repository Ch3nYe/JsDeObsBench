'use strict';
var a0_0x13465d = a0_0x320a;
function a0_0x320a(vtqDWR, key) {
    var stringArray = a0_0x285f();
    a0_0x320a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x320a(vtqDWR, key);
}
function a0_0x285f() {
    var _0x14ac65 = [
        'trim',
        'replace',
        'split',
        'length',
        'log',
        'min',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x285f = function () {
        return _0x14ac65;
    };
    return a0_0x285f();
}
function Main(input) {
    var _0x381cec = a0_0x320a;
    input = input[_0x381cec(0x0)]();
    input = input[_0x381cec(0x1)](/\s+/, '')[_0x381cec(0x2)]('');
    var height = input[_0x381cec(0x3)];
    var one = 0x0;
    var zero = 0x0;
    while (input[_0x381cec(0x3)]) {
        if (input['pop']() === '0')
            zero++;
        else
            one++;
    }
    console[_0x381cec(0x4)](Math[_0x381cec(0x5)](zero, one) * 0x2);
}
Main(require('fs')['readFileSync'](a0_0x13465d(0x6), a0_0x13465d(0x7)));