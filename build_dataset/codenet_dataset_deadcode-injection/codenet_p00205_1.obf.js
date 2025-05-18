var a0_0x32d9a9 = a0_0x262a;
function main() {
    var _0x2a04a0 = a0_0x262a;
    var hands, pattern, swap, i = 0x0, j;
    for (;;) {
        if ('rpPXn' === _0x2a04a0(0x0)) {
            if (input[i] == 0x0)
                break;
            hands = [];
            for (j = 0x0; j < 0x5; j++) {
                if ('xmysv' === _0x2a04a0(0x1)) {
                    hands[_0x2a04a0(0x2)](Number(input[i++]));
                } else {
                    return pat[h] = !![], pat;
                }
            }
            pattern = hands[_0x2a04a0(0x3)](function (pat, h) {
                return pat[h] = !![], pat;
            }, {});
            keys = Object[_0x2a04a0(0x4)](pattern)['map'](Number)[_0x2a04a0(0x5)](function (x, y) {
                return x - y;
            });
            if (keys['length'] === 0x2) {
                if (keys[0x1] - keys[0x0] == 0x2) {
                    swap = keys[0x0];
                    keys[0x0] = keys[0x1];
                    keys[0x1] = swap;
                }
                hands[_0x2a04a0(0x6)](function (h) {
                    var _0x2400a1 = a0_0x262a;
                    console[_0x2400a1(0x7)](keys[_0x2400a1(0x8)](h) + 0x1);
                });
            } else {
                if (_0x2a04a0(0x9) === _0x2a04a0(0xa)) {
                    input += chunk;
                } else {
                    hands['forEach'](function () {
                        var _0x16cdd9 = a0_0x262a;
                        console[_0x16cdd9(0x7)](0x3);
                    });
                }
            }
        } else {
            console[_0x2a04a0(0x7)](0x3);
        }
    }
}
function a0_0x5229() {
    var _0x3f0492 = [
        'rpPXn',
        'xmysv',
        'push',
        'reduce',
        'keys',
        'sort',
        'forEach',
        'log',
        'indexOf',
        'jwUGS',
        'sdErB',
        'stdin',
        'resume',
        'utf8',
        'data'
    ];
    a0_0x5229 = function () {
        return _0x3f0492;
    };
    return a0_0x5229();
}
var input = '';
process[a0_0x32d9a9(0xb)][a0_0x32d9a9(0xc)]();
process['stdin']['setEncoding'](a0_0x32d9a9(0xd));
process[a0_0x32d9a9(0xb)]['on'](a0_0x32d9a9(0xe), function (chunk) {
    input += chunk;
});
function a0_0x262a(sWiaKg, key) {
    var stringArray = a0_0x5229();
    a0_0x262a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x262a(sWiaKg, key);
}
process['stdin']['on']('end', function () {
    input = input['split']('\x0a');
    main();
});