var a0_0x287ce = a0_0x2d2d;
function a0_0x2d2d(DzXnCj, key) {
    var stringArray = a0_0x345c();
    a0_0x2d2d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2d2d(DzXnCj, key);
}
function prime(max) {
    var _0x1f5515 = a0_0x2d2d;
    var arr = [];
    for (var i = 0x0; i <= max; i++)
        arr[i] = i;
    arr[0x0] = ![];
    arr[0x1] = ![];
    var sqrt = Math[_0x1f5515(0x0)](Math[_0x1f5515(0x1)](max));
    for (var i = 0x2; i <= sqrt; i++) {
        if (arr[i] == ![])
            continue;
        for (var j = i + i; j <= max; j += i) {
            arr[j] = ![];
        }
    }
    var result = [];
    for (var i = 0x0; i <= max; i++) {
        if (arr[i] !== ![])
            result['push'](arr[i]);
    }
    return result;
}
var p = prime(0x2710);
var input = require('fs')[a0_0x287ce(0x2)](a0_0x287ce(0x3), a0_0x287ce(0x4));
var arr = input['trim']()['split']('\x0a')[a0_0x287ce(0x5)](Number);
var cnt = [];
for (var i = 0x0; i <= 0x2710; i++)
    cnt[i] = 0x0;
function a0_0x345c() {
    var _0x20f44f = [
        'floor',
        'sqrt',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'map',
        'some',
        'log'
    ];
    a0_0x345c = function () {
        return _0x20f44f;
    };
    return a0_0x345c();
}
p['forEach'](function (v, index) {
    cnt[v]++;
    for (var i = index + 0x1; i < p['length']; i++) {
        v += p[i];
        if (v > 0x2710)
            break;
        cnt[v]++;
    }
});
arr[a0_0x287ce(0x6)](function (v) {
    var _0x532fce = a0_0x2d2d;
    if (v == 0x0)
        return !![];
    console[_0x532fce(0x7)](cnt[v]);
});