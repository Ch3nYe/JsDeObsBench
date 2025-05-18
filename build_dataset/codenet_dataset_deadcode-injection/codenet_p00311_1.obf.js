var a0_0x51b8cf = a0_0x15fa;
var input = require('fs')[a0_0x51b8cf(0x0)]('/dev/stdin', a0_0x51b8cf(0x1));
var arr = input['trim']()[a0_0x51b8cf(0x2)]('\x0a');
var [h1, h2] = arr['shift']()[a0_0x51b8cf(0x2)]('\x20')[a0_0x51b8cf(0x3)](Number);
function a0_0x15fa(IuxXez, key) {
    var stringArray = a0_0xbcc0();
    a0_0x15fa = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x15fa(IuxXez, key);
}
var [k1, k2] = arr['shift']()[a0_0x51b8cf(0x2)]('\x20')['map'](Number);
function a0_0xbcc0() {
    var _0x5f2142 = [
        'readFileSync',
        'utf8',
        'split',
        'map',
        'shift',
        'floor',
        'even',
        'log',
        'hiroshi',
        'kenjiro'
    ];
    a0_0xbcc0 = function () {
        return _0x5f2142;
    };
    return a0_0xbcc0();
}
var [a, b, c, d] = arr[a0_0x51b8cf(0x4)]()[a0_0x51b8cf(0x2)]('\x20')['map'](Number);
var h = h1 * a + h2 * b + Math[a0_0x51b8cf(0x5)](h1 / 0xa) * c + Math[a0_0x51b8cf(0x5)](h2 / 0x14) * d;
var k = k1 * a + k2 * b + Math[a0_0x51b8cf(0x5)](k1 / 0xa) * c + Math['floor'](k2 / 0x14) * d;
if (h == k)
    console['log'](a0_0x51b8cf(0x6));
else if (h > k)
    console[a0_0x51b8cf(0x7)](a0_0x51b8cf(0x8));
else
    console[a0_0x51b8cf(0x7)](a0_0x51b8cf(0x9));