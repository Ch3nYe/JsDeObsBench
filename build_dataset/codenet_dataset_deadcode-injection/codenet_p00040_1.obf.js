var a0_0x5ab693 = a0_0x12cd;
function a0_0x12cd(wuGmoz, key) {
    var stringArray = a0_0x4973();
    a0_0x12cd = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x12cd(wuGmoz, key);
}
function a0_0x4973() {
    var _0x12906f = [
        'replace',
        'split',
        'shift',
        'pIflh',
        'this',
        'that',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'dlntv',
        'map',
        'fromCharCode',
        'charCodeAt',
        'join',
        'eovFr',
        'length',
        'BpnSR',
        'OKqGM'
    ];
    a0_0x4973 = function () {
        return _0x12906f;
    };
    return a0_0x4973();
}
(function (input) {
    var _0x420a53 = a0_0x12cd;
    var p = input[_0x420a53(0x0)](/\n$/, '')[_0x420a53(0x1)]('\x0a');
    var n = Number(p[_0x420a53(0x2)]());
    for (var i = 0x0; i < n; i++) {
        if ('PbYjn' === _0x420a53(0x3)) {
            var s = conv_(str, [
                i,
                j
            ]);
            if (s === _0x420a53(0x4) || s === _0x420a53(0x5)) {
                return [
                    i,
                    j
                ];
            }
        } else {
            console[_0x420a53(0x6)](conv(p[_0x420a53(0x2)]()));
        }
    }
}(require('fs')[a0_0x5ab693(0x7)](a0_0x5ab693(0x8), a0_0x5ab693(0x9))));
function conv(s) {
    var _0x50223f = a0_0x12cd;
    a = s['split']('\x20');
    for (var i = 0x0; i < a['length']; i++) {
        var r = check(a[i]);
        if (r) {
            if (_0x50223f(0xa) !== _0x50223f(0xa)) {
                var a = r[0x0];
                var b = r[0x1];
                var s = s[_0x50223f(0x1)]('')[_0x50223f(0xb)](function (e) {
                    var _0x5e6b29 = a0_0x12cd;
                    if (e === '\x20') {
                        return e;
                    }
                    return String[_0x5e6b29(0xc)]((a * e['charCodeAt'](0x0) + b) % 0x1a + 'a'[_0x5e6b29(0xd)](0x0));
                })[_0x50223f(0xe)]('');
                return s;
            } else {
                return conv_(s, r);
            }
        }
    }
    return s;
}
function conv_(s, r) {
    var _0x512f06 = a0_0x12cd;
    var a = r[0x0];
    var b = r[0x1];
    var s = s['split']('')[_0x512f06(0xb)](function (e) {
        var _0x19cccc = a0_0x12cd;
        if (_0x19cccc(0xf) === 'ZfkAy') {
            var r = check(a[i]);
            if (r) {
                return conv_(s, r);
            }
        } else {
            if (e === '\x20') {
                return e;
            }
            return String[_0x19cccc(0xc)]((a * e['charCodeAt'](0x0) + b) % 0x1a + 'a'[_0x19cccc(0xd)](0x0));
        }
    })['join']('');
    return s;
}
function check(str) {
    var _0x59dba5 = a0_0x12cd;
    if (str[_0x59dba5(0x10)] !== 0x4) {
        return ![];
    }
    for (var i = 0x0; i < 0x1a; i++) {
        for (var j = 0x0; j < 0x1a; j++) {
            if (_0x59dba5(0x11) !== _0x59dba5(0x12)) {
                var s = conv_(str, [
                    i,
                    j
                ]);
                if (s === _0x59dba5(0x4) || s === 'that') {
                    return [
                        i,
                        j
                    ];
                }
            } else {
                a = s[_0x59dba5(0x1)]('\x20');
                for (var i = 0x0; i < a['length']; i++) {
                    var r = check(a[i]);
                    if (r) {
                        return conv_(s, r);
                    }
                }
                return s;
            }
        }
    }
    return ![];
}