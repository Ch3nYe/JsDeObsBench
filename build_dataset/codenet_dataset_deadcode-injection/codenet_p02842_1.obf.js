function a0_0x5122(ZNLoRP, key) {
    var stringArray = a0_0x1960();
    a0_0x5122 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5122(ZNLoRP, key);
}
var a0_0x4081db = a0_0x5122;
function Main(input) {
    var _0xd073fd = a0_0x5122;
    var tax = 1.08;
    var invalid = ':(';
    var input = input['split']('\x0a');
    var n = parseInt(input[0x0], 0xa);
    var x = Math[_0xd073fd(0x0)](n / tax);
    var reverse_n = Math[_0xd073fd(0x0)](x * tax);
    if (n == reverse_n) {
        if (_0xd073fd(0x1) !== _0xd073fd(0x2)) {
            console['log'](x);
            return;
        } else {
            console[_0xd073fd(0x3)](x);
            return;
        }
    }
    var x_u = x + 0x1;
    if (Math[_0xd073fd(0x0)](x_u * tax) == n) {
        console[_0xd073fd(0x3)](x_u);
        return;
    }
    var x_u2 = x + 0x2;
    if (Math[_0xd073fd(0x0)](x_u2 * tax) == n) {
        console[_0xd073fd(0x3)](x_u2);
        return;
    }
    var x_d = x - 0x1;
    if (Math['floor'](x_d * tax) == n) {
        console['log'](x_d);
        return;
    }
    var x_d = x - 0x2;
    if (Math['floor'](x_d * tax) == n) {
        if ('aQUnJ' !== _0xd073fd(0x4)) {
            console['log'](x_d);
            return;
        } else {
            console['log'](x_d);
            return;
        }
    }
    console[_0xd073fd(0x3)](invalid);
}
Main(require('fs')[a0_0x4081db(0x5)](a0_0x4081db(0x6), a0_0x4081db(0x7)));
function a0_0x1960() {
    var _0x75a840 = [
        'floor',
        'SVvHq',
        'FPoky',
        'log',
        'gqSre',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1960 = function () {
        return _0x75a840;
    };
    return a0_0x1960();
}