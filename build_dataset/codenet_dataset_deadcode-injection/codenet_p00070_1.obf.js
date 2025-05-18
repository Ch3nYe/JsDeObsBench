var a0_0x52b961 = a0_0x3e70;
function perm(xs, n, s, callback) {
    var _0x2a27ac = a0_0x3e70;
    var x, i, len = xs[_0x2a27ac(0x0)];
    s = s || [];
    if (n === 0x0) {
        if (_0x2a27ac(0x1) === _0x2a27ac(0x1)) {
            callback(s);
        } else {
            for (i = 0x0; i < len; i++) {
                x = xs[_0x2a27ac(0x2)]();
                s[_0x2a27ac(0x3)](x);
                perm(xs, n - 0x1, s, callback);
                s[_0x2a27ac(0x4)]();
                xs[_0x2a27ac(0x3)](x);
            }
        }
    } else {
        if ('XZrNF' === _0x2a27ac(0x5)) {
            for (i = 0x0; i < len; i++) {
                x = xs['shift']();
                s[_0x2a27ac(0x3)](x);
                perm(xs, n - 0x1, s, callback);
                s[_0x2a27ac(0x4)]();
                xs[_0x2a27ac(0x3)](x);
            }
        } else {
            input = input[_0x2a27ac(0x6)]('\x0a');
            main();
        }
    }
}
function a0_0x3e70(MdpjUI, key) {
    var stringArray = a0_0x112b();
    a0_0x3e70 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3e70(MdpjUI, key);
}
function main() {
    input['forEach'](function (line) {
        var _0x22d824 = a0_0x3e70;
        var n, s, r = 0x0;
        if (line[_0x22d824(0x7)]() === '')
            return;
        line = line[_0x22d824(0x6)]('\x20')[_0x22d824(0x8)](parseFloat);
        n = line[0x0];
        s = line[0x1];
        perm([
            0x0,
            0x1,
            0x2,
            0x3,
            0x4,
            0x5,
            0x6,
            0x7,
            0x8,
            0x9
        ], n, [], function (xs) {
            var _0x16e8eb = a0_0x3e70;
            r += xs[_0x16e8eb(0x9)](function (m, x, i) {
                var _0xf2a70 = a0_0x3e70;
                if (_0xf2a70(0xa) !== _0xf2a70(0xa)) {
                    input += chunk;
                } else {
                    return m + x * (i + 0x1);
                }
            }, 0x0) === s ? 0x1 : 0x0;
        });
        console[_0x22d824(0xb)](r);
    });
}
var input = '';
process[a0_0x52b961(0xc)][a0_0x52b961(0xd)]();
function a0_0x112b() {
    var _0x53a4c0 = [
        'length',
        'TyeWL',
        'shift',
        'push',
        'pop',
        'XZrNF',
        'split',
        'trim',
        'map',
        'reduce',
        'HCUQr',
        'log',
        'stdin',
        'resume',
        'setEncoding',
        'utf8',
        'data'
    ];
    a0_0x112b = function () {
        return _0x53a4c0;
    };
    return a0_0x112b();
}
process[a0_0x52b961(0xc)][a0_0x52b961(0xe)](a0_0x52b961(0xf));
process['stdin']['on'](a0_0x52b961(0x10), function (chunk) {
    input += chunk;
});
process[a0_0x52b961(0xc)]['on']('end', function () {
    var _0x4b9b3b = a0_0x3e70;
    input = input[_0x4b9b3b(0x6)]('\x0a');
    main();
});