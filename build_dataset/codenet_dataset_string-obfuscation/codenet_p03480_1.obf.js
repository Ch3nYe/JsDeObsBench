function a0_0x5376() {
    var _0x1510ef = [
        '1114971JxzCsR',
        'prototype',
        '4621855CCmHaJ',
        'length',
        'map',
        '4889508RUijGe',
        '9741876nUMhin',
        'split',
        '58jIevJS',
        '142723ITXOsp',
        'reverse',
        'trim',
        '232rpaQDj',
        '3914595CVRnoy',
        'slice',
        'pop',
        '/dev/stdin',
        '54449RTDIOp',
        'string'
    ];
    a0_0x5376 = function () {
        return _0x1510ef;
    };
    return a0_0x5376();
}
var a0_0x3a5b7f = a0_0x11f1;
(function (stringArrayFunction, comparisonValue) {
    var _0x1b36b1 = a0_0x11f1;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x1b36b1(0x141)) / 0x1 * (parseInt(_0x1b36b1(0x138)) / 0x2) + -parseInt(_0x1b36b1(0x143)) / 0x3 + parseInt(_0x1b36b1(0x135)) / 0x4 + -parseInt(_0x1b36b1(0x132)) / 0x5 + parseInt(_0x1b36b1(0x136)) / 0x6 + parseInt(_0x1b36b1(0x139)) / 0x7 * (parseInt(_0x1b36b1(0x13c)) / 0x8) + parseInt(_0x1b36b1(0x13d)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5376, 0xf375a));
var GET = (function () {
    var _0x61324a = a0_0x11f1;
    function f(s) {
        return new g(s);
    }
    function g(s) {
        var _0x788eda = a0_0x11f1;
        this['_s'] = s[_0x788eda(0x13b)]()['split']('\x0a');
        this['_y'] = 0x0;
    }
    g[_0x61324a(0x131)]['a'] = function (f) {
        var _0x3a5ee3 = _0x61324a;
        var s = this['_s'], y = this['_y'], r;
        if (typeof s[y] === _0x3a5ee3(0x142))
            s[y] = s[y]['split']('\x20')[_0x3a5ee3(0x13a)]();
        r = s[y][_0x3a5ee3(0x13f)]();
        if (!s[y][_0x3a5ee3(0x133)])
            this['_y']++;
        return f ? r : +r;
    };
    g[_0x61324a(0x131)]['l'] = function (f) {
        var _0x412a78 = _0x61324a;
        var s = this['_s'][this['_y']++]['split']('\x20');
        return f ? s : s[_0x412a78(0x134)](a => +a);
    };
    g[_0x61324a(0x131)]['m'] = function (n, f) {
        var _0x3f29c7 = _0x61324a;
        var r = this['_s'][_0x3f29c7(0x13e)](this['_y'], this['_y'] += n)['map'](a => a[_0x3f29c7(0x137)]('\x20'));
        return f ? r : r['map'](a => a[_0x3f29c7(0x134)](a => +a));
    };
    g[_0x61324a(0x131)]['r'] = function (n, f) {
        var _0x1df85b = _0x61324a;
        var r = this['_s'][_0x1df85b(0x13e)](this['_y'], this['_y'] += n);
        return f ? r : r[_0x1df85b(0x134)](a => +a);
    };
    return f;
}());
var o = GET(require('fs')['readFileSync'](a0_0x3a5b7f(0x140), 'utf8'));
function a0_0x11f1(NdzEcJ, key) {
    var stringArray = a0_0x5376();
    a0_0x11f1 = function (index, key) {
        index = index - 0x131;
        var value = stringArray[index];
        return value;
    };
    return a0_0x11f1(NdzEcJ, key);
}
console['log'](main());
function main() {
    var _0x1f5cf9 = a0_0x3a5b7f;
    var s = o['a'](0x1);
    var n = s[_0x1f5cf9(0x133)];
    var l = n + 0x1 >> 0x1, u, v = l;
    var f = s[l - 0x1];
    if (n & 0x1)
        u = l - 0x2;
    else
        u = l - 0x1;
    for (; u >= 0x0; u--, v++) {
        if (s[u] !== f || s[v] !== f)
            break;
        l++;
    }
    return l;
}