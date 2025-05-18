var a0_0x35a00f = a0_0x3586;
var GET = (function () {
    var _0x35ac0a = a0_0x3586;
    function f(s) {
        var _0x45751e = a0_0x3586;
        if ('sDMWV' !== _0x45751e(0x0)) {
            return new g(s);
        } else {
            var s = this['_s'][this['_y']++][_0x45751e(0x1)]('\x20');
            return f ? s : s['map'](a => +a);
        }
    }
    function g(s) {
        var _0x1f3e6c = a0_0x3586;
        this['_s'] = s[_0x1f3e6c(0x2)]()[_0x1f3e6c(0x1)]('\x0a');
        this['_y'] = 0x0;
    }
    g[_0x35ac0a(0x3)]['a'] = function (f) {
        var _0x1047a9 = a0_0x3586;
        if ('GBOWy' === 'GBOWy') {
            var s = this['_s'], y = this['_y'], r;
            if (typeof s[y] === _0x1047a9(0x4))
                s[y] = s[y][_0x1047a9(0x1)]('\x20')[_0x1047a9(0x5)]();
            r = s[y]['pop']();
            if (!s[y][_0x1047a9(0x6)])
                this['_y']++;
            return f ? r : +r;
        } else {
            ans = gcd(ans, a[i]);
        }
    };
    g[_0x35ac0a(0x3)]['l'] = function (f) {
        var _0x198054 = a0_0x3586;
        var s = this['_s'][this['_y']++]['split']('\x20');
        return f ? s : s[_0x198054(0x7)](a => +a);
    };
    g[_0x35ac0a(0x3)]['m'] = function (n, f) {
        var _0x3bf859 = a0_0x3586;
        var r = this['_s']['slice'](this['_y'], this['_y'] += n)['map'](a => a['split']('\x20'));
        return f ? r : r[_0x3bf859(0x7)](a => a[_0x3bf859(0x7)](a => +a));
    };
    g[_0x35ac0a(0x3)]['r'] = function (n, f) {
        var _0xc48dc8 = a0_0x3586;
        var r = this['_s'][_0xc48dc8(0x8)](this['_y'], this['_y'] += n);
        return f ? r : r['map'](a => +a);
    };
    return f;
}());
function a0_0x3586(wLCcZW, key) {
    var stringArray = a0_0x1949();
    a0_0x3586 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3586(wLCcZW, key);
}
var o = GET(require('fs')[a0_0x35a00f(0x9)](a0_0x35a00f(0xa), 'utf8'));
function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
}
console['log'](main());
function a0_0x1949() {
    var _0x43a3f7 = [
        'mFqbA',
        'split',
        'trim',
        'prototype',
        'string',
        'reverse',
        'length',
        'map',
        'slice',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x1949 = function () {
        return _0x43a3f7;
    };
    return a0_0x1949();
}
function main() {
    var n = o['a']();
    var a = o['l']();
    var ans = a[0x0];
    for (var i = 0x1; i < n; i++) {
        ans = gcd(ans, a[i]);
    }
    return ans;
}