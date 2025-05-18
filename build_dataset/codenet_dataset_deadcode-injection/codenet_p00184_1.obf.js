function a0_0x390e() {
    var _0x4666a4 = [
        'readFileSync',
        'trim',
        'split',
        'map',
        'length',
        'forEach',
        'log'
    ];
    a0_0x390e = function () {
        return _0x4666a4;
    };
    return a0_0x390e();
}
var a0_0x3283b6 = a0_0x3fe2;
var input = require('fs')[a0_0x3283b6(0x0)]('/dev/stdin', 'utf8');
var Arr = input[a0_0x3283b6(0x1)]()[a0_0x3283b6(0x2)]('\x0a')[a0_0x3283b6(0x3)](Number);
var n = 0x0;
var arr = [
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0
];
function a0_0x3fe2(ECETpn, key) {
    var stringArray = a0_0x390e();
    a0_0x3fe2 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3fe2(ECETpn, key);
}
for (var i = 0x0; i < Arr[a0_0x3283b6(0x4)]; i++) {
    if (n == 0x0) {
        if (i != 0x0)
            arr[a0_0x3283b6(0x5)](function (v) {
                var _0x4da815 = a0_0x3fe2;
                console[_0x4da815(0x6)](v);
            });
        if (Arr[i] == 0x0)
            break;
        n = Arr[i];
        arr = [
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0
        ];
    } else {
        n--;
        if (Arr[i] >= 0x3c)
            arr[0x6]++;
        else if (Arr[i] >= 0x32)
            arr[0x5]++;
        else if (Arr[i] >= 0x28)
            arr[0x4]++;
        else if (Arr[i] >= 0x1e)
            arr[0x3]++;
        else if (Arr[i] >= 0x14)
            arr[0x2]++;
        else if (Arr[i] >= 0xa)
            arr[0x1]++;
        else
            arr[0x0]++;
    }
}