var a0_0x3cde51 = a0_0x897d;
var input = require('fs')[a0_0x3cde51(0x0)]('/dev/stdin', a0_0x3cde51(0x1));
function a0_0x56c7() {
    var _0x30186e = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'length',
        'log'
    ];
    a0_0x56c7 = function () {
        return _0x30186e;
    };
    return a0_0x56c7();
}
function a0_0x897d(wtMOMf, key) {
    var stringArray = a0_0x56c7();
    a0_0x897d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x897d(wtMOMf, key);
}
var Arr = input[a0_0x3cde51(0x2)]()[a0_0x3cde51(0x3)]('\x0a');
while (!![]) {
    var arr = Arr['shift']()[a0_0x3cde51(0x3)]('\x20')['map'](Number);
    if (arr[0x0] == 0x0)
        break;
    var sum = 0x0;
    arr = arr['filter'](function (v) {
        if (v > 0xa)
            v = 0xa;
        sum += v;
        return v == 0x1;
    });
    var i = arr[a0_0x3cde51(0x4)];
    while (i != 0x0) {
        if (sum + 0xa <= 0x15)
            sum += 0xa;
        i--;
    }
    console[a0_0x3cde51(0x5)](sum > 0x15 ? 0x0 : sum);
}