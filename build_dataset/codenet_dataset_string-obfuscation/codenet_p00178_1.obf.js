function a0_0x58b1() {
    var _0x1a8216 = [
        '2375TpxIau',
        'length',
        '438eWndBc',
        'readFileSync',
        '3189164CONdgU',
        'split',
        '50994CCyMTM',
        '339508kDmSGM',
        '1eEHHQy',
        '11111',
        '/dev/stdin',
        '740UKRpnM',
        'replace',
        '1875410pKCtVn',
        'shift',
        'map',
        'log',
        '501728yzmlDB',
        'trim',
        'max',
        '14eQZFuN',
        '3942UIFjnk'
    ];
    a0_0x58b1 = function () {
        return _0x1a8216;
    };
    return a0_0x58b1();
}
var a0_0x1b27d6 = a0_0x2028;
function a0_0x2028(nWQYIk, key) {
    var stringArray = a0_0x58b1();
    a0_0x2028 = function (index, key) {
        index = index - 0x167;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2028(nWQYIk, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x14a478 = a0_0x2028;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x14a478(0x167)) / 0x1 * (-parseInt(_0x14a478(0x17c)) / 0x2) + -parseInt(_0x14a478(0x174)) / 0x3 * (-parseInt(_0x14a478(0x16a)) / 0x4) + -parseInt(_0x14a478(0x175)) / 0x5 * (-parseInt(_0x14a478(0x177)) / 0x6) + -parseInt(_0x14a478(0x173)) / 0x7 * (-parseInt(_0x14a478(0x170)) / 0x8) + -parseInt(_0x14a478(0x17b)) / 0x9 + parseInt(_0x14a478(0x16c)) / 0xa + -parseInt(_0x14a478(0x179)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x58b1, 0x1e9d2));
var input = require('fs')[a0_0x1b27d6(0x178)](a0_0x1b27d6(0x169), 'utf8');
var arr = input[a0_0x1b27d6(0x171)]()['split']('\x0a');
while (!![]) {
    var n = arr[a0_0x1b27d6(0x16d)]() - 0x0;
    if (n == 0x0)
        break;
    var base = [
        '',
        '',
        '',
        '',
        ''
    ];
    for (var i = 0x0; i < n; i++) {
        var [d, p, q] = arr[a0_0x1b27d6(0x16d)]()[a0_0x1b27d6(0x17a)]('\x20')[a0_0x1b27d6(0x16e)](Number);
        q--;
        if (d == 0x1) {
            var max = 0x0;
            for (var j = 0x0; j < p; j++)
                max = Math[a0_0x1b27d6(0x172)](max, base[q + j][a0_0x1b27d6(0x176)]);
            for (var j = 0x0; j < p; j++) {
                while (base[q + j][a0_0x1b27d6(0x176)] < max)
                    base[q + j] += '0';
                base[q + j] += '1';
            }
        } else if (d == 0x2) {
            for (var j = 0x0; j < p; j++)
                base[q] += '1';
        }
    }
    var max = 0x0;
    for (var i = 0x0; i < 0x5; i++)
        max = Math['max'](max, base[i]['length']);
    for (var i = 0x0; i < 0x5; i++) {
        while (base[i]['length'] < max)
            base[i] += '0';
    }
    var cnt = 0x0;
    for (var i = 0x0; i < max; i++) {
        var str = base[a0_0x1b27d6(0x16e)](v => v[i])['join']('');
        str = str[a0_0x1b27d6(0x16b)](a0_0x1b27d6(0x168), '')[a0_0x1b27d6(0x16b)](/0/g, '');
        cnt += str[a0_0x1b27d6(0x176)];
    }
    console[a0_0x1b27d6(0x16f)](cnt);
}