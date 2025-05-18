var a0_0x545217 = a0_0x5f36;
(function (stringArrayFunction, comparisonValue) {
    var _0x4348f8 = a0_0x5f36;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4348f8(0x1b0)) / 0x1 + -parseInt(_0x4348f8(0x1a4)) / 0x2 * (-parseInt(_0x4348f8(0x1a7)) / 0x3) + parseInt(_0x4348f8(0x1a1)) / 0x4 * (parseInt(_0x4348f8(0x1ad)) / 0x5) + -parseInt(_0x4348f8(0x1ab)) / 0x6 * (-parseInt(_0x4348f8(0x1a3)) / 0x7) + parseInt(_0x4348f8(0x1aa)) / 0x8 + parseInt(_0x4348f8(0x1a5)) / 0x9 + parseInt(_0x4348f8(0x1a8)) / 0xa * (-parseInt(_0x4348f8(0x1a6)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5b4e, 0x25492));
var input = require('fs')[a0_0x545217(0x1ae)]('/dev/stdin', a0_0x545217(0x19f));
var Arr = input[a0_0x545217(0x1a2)]()['split']('\x0a');
function a0_0x5b4e() {
    var _0x3475bf = [
        'shift',
        '5VbqvLh',
        'readFileSync',
        'log',
        '74328zIbTJz',
        'forEach',
        '000',
        'utf8',
        'map',
        '513820WofqeM',
        'trim',
        '1520351yEPOFk',
        '14qTJYSK',
        '2080125FjOBjw',
        '11xFppZW',
        '104271FWlaGX',
        '8821630pCtUyc',
        'split',
        '1123880QHWKos',
        '6vdioiZ'
    ];
    a0_0x5b4e = function () {
        return _0x3475bf;
    };
    return a0_0x5b4e();
}
var n = Arr[a0_0x545217(0x1ac)]() - 0x0;
function a0_0x5f36(rdKGJS, key) {
    var stringArray = a0_0x5b4e();
    a0_0x5f36 = function (index, key) {
        index = index - 0x19e;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5f36(rdKGJS, key);
}
for (var I = 0x0; I < n; I++) {
    var arr = Arr[a0_0x545217(0x1ac)]()[a0_0x545217(0x1a9)]('\x20');
    var sum = 0x0;
    arr[a0_0x545217(0x1b1)](function (v) {
        v = v['replace'](/(\d?)([mcxi])/g, function (s, s1, s2) {
            s1 = s1 ? s1 - 0x0 : 0x1;
            if (s2 == 'm')
                s2 = 0x3e8;
            if (s2 == 'c')
                s2 = 0x64;
            if (s2 == 'x')
                s2 = 0xa;
            if (s2 == 'i')
                s2 = 0x1;
            sum += s1 * s2;
            return s;
        });
    });
    var str = (a0_0x545217(0x19e) + sum)['slice'](-0x4);
    var S = str[a0_0x545217(0x1a9)]('')[a0_0x545217(0x1a0)](Number);
    var result = '';
    S['forEach'](function (v, i) {
        if (v == 0x1)
            v = '';
        if (v !== 0x0) {
            if (i == 0x0)
                result += v + 'm';
            if (i == 0x1)
                result += v + 'c';
            if (i == 0x2)
                result += v + 'x';
            if (i == 0x3)
                result += v + 'i';
        }
    });
    console[a0_0x545217(0x1af)](result);
}