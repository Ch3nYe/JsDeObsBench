var a0_0x1c005b = a0_0x4658;
var GET = (function () {
    var _0x19d832 = a0_0x4658;
    function f(s) {
        return new g(s);
    }
    function g(s) {
        var _0x2e0d97 = a0_0x4658;
        this['_s'] = s['trim']()[_0x2e0d97(0x0)]('\x0a');
        this['_y'] = 0x0;
    }
    g[_0x19d832(0x1)]['a'] = function (f) {
        var _0x425c24 = a0_0x4658;
        var s = this['_s'], y = this['_y'], r;
        if (typeof s[y] === _0x425c24(0x2))
            s[y] = s[y][_0x425c24(0x0)]('\x20')[_0x425c24(0x3)]();
        r = s[y][_0x425c24(0x4)]();
        if (!s[y][_0x425c24(0x5)])
            this['_y']++;
        return f ? r : +r;
    };
    g['prototype']['l'] = function (f) {
        var _0x2730bc = a0_0x4658;
        var s = this['_s'][this['_y']++][_0x2730bc(0x0)]('\x20');
        return f ? s : s[_0x2730bc(0x6)](a => +a);
    };
    g['prototype']['m'] = function (n, f) {
        var _0x91d590 = a0_0x4658;
        var r = this['_s'][_0x91d590(0x7)](this['_y'], this['_y'] += n)[_0x91d590(0x6)](a => a[_0x91d590(0x0)]('\x20'));
        return f ? r : r[_0x91d590(0x6)](a => a[_0x91d590(0x6)](a => +a));
    };
    g[_0x19d832(0x1)]['r'] = function (n, f) {
        var _0xfebbe7 = a0_0x4658;
        if ('hWIee' !== 'hWIee') {
            return new g(s);
        } else {
            var r = this['_s'][_0xfebbe7(0x7)](this['_y'], this['_y'] += n);
            return f ? r : r[_0xfebbe7(0x6)](a => +a);
        }
    };
    return f;
}());
function a0_0x4658(xrwuSf, key) {
    var stringArray = a0_0x124b();
    a0_0x4658 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4658(xrwuSf, key);
}
function a0_0x124b() {
    var _0x5e0215 = [
        'split',
        'prototype',
        'string',
        'reverse',
        'pop',
        'length',
        'map',
        'slice',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'log',
        'WuuwX',
        'abs'
    ];
    a0_0x124b = function () {
        return _0x5e0215;
    };
    return a0_0x124b();
}
var o = GET(require('fs')[a0_0x1c005b(0x8)](a0_0x1c005b(0x9), a0_0x1c005b(0xa)));
console[a0_0x1c005b(0xb)](main());
function main() {
    var _0x543085 = a0_0x4658;
    var s = o['a'](0x1);
    var ans = 0x3e7;
    for (var i = 0x2; i < s[_0x543085(0x5)]; i++) {
        if (_0x543085(0xc) !== _0x543085(0xc)) {
            var t = s[i - 0x2] + s[i - 0x1] + s[i];
            t = Math[_0x543085(0xd)](t - 0x2f1);
            if (ans > t)
                ans = t;
        } else {
            var t = s[i - 0x2] + s[i - 0x1] + s[i];
            t = Math[_0x543085(0xd)](t - 0x2f1);
            if (ans > t)
                ans = t;
        }
    }
    return ans;
}