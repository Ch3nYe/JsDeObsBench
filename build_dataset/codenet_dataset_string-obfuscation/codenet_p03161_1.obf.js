function a0_0x462f() {
    const _0x2a1ae5 = [
        'push',
        '10fGajZd',
        'map',
        '1148516HQUOfz',
        'log',
        'readFileSync',
        '85dczBrl',
        '8xuMSmY',
        '585666onIXob',
        'split',
        'utf8',
        '2404846vweZET',
        '68322bzPRFd',
        '1027326xYwyxN',
        '/dev/stdin',
        '8609524DmaOeu',
        'abs',
        '152gdSZmB',
        '473494HjSvNx'
    ];
    a0_0x462f = function () {
        return _0x2a1ae5;
    };
    return a0_0x462f();
}
const a0_0x1a8554 = a0_0xa18e;
(function (stringArrayFunction, comparisonValue) {
    const _0x5bb286 = a0_0xa18e;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x5bb286(0xe1)) / 0x1 + -parseInt(_0x5bb286(0xe9)) / 0x2 + -parseInt(_0x5bb286(0xeb)) / 0x3 * (-parseInt(_0x5bb286(0xe5)) / 0x4) + parseInt(_0x5bb286(0xe4)) / 0x5 * (-parseInt(_0x5bb286(0xea)) / 0x6) + parseInt(_0x5bb286(0xf0)) / 0x7 * (parseInt(_0x5bb286(0xef)) / 0x8) + parseInt(_0x5bb286(0xe6)) / 0x9 * (-parseInt(_0x5bb286(0xf2)) / 0xa) + -parseInt(_0x5bb286(0xed)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x462f, 0xd5956));
function Main(input) {
    const _0x1d3af6 = a0_0xa18e;
    input = input[_0x1d3af6(0xe7)]('\x0a');
    const [N, K] = input[0x0]['split']('\x20')[_0x1d3af6(0xe0)](n => {
        return parseInt(n, 0xa);
    });
    const hn = input[0x1][_0x1d3af6(0xe7)]('\x20')[_0x1d3af6(0xe0)](n => {
        return parseInt(n, 0xa);
    });
    const h_max = Math['pow'](0xa, 0x9);
    console[_0x1d3af6(0xe2)](dp(N, K, hn, h_max));
}
function a0_0xa18e(KuAjoV, key) {
    const stringArray = a0_0x462f();
    a0_0xa18e = function (index, key) {
        index = index - 0xe0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xa18e(KuAjoV, key);
}
Main(require('fs')[a0_0x1a8554(0xe3)](a0_0x1a8554(0xec), a0_0x1a8554(0xe8)));
function dp(N, K, hn, h_max) {
    const _0x3cb547 = a0_0x1a8554;
    const dp = [];
    let dp_work = [];
    dp[0x0] = 0x0;
    for (var i = 0x1; i < N; i++) {
        dp['push'](h_max);
        dp_work = [];
        dp_work[_0x3cb547(0xf1)](dp[i]);
        for (var dp_work_i = 0x1; dp_work_i <= K; dp_work_i++) {
            if (i - dp_work_i < 0x0)
                continue;
            dp_work['push'](dp[i - dp_work_i] + Math[_0x3cb547(0xee)](hn[i - dp_work_i] - hn[i]));
        }
        dp[i] = Math['min'](...dp_work);
    }
    return dp[N - 0x1];
}