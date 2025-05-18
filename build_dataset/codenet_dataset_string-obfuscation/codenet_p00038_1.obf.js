function a0_0x48ba() {
    var _0x2a294f = [
        'two\x20pair',
        'utf8',
        'split',
        '5044224AvxNPX',
        '9ssQQvb',
        '3414640bdSNXg',
        'trim',
        'sort',
        '/dev/stdin',
        '26780MOihwo',
        'four\x20card',
        '152qvcZfk',
        '34435yCbwVK',
        '2670689loHmXB',
        '578yfvJnD',
        'one\x20pair',
        '2963688yebxfi',
        '3189wUHpzk',
        'map'
    ];
    a0_0x48ba = function () {
        return _0x2a294f;
    };
    return a0_0x48ba();
}
var a0_0x5abb32 = a0_0x45bf;
(function (stringArrayFunction, comparisonValue) {
    var _0x1a87b5 = a0_0x45bf;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1a87b5(0x1f4)) / 0x1 + -parseInt(_0x1a87b5(0x1e6)) / 0x2 * (parseInt(_0x1a87b5(0x1e9)) / 0x3) + -parseInt(_0x1a87b5(0x1f6)) / 0x4 * (parseInt(_0x1a87b5(0x1f7)) / 0x5) + -parseInt(_0x1a87b5(0x1e8)) / 0x6 + parseInt(_0x1a87b5(0x1e5)) / 0x7 + parseInt(_0x1a87b5(0x1ee)) / 0x8 + parseInt(_0x1a87b5(0x1ef)) / 0x9 * (parseInt(_0x1a87b5(0x1f0)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x48ba, 0x4d7fe));
function a0_0x45bf(dcMvRH, key) {
    var stringArray = a0_0x48ba();
    a0_0x45bf = function (index, key) {
        index = index - 0x1e5;
        var value = stringArray[index];
        return value;
    };
    return a0_0x45bf(dcMvRH, key);
}
require('fs')['readFileSync'](a0_0x5abb32(0x1f3), a0_0x5abb32(0x1ec))[a0_0x5abb32(0x1f1)]()[a0_0x5abb32(0x1ed)]('\x0a')[a0_0x5abb32(0x1ea)](function (i) {
    var _0x16232b = a0_0x5abb32;
    f = function (a, b) {
        return b - a;
    };
    a = [], c = i[_0x16232b(0x1ed)](',')[_0x16232b(0x1f2)](f);
    c['map'](function (j) {
        a[j] ? a[j]++ : a[j] = 0x1;
    });
    a['sort'](f);
    l = a[0x0], n = a[0x1];
    console['log'](l == 0x4 ? _0x16232b(0x1f5) : l == 0x3 ? n == 0x2 ? 'full\x20house' : 'three\x20card' : l == 0x2 ? n == 0x2 ? _0x16232b(0x1eb) : _0x16232b(0x1e7) : 0x4 == c[0x0] - c[0x4] || c[0x0] - c[0x3] == 0x3 && +c[0x4] == 0x1 ? 'straight' : 'null');
});