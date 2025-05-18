var a0_0x5c5f22 = a0_0x5bfd;
(function (stringArrayFunction, comparisonValue) {
    var _0x35f35f = a0_0x5bfd;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x35f35f(0x11e)) / 0x1 + parseInt(_0x35f35f(0x115)) / 0x2 + -parseInt(_0x35f35f(0x11f)) / 0x3 + -parseInt(_0x35f35f(0x126)) / 0x4 + -parseInt(_0x35f35f(0x11a)) / 0x5 * (parseInt(_0x35f35f(0x11b)) / 0x6) + parseInt(_0x35f35f(0x116)) / 0x7 + parseInt(_0x35f35f(0x11c)) / 0x8 * (parseInt(_0x35f35f(0x122)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2f7d, 0xb633a));
function a0_0x5bfd(bLscSU, key) {
    var stringArray = a0_0x2f7d();
    a0_0x5bfd = function (index, key) {
        index = index - 0x114;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5bfd(bLscSU, key);
}
function rec(a, b) {
    var _0x62cb4f = a0_0x5bfd;
    if (a[0x0] > b[0x0]) {
        return _0x62cb4f(0x120);
    } else if (a[0x0] < b[0x0]) {
        return _0x62cb4f(0x114);
    } else if (a[_0x62cb4f(0x124)] == 0x1) {
        return _0x62cb4f(0x121);
    } else {
        return rec(a[_0x62cb4f(0x119)](0x1), b[_0x62cb4f(0x119)](0x1));
    }
}
function main(s) {
    var _0x1a9e16 = a0_0x5bfd;
    s = s[_0x1a9e16(0x123)]('\x0a');
    if (s[0x0][_0x1a9e16(0x124)] > s[0x1][_0x1a9e16(0x124)]) {
        console[_0x1a9e16(0x11d)]('GREATER');
    } else if (s[0x0][_0x1a9e16(0x124)] < s[0x1]['length']) {
        console[_0x1a9e16(0x11d)](_0x1a9e16(0x114));
    } else {
        console['log']('%s', rec(s[0x0]['slice'](0x1), s[0x1][_0x1a9e16(0x119)](0x1)));
    }
}
function a0_0x2f7d() {
    var _0x4bc78c = [
        'readFileSync',
        '4096876blGKHu',
        'LESS',
        '842542hBChVU',
        '3592694owxvLH',
        '/dev/stdin',
        'utf8',
        'slice',
        '533545dLjuWI',
        '42ZRXFcZ',
        '23609216XMQvSp',
        'log',
        '1175786HRWSsz',
        '577197ALOedG',
        'GREATER',
        'EQUAL',
        '9fCSLbd',
        'split',
        'length'
    ];
    a0_0x2f7d = function () {
        return _0x4bc78c;
    };
    return a0_0x2f7d();
}
main(require('fs')[a0_0x5c5f22(0x125)](a0_0x5c5f22(0x117), a0_0x5c5f22(0x118)));