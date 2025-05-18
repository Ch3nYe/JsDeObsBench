var a0_0x4baeb7 = a0_0xb26b;
function a0_0x248c() {
    var _0x45dae7 = [
        'split',
        'zRWVL',
        'GgnkS',
        'joFRA',
        'FSadO',
        'eQjHW',
        'seqfb',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x248c = function () {
        return _0x45dae7;
    };
    return a0_0x248c();
}
function main(input) {
    var _0x1b474e = a0_0xb26b;
    var tmp = input[_0x1b474e(0x0)](/\r\n|\r|\n/);
    var N = Number(tmp[0x0]);
    var S = tmp[0x1][_0x1b474e(0x0)]('');
    var res;
    var i = 0x0;
    var isYoko;
    if (S[i] == S[i + 0x1]) {
        res = 0x6;
        i = i + 0x2;
        isYoko = !![];
    } else {
        res = 0x3;
        i++;
        isYoko = ![];
    }
    for (; i < N - 0x1; i++) {
        if (S[i] == S[i + 0x1]) {
            if (isYoko) {
                if (_0x1b474e(0x1) === _0x1b474e(0x2)) {
                    if (isYoko) {
                        res = res * 0x3;
                    } else {
                        res = res * 0x2;
                    }
                    i++;
                    isYoko = !![];
                } else {
                    res = res * 0x3;
                }
            } else {
                res = res * 0x2;
            }
            i++;
            isYoko = !![];
        } else {
            if (!isYoko) {
                if ('joFRA' !== _0x1b474e(0x3)) {
                    res = res * 0x2;
                } else {
                    res = res * 0x2;
                }
            }
            isYoko = ![];
        }
    }
    if (i < N) {
        if ('Vcfdh' === _0x1b474e(0x4)) {
            if (!isYoko) {
                res = res * 0x2;
            }
            isYoko = ![];
        } else {
            if (!isYoko) {
                if (_0x1b474e(0x5) === _0x1b474e(0x6)) {
                    res = res * 0x2;
                } else {
                    res = res * 0x2;
                }
            }
        }
    }
    console[_0x1b474e(0x7)](res % 0x3b9aca07);
}
function a0_0xb26b(xxciMX, key) {
    var stringArray = a0_0x248c();
    a0_0xb26b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xb26b(xxciMX, key);
}
main(require('fs')[a0_0x4baeb7(0x8)](a0_0x4baeb7(0x9), a0_0x4baeb7(0xa)));