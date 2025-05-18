var a0_0x57ad83 = a0_0xc920;
function a0_0x199d() {
    var _0x1e89a7 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'sqrt',
        'perfect\x20number',
        'abundant\x20number'
    ];
    a0_0x199d = function () {
        return _0x1e89a7;
    };
    return a0_0x199d();
}
var input = require('fs')[a0_0x57ad83(0x0)](a0_0x57ad83(0x1), a0_0x57ad83(0x2));
var arr = input[a0_0x57ad83(0x3)]()[a0_0x57ad83(0x4)]('\x0a');
function a0_0xc920(SWhhbx, key) {
    var stringArray = a0_0x199d();
    a0_0xc920 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xc920(SWhhbx, key);
}
while (!![]) {
    var n = arr[a0_0x57ad83(0x5)]() - 0x0;
    if (n == 0x0)
        break;
    var sum = n != 0x1 ? 0x1 : 0x0;
    var sqrt = Math[a0_0x57ad83(0x6)](n);
    for (var i = 0x2; i < sqrt; i++) {
        if (n % i == 0x0)
            sum += i + n / i;
    }
    if (n % sqrt == 0x0 && sqrt != 0x1)
        sum += sqrt;
    var ans;
    if (n == sum)
        ans = a0_0x57ad83(0x7);
    else if (n > sum)
        ans = 'deficient\x20number';
    else if (n < sum)
        ans = a0_0x57ad83(0x8);
    console['log'](ans);
}