function a0_0x1db5(CWpUZv, key) {
    const stringArray = a0_0xb4e8();
    a0_0x1db5 = function (index, key) {
        index = index - 0x1c0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1db5(CWpUZv, key);
}
const a0_0x21f383 = a0_0x1db5;
(function (stringArrayFunction, comparisonValue) {
    const _0x278a3c = a0_0x1db5;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x278a3c(0x1c5)) / 0x1 * (parseInt(_0x278a3c(0x1d1)) / 0x2) + parseInt(_0x278a3c(0x1cb)) / 0x3 * (parseInt(_0x278a3c(0x1ca)) / 0x4) + parseInt(_0x278a3c(0x1c0)) / 0x5 + parseInt(_0x278a3c(0x1ce)) / 0x6 + parseInt(_0x278a3c(0x1c8)) / 0x7 * (-parseInt(_0x278a3c(0x1c7)) / 0x8) + -parseInt(_0x278a3c(0x1d0)) / 0x9 * (-parseInt(_0x278a3c(0x1c2)) / 0xa) + -parseInt(_0x278a3c(0x1c1)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xb4e8, 0xb3ee7));
function Main(input) {
    const _0x58eac8 = a0_0x1db5;
    input = input['trim']()[_0x58eac8(0x1d2)]('\x0a')[_0x58eac8(0x1cc)](function (x) {
        const _0x3c3d76 = _0x58eac8;
        return x[_0x3c3d76(0x1d2)]('\x20');
    });
    let C = 0x3b9aca00 + 0x7;
    let H = parseInt(input[0x0][0x0], 0xa);
    let W = parseInt(input[0x0][0x1], 0xa);
    let DP = [];
    for (let i = 0x0; i < H; i++) {
        DP[_0x58eac8(0x1c9)](Array['from']({ 'length': W }, () => 0x0));
    }
    DP[0x0][0x0] = 0x1;
    for (let i = 0x1; i < H + W - 0x1; i++) {
        for (let j = 0x0; j <= Math[_0x58eac8(0x1c6)](i, H - 0x1); j++) {
            if (input[j + 0x1][0x0][i - j] === '#' || i - j >= W)
                continue;
            if (j > 0x0 && i - j > 0x0) {
                DP[j][i - j] = (DP[j - 0x1][i - j] + DP[j][i - j - 0x1]) % C;
            } else if (j > 0x0) {
                DP[j][i - j] = DP[j - 0x1][i - j];
            } else {
                DP[j][i - j] = DP[j][i - j - 0x1];
            }
        }
    }
    console[_0x58eac8(0x1c4)](DP[_0x58eac8(0x1cf)]()[_0x58eac8(0x1cf)]());
}
function a0_0xb4e8() {
    const _0x1e95f9 = [
        '1jVYZSq',
        'min',
        '296rjLZSH',
        '110019vyCVFr',
        'push',
        '1252776LliZZD',
        '9RQQhEl',
        'map',
        'readFileSync',
        '1236060lizVXv',
        'pop',
        '90xOQTLO',
        '1725586vTQWby',
        'split',
        '3155745zrFiPo',
        '9283450tMzxsT',
        '1248530shjhTF',
        'utf8',
        'log'
    ];
    a0_0xb4e8 = function () {
        return _0x1e95f9;
    };
    return a0_0xb4e8();
}
Main(require('fs')[a0_0x21f383(0x1cd)]('/dev/stdin', a0_0x21f383(0x1c3)));