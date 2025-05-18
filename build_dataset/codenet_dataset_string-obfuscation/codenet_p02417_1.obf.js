var a0_0x4139df = a0_0x3874;
(function (stringArrayFunction, comparisonValue) {
    var _0x55e694 = a0_0x3874;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x55e694(0x10b)) / 0x1 + -parseInt(_0x55e694(0x101)) / 0x2 + parseInt(_0x55e694(0x10c)) / 0x3 + parseInt(_0x55e694(0x10e)) / 0x4 * (parseInt(_0x55e694(0x10d)) / 0x5) + -parseInt(_0x55e694(0x107)) / 0x6 * (-parseInt(_0x55e694(0x104)) / 0x7) + -parseInt(_0x55e694(0x106)) / 0x8 * (parseInt(_0x55e694(0x10a)) / 0x9) + parseInt(_0x55e694(0x10f)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2b6b, 0xabd6e));
var input = require('fs')['readFileSync'](a0_0x4139df(0x105), 'utf8');
input = input[a0_0x4139df(0x102)]();
input = input[a0_0x4139df(0x109)]();
var abc = a0_0x4139df(0x110)[a0_0x4139df(0x111)]('');
function a0_0x3874(MwZMWc, key) {
    var stringArray = a0_0x2b6b();
    a0_0x3874 = function (index, key) {
        index = index - 0x100;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3874(MwZMWc, key);
}
var obj = {};
for (var i = 0x0; i < abc['length']; i++)
    obj[abc[i]] = 0x0;
input = input[a0_0x4139df(0x108)](/[a-z]/g, function (str) {
    obj[str]++;
    return str;
});
function a0_0x2b6b() {
    var _0x2b8a2e = [
        '48MXpxHR',
        '3121140KAvVwL',
        'replace',
        'toLowerCase',
        '1450539WLbJeR',
        '778293IyZgiX',
        '137541vRLENe',
        '2483915fNpEUm',
        '8EJYRJa',
        '9028470mWeHdv',
        'abcdefghijklmnopqrstuvwxyz',
        'split',
        '\x20:\x20',
        '1066934akYEtE',
        'trim',
        'forEach',
        '14rxQAKt',
        '/dev/stdin'
    ];
    a0_0x2b6b = function () {
        return _0x2b8a2e;
    };
    return a0_0x2b6b();
}
abc[a0_0x4139df(0x103)](function (v, i) {
    var _0x5bf3ef = a0_0x4139df;
    console['log'](v + _0x5bf3ef(0x100) + obj[v]);
});