function a0_0x316c(etCnRs, key) {
    const stringArray = a0_0x551c();
    a0_0x316c = function (index, key) {
        index = index - 0x76;
        let value = stringArray[index];
        return value;
    };
    return a0_0x316c(etCnRs, key);
}
const a0_0x15d506 = a0_0x316c;
(function (stringArrayFunction, comparisonValue) {
    const _0x70e701 = a0_0x316c;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x70e701(0x80)) / 0x1 + parseInt(_0x70e701(0x83)) / 0x2 + -parseInt(_0x70e701(0x77)) / 0x3 + parseInt(_0x70e701(0x7c)) / 0x4 + -parseInt(_0x70e701(0x7b)) / 0x5 * (parseInt(_0x70e701(0x76)) / 0x6) + parseInt(_0x70e701(0x81)) / 0x7 + parseInt(_0x70e701(0x85)) / 0x8 * (-parseInt(_0x70e701(0x7a)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x551c, 0x3cd61));
function Main(input) {
    const _0xf58799 = a0_0x316c;
    input = input[_0xf58799(0x7e)]()['split']('\x0a')[_0xf58799(0x84)](function (x) {
        return x['split']('\x20');
    });
    let N = parseInt(input[0x0][0x0], 0xa);
    let v_h = input[0x1][_0xf58799(0x84)](e => parseInt(e, 0xa));
    let DP = [
        0x0,
        Math[_0xf58799(0x79)](v_h[0x1] - v_h[0x0])
    ];
    let x1, x2;
    for (let i = 0x2; i < N; i++) {
        x1 = DP[i - 0x2] + Math[_0xf58799(0x79)](v_h[i] - v_h[i - 0x2]);
        x2 = DP[i - 0x1] + Math[_0xf58799(0x79)](v_h[i] - v_h[i - 0x1]);
        DP[_0xf58799(0x78)](Math['min'](x1, x2));
    }
    console[_0xf58799(0x82)](DP[N - 0x1]);
}
function a0_0x551c() {
    const _0x2226d2 = [
        '484535FYCXBp',
        '2977450MLlHpV',
        'log',
        '829564hsmnRN',
        'map',
        '3163168BSDWJV',
        'readFileSync',
        '23988dPXfgr',
        '1335789ecZCVM',
        'push',
        'abs',
        '18WezSYO',
        '5AEokbI',
        '658284ITVAyJ',
        'utf8',
        'trim',
        '/dev/stdin'
    ];
    a0_0x551c = function () {
        return _0x2226d2;
    };
    return a0_0x551c();
}
Main(require('fs')[a0_0x15d506(0x86)](a0_0x15d506(0x7f), a0_0x15d506(0x7d)));