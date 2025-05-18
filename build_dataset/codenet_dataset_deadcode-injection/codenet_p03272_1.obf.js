var a0_0x2256a1 = a0_0x1ae1;
function a0_0x1ae1(pUrXJQ, key) {
    var stringArray = a0_0x5142();
    a0_0x1ae1 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1ae1(pUrXJQ, key);
}
function a0_0x5142() {
    var _0x7e271a = [
        'readFileSync',
        'utf8'
    ];
    a0_0x5142 = function () {
        return _0x7e271a;
    };
    return a0_0x5142();
}
a = require('fs')[a0_0x2256a1(0x0)]('/dev/stdin', a0_0x2256a1(0x1))['match'](/\d+/g);
console['log'](a[0x0] - a[0x1] + 0x1);