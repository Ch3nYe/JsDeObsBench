function a0_0x4f89(WkGwZU, key) {
    var stringArray = a0_0x301d();
    a0_0x4f89 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4f89(WkGwZU, key);
}
var a0_0x3817dc = a0_0x4f89;
function a0_0x301d() {
    var _0x5bf0c5 = [
        'trim',
        'split',
        'map',
        'shift',
        'sort',
        'length',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x301d = function () {
        return _0x5bf0c5;
    };
    return a0_0x301d();
}
function Main(input) {
    var _0x5c7d38 = a0_0x4f89;
    input = input[_0x5c7d38(0x0)]()[_0x5c7d38(0x1)]('\x0a')[_0x5c7d38(0x2)](input => Number(input));
    var len = input[0x0];
    input[_0x5c7d38(0x3)]();
    input[_0x5c7d38(0x4)](function (a, b) {
        return a - b;
    });
    var sum = 0x0;
    for (var i = 0x0; i < input[_0x5c7d38(0x5)]; i++) {
        sum += input[i];
    }
    var count = 0x0;
    while (sum % 0xa == 0x0 && sum != 0x0) {
        sum -= input[count];
        count++;
    }
    console[_0x5c7d38(0x6)](sum);
}
Main(require('fs')[a0_0x3817dc(0x7)](a0_0x3817dc(0x8), a0_0x3817dc(0x9)));