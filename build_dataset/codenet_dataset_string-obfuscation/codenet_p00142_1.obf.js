var a0_0x259da1 = a0_0x2dfb;
function a0_0x2dfb(RyvQMt, key) {
    var stringArray = a0_0x52bd();
    a0_0x2dfb = function (index, key) {
        index = index - 0xc0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2dfb(RyvQMt, key);
}
function a0_0x52bd() {
    var _0x581535 = [
        '4130116UDSmRw',
        '19849247EPGIMm',
        '48FRExij',
        'log',
        '12kFhOtt',
        '9070092igNcEq',
        'trim',
        '1068129XSYyod',
        '3eURCjv',
        'shift',
        'forEach',
        'map',
        '/dev/stdin',
        'split',
        'utf8',
        '5sGoIMJ',
        'push',
        'length',
        '1zkSsiD',
        '10DSmqom',
        '21357193HNuZVP',
        '1406138GYVEwk',
        'readFileSync',
        '554176kDQBCi'
    ];
    a0_0x52bd = function () {
        return _0x581535;
    };
    return a0_0x52bd();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x1a304f = a0_0x2dfb;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1a304f(0xcf)) / 0x1 * (parseInt(_0x1a304f(0xd2)) / 0x2) + parseInt(_0x1a304f(0xc5)) / 0x3 * (-parseInt(_0x1a304f(0xd5)) / 0x4) + -parseInt(_0x1a304f(0xcc)) / 0x5 * (parseInt(_0x1a304f(0xc2)) / 0x6) + parseInt(_0x1a304f(0xd4)) / 0x7 + -parseInt(_0x1a304f(0xd7)) / 0x8 * (parseInt(_0x1a304f(0xc4)) / 0x9) + parseInt(_0x1a304f(0xd0)) / 0xa * (parseInt(_0x1a304f(0xd6)) / 0xb) + -parseInt(_0x1a304f(0xc1)) / 0xc * (-parseInt(_0x1a304f(0xd1)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x52bd, 0xed9de));
var input = require('fs')[a0_0x259da1(0xd3)](a0_0x259da1(0xc9), a0_0x259da1(0xcb));
var arr = input[a0_0x259da1(0xc3)]()[a0_0x259da1(0xca)]('\x0a')[a0_0x259da1(0xc8)](Number);
while (!![]) {
    var n = arr[a0_0x259da1(0xc6)]();
    if (n == 0x0)
        break;
    if (n == 0x1) {
        console[a0_0x259da1(0xc0)]('');
        continue;
    }
    var ary = [];
    for (var i = 0x0; i < n; i++)
        ary[i] = ![];
    for (var i = 0x1; i < n; i++) {
        ary[i * i % n] = !![];
    }
    var m = [];
    ary[a0_0x259da1(0xc7)](function (v, i) {
        var _0xde5b30 = a0_0x259da1;
        if (v)
            m[_0xde5b30(0xcd)](i);
    });
    var ans = [];
    var len = (n - 0x1) / 0x2;
    for (var i = 0x0; i <= len; i++)
        ans[i] = 0x0;
    for (var i = 0x0; i < m[a0_0x259da1(0xce)]; i++) {
        for (var j = i + 0x1; j < m[a0_0x259da1(0xce)]; j++) {
            var x = m[i] - m[j];
            if (x < 0x0)
                x += n;
            if (len < x)
                x = n - x;
            ans[x] += 0x2;
        }
    }
    ans[a0_0x259da1(0xc6)]();
    ans[a0_0x259da1(0xc7)](function (v) {
        var _0x542ebb = a0_0x259da1;
        console[_0x542ebb(0xc0)](v);
    });
}