var a0_0x2b074c = a0_0x25d9;
(function (stringArrayFunction, comparisonValue) {
    var _0x555c72 = a0_0x25d9;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x555c72(0x133)) / 0x1 + parseInt(_0x555c72(0x136)) / 0x2 * (parseInt(_0x555c72(0x137)) / 0x3) + parseInt(_0x555c72(0x126)) / 0x4 * (parseInt(_0x555c72(0x124)) / 0x5) + -parseInt(_0x555c72(0x135)) / 0x6 + -parseInt(_0x555c72(0x139)) / 0x7 + -parseInt(_0x555c72(0x12c)) / 0x8 * (-parseInt(_0x555c72(0x12b)) / 0x9) + parseInt(_0x555c72(0x12e)) / 0xa * (parseInt(_0x555c72(0x13a)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1107, 0xd5981));
function perm(xs, n, s, callback) {
    var _0x114c63 = a0_0x25d9;
    var x, i, len = xs['length'];
    s = s || [];
    if (n === 0x0) {
        callback(s);
    } else {
        for (i = 0x0; i < len; i++) {
            x = xs[_0x114c63(0x128)]();
            s[_0x114c63(0x12a)](x);
            perm(xs, n - 0x1, s, callback);
            s[_0x114c63(0x134)]();
            xs[_0x114c63(0x12a)](x);
        }
    }
}
function main() {
    var _0x377670 = a0_0x25d9;
    input[_0x377670(0x12d)](function (line) {
        var _0x290590 = _0x377670;
        var n, s, r = 0x0;
        if (line['trim']() === '')
            return;
        line = line[_0x290590(0x138)]('\x20')[_0x290590(0x127)](parseFloat);
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
            var _0x2274ed = _0x290590;
            r += xs[_0x2274ed(0x12f)](function (m, x, i) {
                return m + x * (i + 0x1);
            }, 0x0) === s ? 0x1 : 0x0;
        });
        console[_0x290590(0x132)](r);
    });
}
var input = '';
process[a0_0x2b074c(0x131)]['resume']();
process[a0_0x2b074c(0x131)]['setEncoding'](a0_0x2b074c(0x125));
function a0_0x25d9(uIJboF, key) {
    var stringArray = a0_0x1107();
    a0_0x25d9 = function (index, key) {
        index = index - 0x124;
        var value = stringArray[index];
        return value;
    };
    return a0_0x25d9(uIJboF, key);
}
process['stdin']['on'](a0_0x2b074c(0x130), function (chunk) {
    input += chunk;
});
process[a0_0x2b074c(0x131)]['on'](a0_0x2b074c(0x129), function () {
    var _0x400b0b = a0_0x2b074c;
    input = input[_0x400b0b(0x138)]('\x0a');
    main();
});
function a0_0x1107() {
    var _0x4644f9 = [
        '3aTsHlw',
        'split',
        '1303162idJpBf',
        '12509299iQYvsr',
        '645TIazYu',
        'utf8',
        '26628uvbGfP',
        'map',
        'shift',
        'end',
        'push',
        '9KYYrUd',
        '3986104PfyvgJ',
        'forEach',
        '10OBDkMA',
        'reduce',
        'data',
        'stdin',
        'log',
        '794480kkJyka',
        'pop',
        '8546742KHZxhm',
        '1571518YfKHGA'
    ];
    a0_0x1107 = function () {
        return _0x4644f9;
    };
    return a0_0x1107();
}