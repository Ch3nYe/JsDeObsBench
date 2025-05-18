var a0_0x429691 = a0_0x1adf;
(function (stringArrayFunction, comparisonValue) {
    var _0x5e4224 = a0_0x1adf;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5e4224(0xb4)) / 0x1 * (parseInt(_0x5e4224(0xb1)) / 0x2) + parseInt(_0x5e4224(0xc3)) / 0x3 * (parseInt(_0x5e4224(0xc6)) / 0x4) + -parseInt(_0x5e4224(0xc7)) / 0x5 + -parseInt(_0x5e4224(0xb0)) / 0x6 * (parseInt(_0x5e4224(0xbe)) / 0x7) + parseInt(_0x5e4224(0xb6)) / 0x8 * (-parseInt(_0x5e4224(0xb8)) / 0x9) + parseInt(_0x5e4224(0xb2)) / 0xa + -parseInt(_0x5e4224(0xb3)) / 0xb * (-parseInt(_0x5e4224(0xc1)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3439, 0x55d13));
function a0_0x1adf(rTRZyM, key) {
    var stringArray = a0_0x3439();
    a0_0x1adf = function (index, key) {
        index = index - 0xae;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1adf(rTRZyM, key);
}
var GET = (function () {
    var _0x27d39f = a0_0x1adf;
    function f(s) {
        return new g(s);
    }
    function g(s) {
        var _0x34372b = a0_0x1adf;
        this['_s'] = s[_0x34372b(0xbd)]()[_0x34372b(0xc5)]('\x0a');
        this['_y'] = 0x0;
    }
    g[_0x27d39f(0xbb)]['a'] = function (f) {
        var _0x16169b = _0x27d39f;
        var s = this['_s'], y = this['_y'], r;
        if (typeof s[y] === 'string')
            s[y] = s[y][_0x16169b(0xc5)]('\x20')[_0x16169b(0xc2)]();
        r = s[y][_0x16169b(0xaf)]();
        if (!s[y][_0x16169b(0xc4)])
            this['_y']++;
        return f ? r : +r;
    };
    g[_0x27d39f(0xbb)]['l'] = function (f) {
        var _0x4a4432 = _0x27d39f;
        var s = this['_s'][this['_y']++]['split']('\x20');
        return f ? s : s[_0x4a4432(0xb9)](a => +a);
    };
    g[_0x27d39f(0xbb)]['m'] = function (n, f) {
        var _0x2210a6 = _0x27d39f;
        var r = this['_s'][_0x2210a6(0xb7)](this['_y'], this['_y'] += n)[_0x2210a6(0xb9)](a => a['split']('\x20'));
        return f ? r : r['map'](a => a[_0x2210a6(0xb9)](a => +a));
    };
    g[_0x27d39f(0xbb)]['r'] = function (n, f) {
        var _0x3c0334 = _0x27d39f;
        var r = this['_s'][_0x3c0334(0xb7)](this['_y'], this['_y'] += n);
        return f ? r : r['map'](a => +a);
    };
    return f;
}());
var o = GET(require('fs')[a0_0x429691(0xbc)](a0_0x429691(0xb5), a0_0x429691(0xc0)));
console[a0_0x429691(0xba)](main());
function a0_0x3439() {
    var _0x130529 = [
        'Yes',
        'utf8',
        '48UweHQD',
        'reverse',
        '3216dobVjp',
        'length',
        'split',
        '1616iOscpl',
        '2283125MBVUrO',
        'abs',
        'pop',
        '747462OpHWtZ',
        '348EnnBda',
        '4128930KaYjdo',
        '246224zQPTJM',
        '2717tuPtwB',
        '/dev/stdin',
        '8hwtQyx',
        'slice',
        '3158901Vpihln',
        'map',
        'log',
        'prototype',
        'readFileSync',
        'trim',
        '14Assxia'
    ];
    a0_0x3439 = function () {
        return _0x130529;
    };
    return a0_0x3439();
}
function main() {
    var _0x2e7060 = a0_0x429691;
    var n = o['a']();
    var m = o['m'](n);
    var t = 0x0, x = 0x0, y = 0x0;
    for (var i = 0x0; i < n; i++) {
        var dxy = Math[_0x2e7060(0xae)](x - m[i][0x1]);
        dxy += Math[_0x2e7060(0xae)](y - m[i][0x2]);
        var dt = m[i][0x0] - t;
        if (dxy > dt || dxy % 0x2 !== dt % 0x2)
            return 'No';
        x = m[i][0x1];
        y = m[i][0x2];
        t = m[i][0x0];
    }
    return _0x2e7060(0xbf);
}