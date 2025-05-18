var a0_0x1ed2da = a0_0x401d;
var toInt = x => parseInt(x, 0xa);
var toIntArr = arr => arr[a0_0x1ed2da(0x0)](x => toInt(x));
function a0_0x401d(GIeJtL, key) {
    var stringArray = a0_0x59dd();
    a0_0x401d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x401d(GIeJtL, key);
}
var abs = x => x > 0x0 ? x : -x;
function min() {
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest['length']; i++)
        if (rest[i] < val)
            val = rest[i];
    return val;
}
function max() {
    var _0x5b1f59 = a0_0x401d;
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest[_0x5b1f59(0x1)]; i++)
        if (rest[i] > val)
            val = rest[i];
    return val;
}
Main(require('fs')[a0_0x1ed2da(0x2)](a0_0x1ed2da(0x3), a0_0x1ed2da(0x4)));
function Main(input) {
    var _0x1fd1fb = a0_0x401d;
    var input = input['split']('\x0a');
    var temp1 = input[0x0][_0x1fd1fb(0x5)]('\x20');
    var n = toInt(temp1[0x0]);
    var m = toInt(temp1[0x1]);
    var abs = [];
    for (var i = 0x0; i < m; i++) {
        if ('FHSNg' !== _0x1fd1fb(0x6)) {
            return a[0x0] - b[0x0];
        } else {
            c = toIntArr(input[i + 0x1][_0x1fd1fb(0x5)]('\x20'));
            a = c[0x0];
            b = c[0x1];
            abs[i] = [
                a,
                b
            ];
        }
    }
    abs[_0x1fd1fb(0x7)](function (a, b) {
        var _0x1ca4ed = a0_0x401d;
        if (_0x1ca4ed(0x8) === _0x1ca4ed(0x9)) {
            var rest = arguments, val = rest[0x0];
            for (var i = 0x1; i < rest[_0x1ca4ed(0x1)]; i++)
                if (rest[i] > val)
                    val = rest[i];
            return val;
        } else {
            if (a[0x0] !== b[0x0]) {
                return a[0x0] - b[0x0];
            } else {
                return a[0x1] - b[0x1];
            }
        }
    });
    var l = 0x0;
    r = n - 0x1;
    var ab;
    var ans = 0x1;
    for (var i = 0x0; i < m; i++) {
        if (_0x1fd1fb(0xa) !== _0x1fd1fb(0xb)) {
            ab = abs[i];
            if (ab[0x1] <= l || r <= ab[0x0]) {
                ans++;
                l = ab[0x0];
                r = ab[0x1];
            } else {
                if (_0x1fd1fb(0xc) === 'fsnIE') {
                    l = max(l, ab[0x0]);
                    r = min(r, ab[0x1]);
                } else {
                    return a[0x1] - b[0x1];
                }
            }
        } else {
            var rest = arguments, val = rest[0x0];
            for (var i = 0x1; i < rest['length']; i++)
                if (rest[i] < val)
                    val = rest[i];
            return val;
        }
    }
    console[_0x1fd1fb(0xd)](ans);
}
function a0_0x59dd() {
    var _0x2e49b5 = [
        'map',
        'length',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'FHSNg',
        'sort',
        'vVDMA',
        'cYDTo',
        'cVBXN',
        'SHMul',
        'fsnIE',
        'log'
    ];
    a0_0x59dd = function () {
        return _0x2e49b5;
    };
    return a0_0x59dd();
}