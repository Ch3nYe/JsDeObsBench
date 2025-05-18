function a0_0x428f() {
    var _0xa61d0a = [
        'reverse',
        '4GjiGAH',
        '4124527MDJKxd',
        '10zzyagp',
        'slice',
        '8KwdFnw',
        'prototype',
        'readFileSync',
        'trim',
        'split',
        'log',
        '321000qpibqU',
        '554286luPTLy',
        'length',
        '2804389vdPsES',
        '/dev/stdin',
        '361652UsRaSh',
        'pop',
        '210807SiIDOK',
        '643292xnAUoC',
        'map',
        'string',
        '15usqmSi'
    ];
    a0_0x428f = function () {
        return _0xa61d0a;
    };
    return a0_0x428f();
}
var a0_0x3fd4d1 = a0_0x38a7;
(function (stringArrayFunction, comparisonValue) {
    var _0x1b2aa7 = a0_0x38a7;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1b2aa7(0xd3)) / 0x1 + -parseInt(_0x1b2aa7(0xbf)) / 0x2 + -parseInt(_0x1b2aa7(0xce)) / 0x3 * (parseInt(_0x1b2aa7(0xc4)) / 0x4) + -parseInt(_0x1b2aa7(0xc2)) / 0x5 * (-parseInt(_0x1b2aa7(0xcf)) / 0x6) + -parseInt(_0x1b2aa7(0xd1)) / 0x7 * (-parseInt(_0x1b2aa7(0xc8)) / 0x8) + parseInt(_0x1b2aa7(0xd5)) / 0x9 * (-parseInt(_0x1b2aa7(0xc6)) / 0xa) + -parseInt(_0x1b2aa7(0xc5)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x428f, 0x33dac));
function a0_0x38a7(YEJYbg, key) {
    var stringArray = a0_0x428f();
    a0_0x38a7 = function (index, key) {
        index = index - 0xbf;
        var value = stringArray[index];
        return value;
    };
    return a0_0x38a7(YEJYbg, key);
}
var GET = (function () {
    var _0x2f7f72 = a0_0x38a7;
    function f(s) {
        return new g(s);
    }
    function g(s) {
        var _0x30fcfc = a0_0x38a7;
        this['_s'] = s[_0x30fcfc(0xcb)]()['split']('\x0a');
        this['_y'] = 0x0;
    }
    g['prototype']['a'] = function (f) {
        var _0x31d29b = a0_0x38a7;
        var s = this['_s'], y = this['_y'], r;
        if (typeof s[y] === _0x31d29b(0xc1))
            s[y] = s[y]['split']('\x20')[_0x31d29b(0xc3)]();
        r = s[y][_0x31d29b(0xd4)]();
        if (!s[y][_0x31d29b(0xd0)])
            this['_y']++;
        return f ? r : +r;
    };
    g[_0x2f7f72(0xc9)]['l'] = function (f) {
        var _0x6885fe = _0x2f7f72;
        var s = this['_s'][this['_y']++][_0x6885fe(0xcc)]('\x20');
        return f ? s : s[_0x6885fe(0xc0)](a => +a);
    };
    g[_0x2f7f72(0xc9)]['m'] = function (n, f) {
        var _0x20b259 = _0x2f7f72;
        var r = this['_s'][_0x20b259(0xc7)](this['_y'], this['_y'] += n)[_0x20b259(0xc0)](a => a['split']('\x20'));
        return f ? r : r[_0x20b259(0xc0)](a => a[_0x20b259(0xc0)](a => +a));
    };
    g['prototype']['r'] = function (n, f) {
        var _0xc90cb5 = _0x2f7f72;
        var r = this['_s'][_0xc90cb5(0xc7)](this['_y'], this['_y'] += n);
        return f ? r : r[_0xc90cb5(0xc0)](a => +a);
    };
    return f;
}());
var o = GET(require('fs')[a0_0x3fd4d1(0xca)](a0_0x3fd4d1(0xd2), 'utf8'));
console[a0_0x3fd4d1(0xcd)](main());
function main() {
    var _0x204a35 = a0_0x3fd4d1;
    var s = o['a'](0x1);
    var ans = 0x3e7;
    for (var i = 0x2; i < s[_0x204a35(0xd0)]; i++) {
        var t = s[i - 0x2] + s[i - 0x1] + s[i];
        t = Math['abs'](t - 0x2f1);
        if (ans > t)
            ans = t;
    }
    return ans;
}