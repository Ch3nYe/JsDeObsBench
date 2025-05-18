var a0_0x456443 = a0_0x345f;
var GET = (function () {
    var _0x18cc34 = a0_0x345f;
    function f(s) {
        return new g(s);
    }
    function g(s) {
        var _0x3a07cf = a0_0x345f;
        if (_0x3a07cf(0x0) === _0x3a07cf(0x1)) {
            var s = this['_s'], y = this['_y'], r;
            if (typeof s[y] === _0x3a07cf(0x2))
                s[y] = s[y][_0x3a07cf(0x3)]('\x20')[_0x3a07cf(0x4)]();
            r = s[y][_0x3a07cf(0x5)]();
            if (!s[y][_0x3a07cf(0x6)])
                this['_y']++;
            return f ? r : +r;
        } else {
            this['_s'] = s[_0x3a07cf(0x7)]()[_0x3a07cf(0x3)]('\x0a');
            this['_y'] = 0x0;
        }
    }
    g[_0x18cc34(0x8)]['a'] = function (f) {
        var _0x223b52 = a0_0x345f;
        var s = this['_s'], y = this['_y'], r;
        if (typeof s[y] === _0x223b52(0x2))
            s[y] = s[y]['split']('\x20')[_0x223b52(0x4)]();
        r = s[y][_0x223b52(0x5)]();
        if (!s[y][_0x223b52(0x6)])
            this['_y']++;
        return f ? r : +r;
    };
    g[_0x18cc34(0x8)]['l'] = function (f) {
        var _0x345d45 = a0_0x345f;
        var s = this['_s'][this['_y']++]['split']('\x20');
        return f ? s : s[_0x345d45(0x9)](a => +a);
    };
    g[_0x18cc34(0x8)]['m'] = function (n, f) {
        var _0x515cf4 = a0_0x345f;
        if (_0x515cf4(0xa) !== 'IzVZt') {
            return new g(s);
        } else {
            var r = this['_s'][_0x515cf4(0xb)](this['_y'], this['_y'] += n)[_0x515cf4(0x9)](a => a[_0x515cf4(0x3)]('\x20'));
            return f ? r : r[_0x515cf4(0x9)](a => a[_0x515cf4(0x9)](a => +a));
        }
    };
    g[_0x18cc34(0x8)]['r'] = function (n, f) {
        var _0x5cd9ae = a0_0x345f;
        var r = this['_s'][_0x5cd9ae(0xb)](this['_y'], this['_y'] += n);
        return f ? r : r['map'](a => +a);
    };
    return f;
}());
function a0_0x1171() {
    var _0x58f5f4 = [
        'NHwLT',
        'xnEuQ',
        'string',
        'split',
        'reverse',
        'pop',
        'length',
        'trim',
        'prototype',
        'map',
        'IzVZt',
        'slice',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        ']).fill(0).map(x=>{return\x20',
        ';})',
        'Array(a['
    ];
    a0_0x1171 = function () {
        return _0x58f5f4;
    };
    return a0_0x1171();
}
function a0_0x345f(FzlwZM, key) {
    var stringArray = a0_0x1171();
    a0_0x345f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x345f(FzlwZM, key);
}
var o = GET(require('fs')[a0_0x456443(0xc)](a0_0x456443(0xd), a0_0x456443(0xe)));
function xArray(v) {
    var _0x6d2656 = a0_0x345f;
    var a = arguments, l = a[_0x6d2656(0x6)], r = 'Array(a[' + --l + _0x6d2656(0xf) + v + _0x6d2656(0x10);
    while (--l)
        r = _0x6d2656(0x11) + l + ']).fill(0).map(x=>' + r + ')';
    return eval(r);
}
console['log'](main());
function main() {
    var n = o['a']();
    return n * n * n;
}