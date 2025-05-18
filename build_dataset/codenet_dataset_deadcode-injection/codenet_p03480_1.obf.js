var a0_0x47f85d = a0_0x12f5;
var GET = (function () {
    var _0x236fbf = a0_0x12f5;
    function f(s) {
        return new g(s);
    }
    function g(s) {
        var _0x53c877 = a0_0x12f5;
        this['_s'] = s[_0x53c877(0x0)]()['split']('\x0a');
        this['_y'] = 0x0;
    }
    g[_0x236fbf(0x1)]['a'] = function (f) {
        var _0x320edd = a0_0x12f5;
        if (_0x320edd(0x2) !== _0x320edd(0x3)) {
            var s = this['_s'], y = this['_y'], r;
            if (typeof s[y] === _0x320edd(0x4))
                s[y] = s[y]['split']('\x20')['reverse']();
            r = s[y]['pop']();
            if (!s[y]['length'])
                this['_y']++;
            return f ? r : +r;
        } else {
            return new g(s);
        }
    };
    g[_0x236fbf(0x1)]['l'] = function (f) {
        var _0x29dbdc = a0_0x12f5;
        var s = this['_s'][this['_y']++][_0x29dbdc(0x5)]('\x20');
        return f ? s : s['map'](a => +a);
    };
    g[_0x236fbf(0x1)]['m'] = function (n, f) {
        var _0x430ed4 = a0_0x12f5;
        if (_0x430ed4(0x6) !== 'aQytp') {
            var r = this['_s']['slice'](this['_y'], this['_y'] += n)['map'](a => a[_0x430ed4(0x5)]('\x20'));
            return f ? r : r['map'](a => a[_0x430ed4(0x7)](a => +a));
        } else {
            var r = this['_s'][_0x430ed4(0x8)](this['_y'], this['_y'] += n)[_0x430ed4(0x7)](a => a['split']('\x20'));
            return f ? r : r[_0x430ed4(0x7)](a => a[_0x430ed4(0x7)](a => +a));
        }
    };
    g[_0x236fbf(0x1)]['r'] = function (n, f) {
        var _0xb236b7 = a0_0x12f5;
        var r = this['_s'][_0xb236b7(0x8)](this['_y'], this['_y'] += n);
        return f ? r : r[_0xb236b7(0x7)](a => +a);
    };
    return f;
}());
function a0_0x17b1() {
    var _0x1a2eaf = [
        'trim',
        'prototype',
        'JRisy',
        'VgZbb',
        'string',
        'split',
        'aQytp',
        'map',
        'slice',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'log',
        'length',
        'Psvbd'
    ];
    a0_0x17b1 = function () {
        return _0x1a2eaf;
    };
    return a0_0x17b1();
}
function a0_0x12f5(ESRInR, key) {
    var stringArray = a0_0x17b1();
    a0_0x12f5 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x12f5(ESRInR, key);
}
var o = GET(require('fs')[a0_0x47f85d(0x9)](a0_0x47f85d(0xa), a0_0x47f85d(0xb)));
console[a0_0x47f85d(0xc)](main());
function main() {
    var _0x20334e = a0_0x12f5;
    var s = o['a'](0x1);
    var n = s[_0x20334e(0xd)];
    var l = n + 0x1 >> 0x1, u, v = l;
    var f = s[l - 0x1];
    if (n & 0x1)
        u = l - 0x2;
    else
        u = l - 0x1;
    for (; u >= 0x0; u--, v++) {
        if ('Psvbd' !== _0x20334e(0xe)) {
            var s = this['_s'][this['_y']++][_0x20334e(0x5)]('\x20');
            return f ? s : s[_0x20334e(0x7)](a => +a);
        } else {
            if (s[u] !== f || s[v] !== f)
                break;
            l++;
        }
    }
    return l;
}