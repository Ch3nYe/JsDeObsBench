var a0_0x466d73 = a0_0x37a3;
function a0_0x4b4d() {
    var _0x5cd614 = [
        'readFileSync',
        'split',
        'map',
        'log'
    ];
    a0_0x4b4d = function () {
        return _0x5cd614;
    };
    return a0_0x4b4d();
}
var abc = require('fs')[a0_0x466d73(0x0)]('/dev/stdin', 'utf8')[a0_0x466d73(0x1)]('\x20')[a0_0x466d73(0x2)](Number);
function a0_0x37a3(LmXmbJ, key) {
    var stringArray = a0_0x4b4d();
    a0_0x37a3 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x37a3(LmXmbJ, key);
}
var a = abc[0x0];
var b = abc[0x1];
var c = abc[0x2];
var i;
var result = 0x0;
for (i = a; i <= b; i++) {
    if (c % i === 0x0) {
        result++;
    }
}
console[a0_0x466d73(0x3)](result);