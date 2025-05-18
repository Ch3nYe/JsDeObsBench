var a0_0x504c4b = a0_0x7b08;
function a0_0x7b08(emlukO, key) {
    var stringArray = a0_0x5a08();
    a0_0x7b08 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x7b08(emlukO, key);
}
function a0_0x5a08() {
    var _0x2f4bb1 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'map',
        'sort',
        'log',
        'four\x20card',
        'full\x20house',
        'three\x20card',
        'one\x20pair',
        'null'
    ];
    a0_0x5a08 = function () {
        return _0x2f4bb1;
    };
    return a0_0x5a08();
}
require('fs')[a0_0x504c4b(0x0)](a0_0x504c4b(0x1), a0_0x504c4b(0x2))['trim']()[a0_0x504c4b(0x3)]('\x0a')[a0_0x504c4b(0x4)](function (i) {
    var _0x5ba6bf = a0_0x7b08;
    f = function (a, b) {
        return b - a;
    };
    a = [], c = i[_0x5ba6bf(0x3)](',')[_0x5ba6bf(0x5)](f);
    c['map'](function (j) {
        a[j] ? a[j]++ : a[j] = 0x1;
    });
    a[_0x5ba6bf(0x5)](f);
    l = a[0x0], n = a[0x1];
    console[_0x5ba6bf(0x6)](l == 0x4 ? _0x5ba6bf(0x7) : l == 0x3 ? n == 0x2 ? _0x5ba6bf(0x8) : _0x5ba6bf(0x9) : l == 0x2 ? n == 0x2 ? 'two\x20pair' : _0x5ba6bf(0xa) : 0x4 == c[0x0] - c[0x4] || c[0x0] - c[0x3] == 0x3 && +c[0x4] == 0x1 ? 'straight' : _0x5ba6bf(0xb));
});