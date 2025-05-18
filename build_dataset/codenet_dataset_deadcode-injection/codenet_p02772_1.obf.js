const a0_0x61431b = a0_0x2c31;
function a0_0x3c57() {
    const _0x29208c = [
        'split',
        'shift',
        'map',
        'length',
        'aKOnl',
        'FmgWx',
        'rbriN',
        'GDwoD',
        'XZNgr',
        'log',
        'DENIED',
        'APPROVED',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3c57 = function () {
        return _0x29208c;
    };
    return a0_0x3c57();
}
function Main(input) {
    const _0x55d706 = a0_0x2c31;
    input = input[_0x55d706(0x0)]('\x0a');
    const N = input[_0x55d706(0x1)]();
    const A = input[_0x55d706(0x2)](v => parseInt(v));
    f = ![];
    for (i = 0x0; i < A[_0x55d706(0x3)]; i++) {
        if (_0x55d706(0x4) !== _0x55d706(0x5)) {
            if (A[i] % 0x2 == 0x0) {
                if (_0x55d706(0x6) === _0x55d706(0x7)) {
                    f = !![];
                } else {
                    if (A[i] % 0x3 != 0x0 && A[i] % 0x5 != 0x0) {
                        if (_0x55d706(0x8) !== _0x55d706(0x8)) {
                            if (A[i] % 0x2 == 0x0) {
                                if (A[i] % 0x3 != 0x0 && A[i] % 0x5 != 0x0) {
                                    f = !![];
                                }
                            }
                        } else {
                            f = !![];
                        }
                    }
                }
            }
        } else {
            console[_0x55d706(0x9)]('APPROVED');
        }
    }
    if (f) {
        console['log'](_0x55d706(0xa));
    } else {
        console[_0x55d706(0x9)](_0x55d706(0xb));
    }
}
function a0_0x2c31(WrlmCj, key) {
    const stringArray = a0_0x3c57();
    a0_0x2c31 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2c31(WrlmCj, key);
}
Main(require('fs')[a0_0x61431b(0xc)](a0_0x61431b(0xd), a0_0x61431b(0xe)));