var a0_0x5d09ad = a0_0x17af;
var input = require('fs')[a0_0x5d09ad(0x0)]('/dev/stdin', a0_0x5d09ad(0x1));
var lines = input[a0_0x5d09ad(0x2)]('\x0a');
const parse = (s, sep) => {
    var _0x33b026 = a0_0x17af;
    return s[_0x33b026(0x2)](sep)[_0x33b026(0x3)](v => parseInt(v));
};
const split = (s, sep, result, keys) => {
    var _0x46bc0e = a0_0x17af;
    var arr = parse(s, sep);
    for (var i = 0x0; i < arr[_0x46bc0e(0x4)]; i++) {
        result[keys[i]] = arr[i];
    }
};
function a0_0x17af(ywAgLR, key) {
    var stringArray = a0_0x2442();
    a0_0x17af = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x17af(ywAgLR, key);
}
var inp = {};
split(lines[0x0], '\x20', inp, [
    'x',
    'y',
    'a',
    'b',
    'c'
]);
var p = parse(lines[0x1], '\x20')[a0_0x5d09ad(0x5)]((a, b) => b - a);
var q = parse(lines[0x2], '\x20')[a0_0x5d09ad(0x5)]((a, b) => b - a);
var r = parse(lines[0x3], '\x20')[a0_0x5d09ad(0x5)]((a, b) => b - a);
function a0_0x2442() {
    var _0xf87fb3 = [
        'readFileSync',
        'utf8',
        'split',
        'map',
        'length',
        'sort',
        'slice',
        'reduce'
    ];
    a0_0x2442 = function () {
        return _0xf87fb3;
    };
    return a0_0x2442();
}
p = p[a0_0x5d09ad(0x6)](0x0, inp['x']);
q = q[a0_0x5d09ad(0x6)](0x0, inp['y']);
console['log'](p['concat'](q, r)[a0_0x5d09ad(0x5)]((a, b) => b - a)['slice'](0x0, inp['x'] + inp['y'])[a0_0x5d09ad(0x7)]((a, b) => a + b, 0x0));