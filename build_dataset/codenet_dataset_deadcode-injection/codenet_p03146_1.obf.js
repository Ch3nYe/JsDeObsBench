const a0_0x54493c = a0_0x237b;
function a0_0x237b(ZmDZsc, key) {
    const stringArray = a0_0x4347();
    a0_0x237b = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x237b(ZmDZsc, key);
}
function a0_0x4347() {
    const _0x1062da = [
        'BpCgG',
        'PeHAG',
        'trim',
        'split',
        'MkbHn',
        'log',
        'acnfG',
        'UgRCL',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4347 = function () {
        return _0x1062da;
    };
    return a0_0x4347();
}
const collatz = n => {
    const _0x398456 = a0_0x237b;
    if (n % 0x2 === 0x0) {
        if (_0x398456(0x0) === _0x398456(0x1)) {
            n /= 0x2;
        } else {
            n /= 0x2;
        }
    } else {
        n = 0x3 * n + 0x1;
    }
    return n;
};
const main = stdin => {
    const _0x1f2492 = a0_0x237b;
    const input = stdin[_0x1f2492(0x2)]()[_0x1f2492(0x3)]('\x0a');
    const s = parseInt(input[0x0]);
    if (s === 0x1 || s === 0x2 || s === 0x4) {
        if ('KmdQr' !== _0x1f2492(0x4)) {
            console[_0x1f2492(0x5)](0x4);
            return;
        } else {
            first = i;
        }
    }
    let tmp = s;
    let first = 0x0;
    let second = 0x0;
    for (let i = 0x1;; i++) {
        if ('UrVJF' === 'UrVJF') {
            if (tmp === 0x4 && first === 0x0) {
                if (_0x1f2492(0x6) !== _0x1f2492(0x6)) {
                    if (n % 0x2 === 0x0) {
                        n /= 0x2;
                    } else {
                        n = 0x3 * n + 0x1;
                    }
                    return n;
                } else {
                    first = i;
                }
            } else if (tmp === 0x4 && first !== 0x0) {
                if (_0x1f2492(0x7) !== 'MWwLm') {
                    second = i;
                    break;
                } else {
                    console[_0x1f2492(0x5)](0x4);
                    return;
                }
            }
            tmp = collatz(tmp);
        } else {
            n = 0x3 * n + 0x1;
        }
    }
    console[_0x1f2492(0x5)](second);
};
main(require('fs')[a0_0x54493c(0x8)](a0_0x54493c(0x9), a0_0x54493c(0xa)));