var a0_0x489145 = a0_0x517f;
(function (stringArrayFunction, comparisonValue) {
    var _0x1ab397 = a0_0x517f;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x1ab397(0x116)) / 0x1 * (-parseInt(_0x1ab397(0x10c)) / 0x2) + -parseInt(_0x1ab397(0x10b)) / 0x3 + -parseInt(_0x1ab397(0x106)) / 0x4 * (-parseInt(_0x1ab397(0x114)) / 0x5) + parseInt(_0x1ab397(0x109)) / 0x6 + parseInt(_0x1ab397(0x103)) / 0x7 * (parseInt(_0x1ab397(0x10e)) / 0x8) + parseInt(_0x1ab397(0x107)) / 0x9 * (-parseInt(_0x1ab397(0x108)) / 0xa) + -parseInt(_0x1ab397(0x102)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4732, 0xf2068));
function main() {
    var _0x1ec9e2 = a0_0x517f;
    var hands, pattern, swap, i = 0x0, j;
    for (;;) {
        if (input[i] == 0x0)
            break;
        hands = [];
        for (j = 0x0; j < 0x5; j++) {
            hands['push'](Number(input[i++]));
        }
        pattern = hands[_0x1ec9e2(0x10a)](function (pat, h) {
            return pat[h] = !![], pat;
        }, {});
        keys = Object[_0x1ec9e2(0x110)](pattern)[_0x1ec9e2(0x112)](Number)[_0x1ec9e2(0x113)](function (x, y) {
            return x - y;
        });
        if (keys['length'] === 0x2) {
            if (keys[0x1] - keys[0x0] == 0x2) {
                swap = keys[0x0];
                keys[0x0] = keys[0x1];
                keys[0x1] = swap;
            }
            hands[_0x1ec9e2(0x115)](function (h) {
                var _0x4e42e3 = _0x1ec9e2;
                console[_0x4e42e3(0x111)](keys[_0x4e42e3(0x105)](h) + 0x1);
            });
        } else {
            hands[_0x1ec9e2(0x115)](function () {
                var _0x13a465 = _0x1ec9e2;
                console[_0x13a465(0x111)](0x3);
            });
        }
    }
}
function a0_0x4732() {
    var _0x4375b0 = [
        '12OaOmhU',
        'utf8',
        '8gDpJLv',
        'resume',
        'keys',
        'log',
        'map',
        'sort',
        '10BhUflS',
        'forEach',
        '234611phaGXS',
        'end',
        '2146815qcITWe',
        '277158ThxFyZ',
        'stdin',
        'indexOf',
        '1654192eMMRQq',
        '63nnistR',
        '849790axXexF',
        '247668OciKxT',
        'reduce',
        '1602840tfYTFc'
    ];
    a0_0x4732 = function () {
        return _0x4375b0;
    };
    return a0_0x4732();
}
var input = '';
process[a0_0x489145(0x104)][a0_0x489145(0x10f)]();
function a0_0x517f(SCdYDV, key) {
    var stringArray = a0_0x4732();
    a0_0x517f = function (index, key) {
        index = index - 0x102;
        var value = stringArray[index];
        return value;
    };
    return a0_0x517f(SCdYDV, key);
}
process[a0_0x489145(0x104)]['setEncoding'](a0_0x489145(0x10d));
process[a0_0x489145(0x104)]['on']('data', function (chunk) {
    input += chunk;
});
process[a0_0x489145(0x104)]['on'](a0_0x489145(0x117), function () {
    input = input['split']('\x0a');
    main();
});