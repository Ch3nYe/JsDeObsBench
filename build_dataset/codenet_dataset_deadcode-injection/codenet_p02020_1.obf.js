function a0_0x41bc(ATRXjC, key) {
    var stringArray = a0_0x12d4();
    a0_0x41bc = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x41bc(ATRXjC, key);
}
var a0_0x15732a = a0_0x41bc;
var input = require('fs')['readFileSync'](a0_0x15732a(0x0), 'utf8');
var [n, arr] = input[a0_0x15732a(0x1)]()[a0_0x15732a(0x2)]('\x0a');
arr = arr[a0_0x15732a(0x2)]('\x20')[a0_0x15732a(0x3)](Number);
arr[a0_0x15732a(0x4)](function (a, b) {
    return a - b;
});
function a0_0x12d4() {
    var _0x2285a1 = [
        '/dev/stdin',
        'trim',
        'split',
        'map',
        'sort',
        'log'
    ];
    a0_0x12d4 = function () {
        return _0x2285a1;
    };
    return a0_0x12d4();
}
var sum = arr['reduce'](function (a, b) {
    return a + b;
});
if (sum % 0x2 == 0x0)
    console[a0_0x15732a(0x5)](sum / 0x2);
else {
    for (var i = 0x0; i < arr['length']; i++) {
        if (arr[i] % 0x2 == 0x1) {
            console[a0_0x15732a(0x5)]((sum - arr[i]) / 0x2);
            break;
        }
    }
}