var a0_0x4f9720 = a0_0x2664;
function a0_0x1256() {
    var _0x2b6791 = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'shift',
        'log',
        'pow'
    ];
    a0_0x1256 = function () {
        return _0x2b6791;
    };
    return a0_0x1256();
}
inp = require('fs')[a0_0x4f9720(0x0)]('/dev/stdin', a0_0x4f9720(0x1))[a0_0x4f9720(0x2)]()[a0_0x4f9720(0x3)]('\x0a');
H = inp[a0_0x4f9720(0x4)]() * 0x1;
function a0_0x2664(BmqAPZ, key) {
    var stringArray = a0_0x1256();
    a0_0x2664 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2664(BmqAPZ, key);
}
c = 0x1;
h = 0x2;
while (H >= h) {
    h *= 0x2;
    c++;
}
console[a0_0x4f9720(0x5)](Math[a0_0x4f9720(0x6)](0x2, c) - 0x1);