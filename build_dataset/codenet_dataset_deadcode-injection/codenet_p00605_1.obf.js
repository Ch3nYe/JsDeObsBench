function a0_0x40be() {
    var _0x9a5055 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'replace',
        'split',
        'shift',
        '0\x200',
        'map',
        'forEach',
        'every',
        'log'
    ];
    a0_0x40be = function () {
        return _0x9a5055;
    };
    return a0_0x40be();
}
var a0_0x433e72 = a0_0x2bb1;
var input = require('fs')[a0_0x433e72(0x0)](a0_0x433e72(0x1), a0_0x433e72(0x2));
var Arr = input[a0_0x433e72(0x3)](/\n$/, '')[a0_0x433e72(0x4)]('\x0a');
function a0_0x2bb1(UAzktA, key) {
    var stringArray = a0_0x40be();
    a0_0x2bb1 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2bb1(UAzktA, key);
}
while (!![]) {
    var NK = Arr[a0_0x433e72(0x5)]();
    if (NK == a0_0x433e72(0x6))
        break;
    var nk = NK[a0_0x433e72(0x4)]('\x20')[a0_0x433e72(0x7)](Number);
    var S = Arr[a0_0x433e72(0x5)]()[a0_0x433e72(0x4)]('\x20')[a0_0x433e72(0x7)](Number);
    for (var i = 0x0; i < nk[0x0]; i++) {
        var B = Arr[a0_0x433e72(0x5)]()[a0_0x433e72(0x4)]('\x20')[a0_0x433e72(0x7)](Number);
        B[a0_0x433e72(0x8)](function (v, index) {
            S[index] -= v;
        });
    }
    var flag = S[a0_0x433e72(0x9)](function (v) {
        return v >= 0x0;
    });
    console[a0_0x433e72(0xa)](flag ? 'Yes' : 'No');
}