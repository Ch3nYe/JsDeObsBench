var a0_0x52eb53 = a0_0x3c44;
var input = require('fs')[a0_0x52eb53(0x0)]('/dev/stdin', a0_0x52eb53(0x1));
function a0_0x3c44(fBtCDH, key) {
    var stringArray = a0_0x2208();
    a0_0x3c44 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3c44(fBtCDH, key);
}
input = input[a0_0x52eb53(0x2)](/T|J|Q|K/g, '10');
input = input['replace'](/A/g, '11');
var arr = input['trim']()['split']('\x0a');
var n = arr[a0_0x52eb53(0x3)]() - 0x0;
while (n--) {
    var a = arr['shift']()[a0_0x52eb53(0x4)]('\x20')[a0_0x52eb53(0x5)](Number);
    var b = arr['shift']()[a0_0x52eb53(0x4)]('\x20')['map'](Number);
    var flag = ![];
    var sum = a[0x0] + a[0x1];
    if (a[0x0] == 0xb || a[0x1] == 0xb)
        flag = !![];
    if (sum == 0x15) {
        console[a0_0x52eb53(0x6)](a0_0x52eb53(0x7));
        continue;
    }
    var ans = '';
    for (var i = 0x0; i < b[a0_0x52eb53(0x8)]; i++) {
        if (sum <= 0x10) {
            if (b[i] == 0xb)
                flag = !![];
            if (b[i] == 0xb && sum + 0xb > 0x15)
                b[i] = 0x1;
            sum += b[i];
        } else if (sum == 0x11 && flag) {
            if (b[i] == 0xb)
                flag = !![];
            if (b[i] == 0xb && sum + 0xb > 0x15)
                b[i] = 0x1;
            sum += b[i];
        } else {
            break;
        }
    }
    if (sum > 0x15)
        sum = a0_0x52eb53(0x9);
    console[a0_0x52eb53(0x6)](sum);
}
function a0_0x2208() {
    var _0x1d029b = [
        'readFileSync',
        'utf8',
        'replace',
        'shift',
        'split',
        'map',
        'log',
        'blackjack',
        'length',
        'bust'
    ];
    a0_0x2208 = function () {
        return _0x1d029b;
    };
    return a0_0x2208();
}