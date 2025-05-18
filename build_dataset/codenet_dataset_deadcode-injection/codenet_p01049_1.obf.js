function a0_0x5522(yegTjG, key) {
    var stringArray = a0_0x2c38();
    a0_0x5522 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5522(yegTjG, key);
}
function a0_0x2c38() {
    var _0x391df3 = [
        'readFileSync',
        'trim',
        'split',
        'shift',
        'map',
        'push'
    ];
    a0_0x2c38 = function () {
        return _0x391df3;
    };
    return a0_0x2c38();
}
var a0_0x1dbb92 = a0_0x5522;
var input = require('fs')[a0_0x1dbb92(0x0)]('/dev/stdin', 'utf8');
var arr = input[a0_0x1dbb92(0x1)]()[a0_0x1dbb92(0x2)]('\x0a');
var n = arr[a0_0x1dbb92(0x3)]() - 0x0;
var [a, d] = arr[a0_0x1dbb92(0x3)]()[a0_0x1dbb92(0x2)]('\x20')[a0_0x1dbb92(0x4)](Number);
var retu = [];
for (var i = 0x0; i < n; i++) {
    retu[a0_0x1dbb92(0x5)](a + i * d);
}
var m = arr[a0_0x1dbb92(0x3)]() - 0x0;
for (var i = 0x0; i < m; i++) {
    var [x, y, z] = arr[a0_0x1dbb92(0x3)]()['split']('\x20')[a0_0x1dbb92(0x4)](Number);
    if (x == 0x0)
        [retu[y - 0x1], retu[z - 0x1]] = [
            retu[z - 0x1],
            retu[y - 0x1]
        ];
    else
        retu[y - 0x1] = retu[z - 0x1];
}
var k = arr['shift']() - 0x0;
console['log'](retu[k - 0x1]);