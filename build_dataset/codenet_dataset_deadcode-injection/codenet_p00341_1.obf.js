function a0_0x4453(ftucGi, key) {
    var stringArray = a0_0x5851();
    a0_0x4453 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4453(ftucGi, key);
}
var a0_0x5c67cf = a0_0x4453;
var input = require('fs')[a0_0x5c67cf(0x0)](a0_0x5c67cf(0x1), a0_0x5c67cf(0x2));
var arr = input['trim']()['split']('\x20')[a0_0x5c67cf(0x3)](Number);
arr[a0_0x5c67cf(0x4)](function (a, b) {
    return a - b;
});
var sum = 0x0;
function a0_0x5851() {
    var _0x55260a = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'map',
        'sort',
        'yes'
    ];
    a0_0x5851 = function () {
        return _0x55260a;
    };
    return a0_0x5851();
}
if (arr[0x0] == arr[0x1] && arr[0x1] == arr[0x2] && arr[0x2] == arr[0x3])
    sum++;
if (arr[0x0 + 0x4] == arr[0x1 + 0x4] && arr[0x1 + 0x4] == arr[0x2 + 0x4] && arr[0x2 + 0x4] == arr[0x3 + 0x4])
    sum++;
if (arr[0x0 + 0x8] == arr[0x1 + 0x8] && arr[0x1 + 0x8] == arr[0x2 + 0x8] && arr[0x2 + 0x8] == arr[0x3 + 0x8])
    sum++;
console['log'](sum == 0x3 ? a0_0x5c67cf(0x5) : 'no');