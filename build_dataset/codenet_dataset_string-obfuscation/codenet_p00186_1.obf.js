var a0_0x24c5db = a0_0x1e30;
(function (stringArrayFunction, comparisonValue) {
    var _0x4d93d2 = a0_0x1e30;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4d93d2(0xee)) / 0x1 + -parseInt(_0x4d93d2(0xef)) / 0x2 + parseInt(_0x4d93d2(0xf1)) / 0x3 + -parseInt(_0x4d93d2(0xf3)) / 0x4 + -parseInt(_0x4d93d2(0xed)) / 0x5 + parseInt(_0x4d93d2(0xf9)) / 0x6 * (-parseInt(_0x4d93d2(0xeb)) / 0x7) + parseInt(_0x4d93d2(0xf4)) / 0x8 * (parseInt(_0x4d93d2(0xf2)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1c6e, 0xedec1));
var input = require('fs')[a0_0x24c5db(0xf8)](a0_0x24c5db(0xf6), a0_0x24c5db(0xf7));
var Arr = input[a0_0x24c5db(0xf5)](/\n$/, '')['split']('\x0a');
function a0_0x1e30(nChumI, key) {
    var stringArray = a0_0x1c6e();
    a0_0x1e30 = function (index, key) {
        index = index - 0xeb;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1e30(nChumI, key);
}
function a0_0x1c6e() {
    var _0x4d4f8e = [
        'replace',
        '/dev/stdin',
        'utf8',
        'readFileSync',
        '18PgaUyV',
        '4346405vlmxcV',
        'log',
        '6531305sUEjpj',
        '1786015WgJqIw',
        '3438124looGCd',
        'split',
        '5468538hGjRya',
        '1016397BHHOHI',
        '4085284HKjPBX',
        '232aBJEvy'
    ];
    a0_0x1c6e = function () {
        return _0x4d4f8e;
    };
    return a0_0x1c6e();
}
while (!![]) {
    var arr = Arr['shift']()[a0_0x24c5db(0xf0)]('\x20')['map'](Number);
    if (arr[0x0] == 0x0)
        break;
    var q1 = arr[0x0];
    var b = arr[0x1];
    var c1 = arr[0x2];
    var c2 = arr[0x3];
    var q2 = arr[0x4];
    var x = 0x0;
    var y = 0x0;
    var flag = !![];
    while (!![]) {
        if (b >= c1 * (x + 0x1) && x + 0x1 <= q2)
            x++;
        else
            break;
    }
    while (!![]) {
        if (b >= c1 * x + c2 * (y + 0x1))
            y++;
        else
            break;
    }
    while (!![]) {
        if (x == 0x0) {
            flag = ![];
            break;
        }
        if (c1 * x + c2 * y > b) {
            flag = ![];
            break;
        }
        if (q1 > x + y) {
            x--;
            while (!![]) {
                if (b >= c1 * x + c2 * (y + 0x1))
                    y++;
                else
                    break;
            }
        } else {
            break;
        }
    }
    console[a0_0x24c5db(0xec)](flag ? x + '\x20' + y : 'NA');
}