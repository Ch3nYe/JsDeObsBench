function a0_0x5158(JxBsTu, key) {
    var stringArray = a0_0x5443();
    a0_0x5158 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5158(JxBsTu, key);
}
var a0_0x5144ce = a0_0x5158;
function Main(input) {
    var _0x288893 = a0_0x5158;
    var xs = input[_0x288893(0x0)]()[_0x288893(0x1)]('\x0a')['map'](v => parseInt(v, 0xa));
    var A = 0x0;
    if (xs[0x0] <= xs[0x1]) {
        A = A + xs[0x0];
    } else if (xs[0x0] >= xs[0x1]) {
        A = A + xs[0x1];
    }
    var B = 0x0;
    if (xs[0x2] <= xs[0x3]) {
        B = B + xs[0x2];
    } else if (xs[0x2] >= xs[0x3]) {
        B = B + xs[0x3];
    }
    console[_0x288893(0x2)](A + B);
}
Main(require('fs')[a0_0x5144ce(0x3)](a0_0x5144ce(0x4), 'utf8'));
function a0_0x5443() {
    var _0x1594e1 = [
        'trim',
        'split',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x5443 = function () {
        return _0x1594e1;
    };
    return a0_0x5443();
}