const a0_0x34ab88 = a0_0xae89;
const input = require('fs')[a0_0x34ab88(0x0)](a0_0x34ab88(0x1), a0_0x34ab88(0x2));
function a0_0xae89(lJRQRY, key) {
    const stringArray = a0_0x1d54();
    a0_0xae89 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xae89(lJRQRY, key);
}
(input => {
    const _0x2a7cbb = a0_0xae89;
    const lines = input['split']('\x0a');
    const N = lines[0x0] - 0x0;
    const X = lines[0x1];
    const popcount = n => {
        const _0x386941 = a0_0xae89;
        if (_0x386941(0x3) !== _0x386941(0x4)) {
            let count = 0x0;
            do {
                if (_0x386941(0x5) !== _0x386941(0x6)) {
                    n & 0x1 ? count++ : count;
                } else {
                    return 0x0;
                }
            } while (n = n >>> 0x1);
            return count;
        } else {
            console[_0x386941(0x7)](0x0);
        }
    };
    const f = n => {
        const _0x536039 = a0_0xae89;
        if (n === 0x0) {
            if (_0x536039(0x8) !== _0x536039(0x9)) {
                return 0x0;
            } else {
                let count = 0x0;
                do {
                    n & 0x1 ? count++ : count;
                } while (n = n >>> 0x1);
                return count;
            }
        }
        let count = 0x1;
        while (n %= popcount(n))
            count++;
        return count;
    };
    const x = parseInt(X, 0x2);
    const pr = popcount(x) - 0x1;
    const nx = popcount(x) + 0x1;
    for (let i = 0x0; i < N; i++) {
        if ('iFwEB' !== _0x2a7cbb(0xa)) {
            console[_0x2a7cbb(0x7)](f(n % (X[i] === '1' ? pr : nx)) + 0x1);
        } else {
            let n = x ^ Math[_0x2a7cbb(0xb)](0x2, N - i - 0x1);
            if (n === 0x0) {
                if ('NhfiK' !== _0x2a7cbb(0xc)) {
                    console[_0x2a7cbb(0x7)](0x0);
                } else {
                    let n = x ^ Math[_0x2a7cbb(0xb)](0x2, N - i - 0x1);
                    if (n === 0x0) {
                        console[_0x2a7cbb(0x7)](0x0);
                    } else {
                        console[_0x2a7cbb(0x7)](f(n % (X[i] === '1' ? pr : nx)) + 0x1);
                    }
                }
            } else {
                console['log'](f(n % (X[i] === '1' ? pr : nx)) + 0x1);
            }
        }
    }
})(input);
function a0_0x1d54() {
    const _0x31cfd2 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'fHXTt',
        'iwzZe',
        'XWoKX',
        'PUauG',
        'log',
        'ByXoE',
        'YsiKL',
        'iFwEB',
        'pow',
        'IuYNF'
    ];
    a0_0x1d54 = function () {
        return _0x31cfd2;
    };
    return a0_0x1d54();
}