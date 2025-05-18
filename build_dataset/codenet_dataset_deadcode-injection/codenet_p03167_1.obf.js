function a0_0x2356() {
    const _0x49aa6c = [
        'trim',
        'split',
        'map',
        'from',
        'ZPyWg',
        'HTArU',
        'DcvFB',
        'nuNbO',
        'pop',
        '/dev/stdin'
    ];
    a0_0x2356 = function () {
        return _0x49aa6c;
    };
    return a0_0x2356();
}
function a0_0x30e7(eJwnzP, key) {
    const stringArray = a0_0x2356();
    a0_0x30e7 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x30e7(eJwnzP, key);
}
const a0_0x1a38a0 = a0_0x30e7;
function Main(input) {
    const _0x24c502 = a0_0x30e7;
    input = input[_0x24c502(0x0)]()[_0x24c502(0x1)]('\x0a')[_0x24c502(0x2)](function (x) {
        return x['split']('\x20');
    });
    let C = 0x3b9aca00 + 0x7;
    let H = parseInt(input[0x0][0x0], 0xa);
    let W = parseInt(input[0x0][0x1], 0xa);
    let DP = [];
    for (let i = 0x0; i < H; i++) {
        DP['push'](Array[_0x24c502(0x3)]({ 'length': W }, () => 0x0));
    }
    DP[0x0][0x0] = 0x1;
    for (let i = 0x1; i < H + W - 0x1; i++) {
        for (let j = 0x0; j <= Math['min'](i, H - 0x1); j++) {
            if (_0x24c502(0x4) === 'ZPyWg') {
                if (input[j + 0x1][0x0][i - j] === '#' || i - j >= W)
                    continue;
                if (j > 0x0 && i - j > 0x0) {
                    DP[j][i - j] = (DP[j - 0x1][i - j] + DP[j][i - j - 0x1]) % C;
                } else if (j > 0x0) {
                    if (_0x24c502(0x5) === _0x24c502(0x5)) {
                        DP[j][i - j] = DP[j - 0x1][i - j];
                    } else {
                        DP[j][i - j] = DP[j - 0x1][i - j];
                    }
                } else {
                    if (_0x24c502(0x6) === _0x24c502(0x7)) {
                        return x[_0x24c502(0x1)]('\x20');
                    } else {
                        DP[j][i - j] = DP[j][i - j - 0x1];
                    }
                }
            } else {
                DP[j][i - j] = (DP[j - 0x1][i - j] + DP[j][i - j - 0x1]) % C;
            }
        }
    }
    console['log'](DP['pop']()[_0x24c502(0x8)]());
}
Main(require('fs')['readFileSync'](a0_0x1a38a0(0x9), 'utf8'));