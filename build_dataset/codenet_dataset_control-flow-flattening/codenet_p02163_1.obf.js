var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var [a, b] = [
    0x0,
    0x1
];
arr['forEach'](v => {
    var NIXPBE = {
        'MdWXi': function (x, y) {
            return x == y;
        }
    };
    var [q, x] = v['split']('\x20')['map'](Number);
    if (NIXPBE['MdWXi'](q, 0x1)) {
        b *= x;
        a *= x;
    } else if (q == 0x2)
        a -= x;
    else if (NIXPBE['MdWXi'](q, 0x3))
        a += x;
});
console['log'](a + '\x20' + b);