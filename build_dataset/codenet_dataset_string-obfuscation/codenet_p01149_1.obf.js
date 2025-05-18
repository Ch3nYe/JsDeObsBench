function a0_0x632c() {
    var _0x23db71 = [
        '7237800BOKjPE',
        'length',
        'split',
        '3113905QCREqO',
        '7WECPmd',
        'readFileSync',
        'replace',
        '4LVHXiA',
        '/dev/stdin',
        '10TYORlU',
        '1211634EwpLIu',
        'log',
        '567844CRrkrV',
        'bust',
        '10333449ODFcph',
        '1476972ChTlOj',
        'blackjack',
        'shift',
        'trim',
        '335934eFbMgB'
    ];
    a0_0x632c = function () {
        return _0x23db71;
    };
    return a0_0x632c();
}
var a0_0x26ee95 = a0_0x51d1;
(function (stringArrayFunction, comparisonValue) {
    var _0x2e9e3c = a0_0x51d1;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x2e9e3c(0x98)) / 0x1 + -parseInt(_0x2e9e3c(0xa5)) / 0x2 + parseInt(_0x2e9e3c(0xa8)) / 0x3 + parseInt(_0x2e9e3c(0xa0)) / 0x4 * (parseInt(_0x2e9e3c(0x9c)) / 0x5) + parseInt(_0x2e9e3c(0xa3)) / 0x6 * (parseInt(_0x2e9e3c(0x9d)) / 0x7) + parseInt(_0x2e9e3c(0x99)) / 0x8 + parseInt(_0x2e9e3c(0xa7)) / 0x9 * (-parseInt(_0x2e9e3c(0xa2)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x632c, 0x6ec78));
var input = require('fs')[a0_0x26ee95(0x9e)](a0_0x26ee95(0xa1), 'utf8');
input = input[a0_0x26ee95(0x9f)](/T|J|Q|K/g, '10');
input = input[a0_0x26ee95(0x9f)](/A/g, '11');
var arr = input[a0_0x26ee95(0xab)]()[a0_0x26ee95(0x9b)]('\x0a');
var n = arr[a0_0x26ee95(0xaa)]() - 0x0;
function a0_0x51d1(AHhbnw, key) {
    var stringArray = a0_0x632c();
    a0_0x51d1 = function (index, key) {
        index = index - 0x98;
        var value = stringArray[index];
        return value;
    };
    return a0_0x51d1(AHhbnw, key);
}
while (n--) {
    var a = arr['shift']()[a0_0x26ee95(0x9b)]('\x20')['map'](Number);
    var b = arr[a0_0x26ee95(0xaa)]()[a0_0x26ee95(0x9b)]('\x20')['map'](Number);
    var flag = ![];
    var sum = a[0x0] + a[0x1];
    if (a[0x0] == 0xb || a[0x1] == 0xb)
        flag = !![];
    if (sum == 0x15) {
        console[a0_0x26ee95(0xa4)](a0_0x26ee95(0xa9));
        continue;
    }
    var ans = '';
    for (var i = 0x0; i < b[a0_0x26ee95(0x9a)]; i++) {
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
        sum = a0_0x26ee95(0xa6);
    console[a0_0x26ee95(0xa4)](sum);
}