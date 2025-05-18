function a0_0x4c9e(WViWtG, key) {
    var stringArray = a0_0x4a30();
    a0_0x4c9e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4c9e(WViWtG, key);
}
function a0_0x4a30() {
    var _0x1f644c = [
        'split',
        'map',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4a30 = function () {
        return _0x1f644c;
    };
    return a0_0x4a30();
}
var a0_0x43e055 = a0_0x4c9e;
function Main(input) {
    var _0x1897bd = a0_0x4c9e;
    input = input[_0x1897bd(0x0)]('\x0a');
    n = Number(input[0x0][_0x1897bd(0x0)]('\x20'));
    V = input[0x1][_0x1897bd(0x0)]('\x20')[_0x1897bd(0x1)](Number);
    C = input[0x2][_0x1897bd(0x0)]('\x20')['map'](Number);
    var Y = 0x0;
    for (var i = 0x0; i < n; i++) {
        y = V[i] - C[i];
        if (y >= 0x0) {
            Y = Y + y;
        }
    }
    console['log'](Y);
}
Main(require('fs')[a0_0x43e055(0x2)](a0_0x43e055(0x3), a0_0x43e055(0x4)));