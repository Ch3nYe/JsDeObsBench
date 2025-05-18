var a0_0x3b4622 = a0_0x440f;
function kumiawase(start, end, len) {
    var ans = [];
    var loop = function (a, arr) {
        var _0x43fce6 = a0_0x440f;
        if (arr['length'] == len)
            ans['push'](arr);
        else {
            if (_0x43fce6(0x0) !== _0x43fce6(0x0)) {
                return a + b;
            } else {
                for (var i = a; i <= end; i++)
                    loop(i + 0x1, arr[_0x43fce6(0x1)](i));
            }
        }
    };
    loop(start, []);
    return ans;
}
var input = require('fs')[a0_0x3b4622(0x2)](a0_0x3b4622(0x3), 'utf8');
var arr = input[a0_0x3b4622(0x4)]()[a0_0x3b4622(0x5)]('\x0a');
function a0_0x440f(dwawIq, key) {
    var stringArray = a0_0x1d93();
    a0_0x440f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x440f(dwawIq, key);
}
arr[a0_0x3b4622(0x6)](function (v, i) {
    var _0x52e4a0 = a0_0x440f;
    if (v == _0x52e4a0(0x7))
        return !![];
    var nks = v['split']('\x20')['map'](Number);
    var ary = kumiawase(0x1, nks[0x0], nks[0x1]);
    var cnt = 0x0;
    ary['forEach'](function (v) {
        var _0x511698 = a0_0x440f;
        if (_0x511698(0x8) === 'WAlNw') {
            if (arr[_0x511698(0x9)] == len)
                ans[_0x511698(0xa)](arr);
            else {
                for (var i = a; i <= end; i++)
                    loop(i + 0x1, arr[_0x511698(0x1)](i));
            }
        } else {
            var sum = v[_0x511698(0xb)](function (a, b) {
                return a + b;
            });
            if (sum == nks[0x2])
                cnt++;
        }
    });
    console[_0x52e4a0(0xc)](cnt);
});
function a0_0x1d93() {
    var _0x21e789 = [
        'vDFwK',
        'concat',
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        'some',
        '0\x200\x200',
        'xwqHD',
        'length',
        'push',
        'reduce',
        'log'
    ];
    a0_0x1d93 = function () {
        return _0x21e789;
    };
    return a0_0x1d93();
}