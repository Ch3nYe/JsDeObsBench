var a0_0x2ac8bb = a0_0xba31;
function a0_0x6735() {
    var _0x530b98 = [
        'readFileSync',
        'utf8',
        'trim',
        'map',
        'shift',
        'forEach'
    ];
    a0_0x6735 = function () {
        return _0x530b98;
    };
    return a0_0x6735();
}
var input = require('fs')[a0_0x2ac8bb(0x0)]('/dev/stdin', a0_0x2ac8bb(0x1));
var arr = input[a0_0x2ac8bb(0x2)]()['split']('\x0a')[a0_0x2ac8bb(0x3)](Number);
function a0_0xba31(EPBAQT, key) {
    var stringArray = a0_0x6735();
    a0_0xba31 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xba31(EPBAQT, key);
}
while (!![]) {
    var n = arr[a0_0x2ac8bb(0x4)]();
    if (n == 0x0)
        break;
    if (n == 0x1) {
        console['log']('');
        continue;
    }
    var ary = [];
    for (var i = 0x0; i < n; i++)
        ary[i] = ![];
    for (var i = 0x1; i < n; i++) {
        ary[i * i % n] = !![];
    }
    var m = [];
    ary[a0_0x2ac8bb(0x5)](function (v, i) {
        if (v)
            m['push'](i);
    });
    var ans = [];
    var len = (n - 0x1) / 0x2;
    for (var i = 0x0; i <= len; i++)
        ans[i] = 0x0;
    for (var i = 0x0; i < m['length']; i++) {
        for (var j = i + 0x1; j < m['length']; j++) {
            var x = m[i] - m[j];
            if (x < 0x0)
                x += n;
            if (len < x)
                x = n - x;
            ans[x] += 0x2;
        }
    }
    ans['shift']();
    ans['forEach'](function (v) {
        console['log'](v);
    });
}