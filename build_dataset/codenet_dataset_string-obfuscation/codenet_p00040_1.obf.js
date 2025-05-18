var a0_0x5ef68b = a0_0x31e8;
function a0_0x5af0() {
    var _0x14469d = [
        '/dev/stdin',
        'log',
        'shift',
        'replace',
        '1443162GXAvfk',
        'this',
        'map',
        '7Imbuay',
        '5lEQhfX',
        'split',
        '2BcGxau',
        '288jfiqDE',
        '429107IZsvzV',
        'readFileSync',
        '84fnhUJt',
        '5653420AcqOMo',
        'charCodeAt',
        '629199IKqIxe',
        '1846916vFRcWO',
        'length',
        '395197LYPqaI',
        'utf8',
        '5512fHYCJS'
    ];
    a0_0x5af0 = function () {
        return _0x14469d;
    };
    return a0_0x5af0();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x14672e = a0_0x31e8;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x14672e(0x1f9)) / 0x1 + -parseInt(_0x14672e(0x1f7)) / 0x2 * (parseInt(_0x14672e(0x1e7)) / 0x3) + parseInt(_0x14672e(0x1e8)) / 0x4 * (-parseInt(_0x14672e(0x1f5)) / 0x5) + -parseInt(_0x14672e(0x1f1)) / 0x6 * (parseInt(_0x14672e(0x1f4)) / 0x7) + -parseInt(_0x14672e(0x1ec)) / 0x8 * (parseInt(_0x14672e(0x1f8)) / 0x9) + parseInt(_0x14672e(0x1e5)) / 0xa + parseInt(_0x14672e(0x1ea)) / 0xb * (parseInt(_0x14672e(0x1e4)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5af0, 0x4c25d));
(function (input) {
    var _0x48a10d = a0_0x31e8;
    var p = input[_0x48a10d(0x1f0)](/\n$/, '')[_0x48a10d(0x1f6)]('\x0a');
    var n = Number(p[_0x48a10d(0x1ef)]());
    for (var i = 0x0; i < n; i++) {
        console[_0x48a10d(0x1ee)](conv(p[_0x48a10d(0x1ef)]()));
    }
}(require('fs')[a0_0x5ef68b(0x1fa)](a0_0x5ef68b(0x1ed), a0_0x5ef68b(0x1eb))));
function a0_0x31e8(nIgsNY, key) {
    var stringArray = a0_0x5af0();
    a0_0x31e8 = function (index, key) {
        index = index - 0x1e4;
        var value = stringArray[index];
        return value;
    };
    return a0_0x31e8(nIgsNY, key);
}
function conv(s) {
    var _0x193a43 = a0_0x5ef68b;
    a = s[_0x193a43(0x1f6)]('\x20');
    for (var i = 0x0; i < a[_0x193a43(0x1e9)]; i++) {
        var r = check(a[i]);
        if (r) {
            return conv_(s, r);
        }
    }
    return s;
}
function conv_(s, r) {
    var _0x58578d = a0_0x5ef68b;
    var a = r[0x0];
    var b = r[0x1];
    var s = s['split']('')[_0x58578d(0x1f3)](function (e) {
        var _0x3722c3 = _0x58578d;
        if (e === '\x20') {
            return e;
        }
        return String['fromCharCode']((a * e[_0x3722c3(0x1e6)](0x0) + b) % 0x1a + 'a'[_0x3722c3(0x1e6)](0x0));
    })['join']('');
    return s;
}
function check(str) {
    var _0x5a3dff = a0_0x5ef68b;
    if (str[_0x5a3dff(0x1e9)] !== 0x4) {
        return ![];
    }
    for (var i = 0x0; i < 0x1a; i++) {
        for (var j = 0x0; j < 0x1a; j++) {
            var s = conv_(str, [
                i,
                j
            ]);
            if (s === _0x5a3dff(0x1f2) || s === 'that') {
                return [
                    i,
                    j
                ];
            }
        }
    }
    return ![];
}