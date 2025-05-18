var a0_0x1e7137 = a0_0x4ba7;
var ab = [];
for (var i = 0x0; i <= 0x3e8; i++) {
    for (var j = 0x0; j <= 0x3e8; j++) {
        ab['push'](i + j);
    }
}
ab[a0_0x1e7137(0x0)](function (a, b) {
    return a - b;
});
function a0_0x4ba7(GYYeoE, key) {
    var stringArray = a0_0x2da8();
    a0_0x4ba7 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4ba7(GYYeoE, key);
}
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x1e7137(0x1));
var Arr = input['trim']()[a0_0x1e7137(0x2)]('\x0a');
function a0_0x2da8() {
    var _0xa78c9e = [
        'sort',
        'utf8',
        'split',
        'length',
        'log'
    ];
    a0_0x2da8 = function () {
        return _0xa78c9e;
    };
    return a0_0x2da8();
}
while (!![]) {
    if (Arr[a0_0x1e7137(0x3)] == 0x0)
        break;
    var n = Arr['shift']() - 0x0;
    var cnt = 0x0;
    var k = ab[a0_0x1e7137(0x3)] - 0x1;
    for (var i = 0x0; i < ab['length']; i++) {
        while (ab[i] + ab[k] > n)
            k--;
        var memo = k;
        while (ab[i] + ab[memo] == n) {
            cnt++;
            memo--;
        }
    }
    console[a0_0x1e7137(0x4)](cnt);
}