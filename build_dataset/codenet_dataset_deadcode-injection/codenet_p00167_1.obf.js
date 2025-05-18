var a0_0x49ea72 = a0_0x5213;
var input = require('fs')[a0_0x49ea72(0x0)]('/dev/stdin', 'utf8');
function a0_0x5213(vhuDXP, key) {
    var stringArray = a0_0x40a9();
    a0_0x5213 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5213(vhuDXP, key);
}
var Arr = input[a0_0x49ea72(0x1)](/\n$/, '')[a0_0x49ea72(0x2)]('\x0a');
while (!![]) {
    var n = Arr[a0_0x49ea72(0x3)]() - 0x0;
    if (n == 0x0)
        break;
    var arr = [];
    for (var i = 0x0; i < n; i++) {
        var x = Arr[a0_0x49ea72(0x3)]() - 0x0;
        arr[a0_0x49ea72(0x4)](x);
    }
    var L = 0x1;
    var cnt = 0x0;
    while (!![]) {
        if (arr['length'] == L)
            break;
        for (var i = 0x0; i < arr[a0_0x49ea72(0x5)] - L; i++) {
            var memo = arr[i];
            if (arr[i] > arr[i + 0x1]) {
                cnt++;
                arr[i] = arr[i + 0x1];
                arr[i + 0x1] = memo;
            }
        }
        L++;
    }
    console[a0_0x49ea72(0x6)](cnt);
}
function a0_0x40a9() {
    var _0x3b4782 = [
        'readFileSync',
        'replace',
        'split',
        'shift',
        'push',
        'length',
        'log'
    ];
    a0_0x40a9 = function () {
        return _0x3b4782;
    };
    return a0_0x40a9();
}