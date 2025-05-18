var a0_0x42ada5 = a0_0x4dc3;
function a0_0x4dc3(vJukgy, key) {
    var stringArray = a0_0x1d37();
    a0_0x4dc3 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4dc3(vJukgy, key);
}
process[a0_0x42ada5(0x0)][a0_0x42ada5(0x1)]();
process[a0_0x42ada5(0x0)][a0_0x42ada5(0x2)](a0_0x42ada5(0x3));
var g_input = '';
process[a0_0x42ada5(0x0)]['on']('data', function (chunk) {
    g_input += chunk;
});
process[a0_0x42ada5(0x0)]['on']('end', function () {
    var _0x45c8e6 = a0_0x4dc3;
    main(g_input[_0x45c8e6(0x4)](/\r?\n/));
});
function main(inputs) {
    var _0x51fd9c = a0_0x4dc3;
    var N = parseInt(inputs[0x0]);
    var rs = inputs[0x1][_0x51fd9c(0x4)]('\x20')[_0x51fd9c(0x5)](function (a) {
        return parseInt(a);
    });
    var a = new Array(0x7)['fill'](![]);
    var a8 = 0x0;
    var count = 0x0;
    for (var i = 0x0; i < N; i++) {
        for (var j = 0x0; j < 0x9; j++) {
            if (j != 0x8) {
                if (rs[i] < (j + 0x1) * 0x190) {
                    if (!a[j]) {
                        if (_0x51fd9c(0x6) !== _0x51fd9c(0x7)) {
                            a[j] = !![];
                            count += 0x1;
                        } else {
                            min = 0x1;
                            if (a8 > 0x0) {
                                a8 -= 0x1;
                            }
                        }
                    }
                    break;
                }
            } else {
                if (_0x51fd9c(0x8) !== _0x51fd9c(0x9)) {
                    a8 += 0x1;
                } else {
                    a8 += 0x1;
                }
            }
        }
    }
    var min = count;
    if (min == 0x0 && N > 0x0) {
        if ('OEwJT' !== 'OEwJT') {
            main(g_input['split'](/\r?\n/));
        } else {
            min = 0x1;
            if (a8 > 0x0) {
                a8 -= 0x1;
            }
        }
    }
    var max = Math[_0x51fd9c(0xa)](0x8, min + a8);
    console[_0x51fd9c(0xb)]('' + min + '\x20' + max);
}
function a0_0x1d37() {
    var _0x4c8709 = [
        'stdin',
        'resume',
        'setEncoding',
        'utf8',
        'split',
        'map',
        'mNvxz',
        'yaicC',
        'QKsnT',
        'dNuUJ',
        'min',
        'log'
    ];
    a0_0x1d37 = function () {
        return _0x4c8709;
    };
    return a0_0x1d37();
}