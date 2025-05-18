function a0_0x31f2() {
    var _0x382e76 = [
        '6947526PoxilT',
        '4cMLUBc',
        '458899oPyRCU',
        '1887219utYpqR',
        'slice',
        'prototype',
        'utf8',
        'map',
        'string',
        '7894840NSQSBU',
        '3885940VCHMyO',
        '2KDimuq',
        ';})',
        '8DOHDMR',
        'length',
        '1414017gZsZiv',
        ']).fill(0).map(x=>{return\x20',
        'Array(a[',
        '/dev/stdin',
        'split',
        'log',
        'reverse',
        '273849DRRczp'
    ];
    a0_0x31f2 = function () {
        return _0x382e76;
    };
    return a0_0x31f2();
}
var a0_0x1b9758 = a0_0x5145;
(function (stringArrayFunction, comparisonValue) {
    var _0x180856 = a0_0x5145;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x180856(0x1d6)) / 0x1 + parseInt(_0x180856(0x1c7)) / 0x2 * (-parseInt(_0x180856(0x1d2)) / 0x3) + -parseInt(_0x180856(0x1d4)) / 0x4 * (-parseInt(_0x180856(0x1dd)) / 0x5) + parseInt(_0x180856(0x1d3)) / 0x6 + -parseInt(_0x180856(0x1d5)) / 0x7 * (-parseInt(_0x180856(0x1c9)) / 0x8) + parseInt(_0x180856(0x1cb)) / 0x9 + parseInt(_0x180856(0x1dc)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x31f2, 0xec839));
var GET = (function () {
    var _0x4d7f89 = a0_0x5145;
    function f(s) {
        return new g(s);
    }
    function g(s) {
        this['_s'] = s['trim']()['split']('\x0a');
        this['_y'] = 0x0;
    }
    g['prototype']['a'] = function (f) {
        var _0x55204e = a0_0x5145;
        var s = this['_s'], y = this['_y'], r;
        if (typeof s[y] === _0x55204e(0x1db))
            s[y] = s[y][_0x55204e(0x1cf)]('\x20')[_0x55204e(0x1d1)]();
        r = s[y]['pop']();
        if (!s[y][_0x55204e(0x1ca)])
            this['_y']++;
        return f ? r : +r;
    };
    g[_0x4d7f89(0x1d8)]['l'] = function (f) {
        var _0x311835 = _0x4d7f89;
        var s = this['_s'][this['_y']++][_0x311835(0x1cf)]('\x20');
        return f ? s : s[_0x311835(0x1da)](a => +a);
    };
    g[_0x4d7f89(0x1d8)]['m'] = function (n, f) {
        var _0x120d97 = _0x4d7f89;
        var r = this['_s'][_0x120d97(0x1d7)](this['_y'], this['_y'] += n)[_0x120d97(0x1da)](a => a[_0x120d97(0x1cf)]('\x20'));
        return f ? r : r[_0x120d97(0x1da)](a => a[_0x120d97(0x1da)](a => +a));
    };
    g[_0x4d7f89(0x1d8)]['r'] = function (n, f) {
        var _0x5d6373 = _0x4d7f89;
        var r = this['_s'][_0x5d6373(0x1d7)](this['_y'], this['_y'] += n);
        return f ? r : r[_0x5d6373(0x1da)](a => +a);
    };
    return f;
}());
var o = GET(require('fs')['readFileSync'](a0_0x1b9758(0x1ce), a0_0x1b9758(0x1d9)));
function a0_0x5145(IXmyoo, key) {
    var stringArray = a0_0x31f2();
    a0_0x5145 = function (index, key) {
        index = index - 0x1c7;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5145(IXmyoo, key);
}
function xArray(v) {
    var _0x23a2b2 = a0_0x1b9758;
    var a = arguments, l = a[_0x23a2b2(0x1ca)], r = _0x23a2b2(0x1cd) + --l + _0x23a2b2(0x1cc) + v + _0x23a2b2(0x1c8);
    while (--l)
        r = _0x23a2b2(0x1cd) + l + ']).fill(0).map(x=>' + r + ')';
    return eval(r);
}
console[a0_0x1b9758(0x1d0)](main());
function main() {
    var n = o['a']();
    return n * n * n;
}