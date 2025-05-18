var a0_0x1426ac = a0_0x18af;
function a0_0x546f() {
    var _0x344f75 = [
        'trim',
        '1880710egIGRn',
        '409840tysNQz',
        'reverse',
        'length',
        'utf8',
        '1861242DBgBws',
        '10aaxKzW',
        '12410607opoGdt',
        '83496PqTGAw',
        'pop',
        '39244MODWmb',
        'split',
        'map',
        'slice',
        'log',
        'join',
        '9966NVQWyz',
        '128dYrldS',
        '81ydlRZY',
        'string',
        'push',
        'prototype',
        '328uqvlZz',
        '/dev/stdin'
    ];
    a0_0x546f = function () {
        return _0x344f75;
    };
    return a0_0x546f();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x1425a5 = a0_0x18af;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x1425a5(0x99)) / 0x1 * (-parseInt(_0x1425a5(0x9d)) / 0x2) + -parseInt(_0x1425a5(0xa3)) / 0x3 * (-parseInt(_0x1425a5(0x90)) / 0x4) + parseInt(_0x1425a5(0x93)) / 0x5 + parseInt(_0x1425a5(0x98)) / 0x6 + parseInt(_0x1425a5(0x9b)) / 0x7 * (-parseInt(_0x1425a5(0xa4)) / 0x8) + -parseInt(_0x1425a5(0xa5)) / 0x9 * (-parseInt(_0x1425a5(0x94)) / 0xa) + -parseInt(_0x1425a5(0x9a)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x546f, 0x31fc8));
var GET = (function () {
    var _0x557cbb = a0_0x18af;
    function f(s) {
        return new g(s);
    }
    function g(s) {
        var _0x58fdb0 = a0_0x18af;
        this['_s'] = s[_0x58fdb0(0x92)]()[_0x58fdb0(0x9e)]('\x0a');
        this['_y'] = 0x0;
    }
    g[_0x557cbb(0x8f)]['a'] = function (f) {
        var _0xe2d58a = _0x557cbb;
        var s = this['_s'], y = this['_y'], r;
        if (typeof s[y] === _0xe2d58a(0xa6))
            s[y] = s[y][_0xe2d58a(0x9e)]('\x20')[_0xe2d58a(0x95)]();
        r = s[y][_0xe2d58a(0x9c)]();
        if (!s[y][_0xe2d58a(0x96)])
            this['_y']++;
        return f ? r : +r;
    };
    g['prototype']['l'] = function (f) {
        var _0x5aa2ae = _0x557cbb;
        var s = this['_s'][this['_y']++][_0x5aa2ae(0x9e)]('\x20');
        return f ? s : s['map'](a => +a);
    };
    g['prototype']['m'] = function (n, f) {
        var _0x573ab1 = _0x557cbb;
        var r = this['_s'][_0x573ab1(0xa0)](this['_y'], this['_y'] += n)[_0x573ab1(0x9f)](a => a['split']('\x20'));
        return f ? r : r[_0x573ab1(0x9f)](a => a['map'](a => +a));
    };
    g[_0x557cbb(0x8f)]['r'] = function (n, f) {
        var _0x13b8ab = _0x557cbb;
        var r = this['_s'][_0x13b8ab(0xa0)](this['_y'], this['_y'] += n);
        return f ? r : r['map'](a => +a);
    };
    return f;
}());
var o = GET(require('fs')['readFileSync'](a0_0x1426ac(0x91), a0_0x1426ac(0x97)));
function a0_0x18af(SHEUZl, key) {
    var stringArray = a0_0x546f();
    a0_0x18af = function (index, key) {
        index = index - 0x8e;
        var value = stringArray[index];
        return value;
    };
    return a0_0x18af(SHEUZl, key);
}
console[a0_0x1426ac(0xa1)](main());
function main() {
    var _0x5f49e2 = a0_0x1426ac;
    var n = o['a']();
    var ans = [];
    for (var i = 0x1; i <= n; i++) {
        for (var j = i + 0x1; j <= n; j++) {
            if (n % 0x2 && i + j === n)
                continue;
            if (n % 0x2 === 0x0 && i + j === n + 0x1)
                continue;
            ans[_0x5f49e2(0x8e)](i + '\x20' + j);
        }
    }
    console['log'](ans[_0x5f49e2(0x96)]);
    return ans[_0x5f49e2(0xa2)]('\x0a');
}