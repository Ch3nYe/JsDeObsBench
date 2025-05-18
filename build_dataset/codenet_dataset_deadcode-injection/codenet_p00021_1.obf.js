function a0_0x28ae(saETxb, key) {
    var stringArray = a0_0x110f();
    a0_0x28ae = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x28ae(saETxb, key);
}
function a0_0x110f() {
    var _0xa094ef = [
        'replace',
        'split',
        'shift',
        'map',
        'log',
        'toFixed',
        'YES',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x110f = function () {
        return _0xa094ef;
    };
    return a0_0x110f();
}
var a0_0x5dbe46 = a0_0x28ae;
(function (input) {
    var _0x556d23 = a0_0x28ae;
    var p = input[_0x556d23(0x0)](/\n$/, '')[_0x556d23(0x1)]('\x0a');
    var n = Number(p[_0x556d23(0x2)]());
    var i = 0x0;
    while (i++ < n) {
        var args = p[_0x556d23(0x2)]()[_0x556d23(0x1)]('\x20')[_0x556d23(0x3)](Number);
        var x1 = args[_0x556d23(0x2)]();
        var y1 = args[_0x556d23(0x2)]();
        var x2 = args[_0x556d23(0x2)]();
        var y2 = args[_0x556d23(0x2)]();
        var x3 = args[_0x556d23(0x2)]();
        var y3 = args['shift']();
        var x4 = args[_0x556d23(0x2)]();
        var y4 = args[_0x556d23(0x2)]();
        console[_0x556d23(0x4)](((y2 - y1) / (x2 - x1))[_0x556d23(0x5)](0x5) === ((y4 - y3) / (x4 - x3))[_0x556d23(0x5)](0x5) ? _0x556d23(0x6) : 'NO');
    }
}(require('fs')[a0_0x5dbe46(0x7)](a0_0x5dbe46(0x8), 'utf8')));