const a0_0x51c5f1 = a0_0x106b;
function a0_0xb6b0() {
    const _0xa8b018 = [
        'split',
        'shift',
        'length',
        'lgevX',
        'hlgfZ',
        'push',
        'indexOf',
        'log',
        '/dev/stdin'
    ];
    a0_0xb6b0 = function () {
        return _0xa8b018;
    };
    return a0_0xb6b0();
}
function a0_0x106b(wlvUqw, key) {
    const stringArray = a0_0xb6b0();
    a0_0x106b = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x106b(wlvUqw, key);
}
function Main(input) {
    const _0x5c762f = a0_0x106b;
    tmp = input[_0x5c762f(0x0)]('\x0a');
    tmp2 = tmp[0x0][_0x5c762f(0x0)]('\x20');
    var n = parseInt(tmp2[0x0], 0xa);
    var k = parseInt(tmp2[0x1], 0xa);
    tmp[_0x5c762f(0x1)]();
    arry = tmp['slice']();
    list = [];
    count = 0x0;
    tmp3 = [];
    for (let i = 0x0; i < arry[_0x5c762f(0x2)]; i++) {
        if ('lgevX' === _0x5c762f(0x3)) {
            if (i % 0x2 !== 0x0) {
                if (_0x5c762f(0x4) === _0x5c762f(0x4)) {
                    arry[i] = arry[i][_0x5c762f(0x0)]('\x20');
                    tmp3 = arry[i]['map'](Number);
                    for (let index = 0x0; index < tmp3[_0x5c762f(0x2)]; index++) {
                        list[_0x5c762f(0x5)](tmp3[index]);
                    }
                } else {
                    count += 0x1;
                }
            }
        } else {
            if (list[_0x5c762f(0x6)](i) >= 0x0) {
            } else {
                count += 0x1;
            }
        }
    }
    for (let i = 0x1; i <= n; i++) {
        if (list[_0x5c762f(0x6)](i) >= 0x0) {
        } else {
            count += 0x1;
        }
    }
    console[_0x5c762f(0x7)](count);
}
Main(require('fs')['readFileSync'](a0_0x51c5f1(0x8), 'utf8'));