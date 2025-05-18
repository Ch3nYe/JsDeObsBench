const a0_0x3c832c = a0_0x5c4e;
(function (stringArrayFunction, comparisonValue) {
    const _0x1753c3 = a0_0x5c4e;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x1753c3(0x159)) / 0x1 * (parseInt(_0x1753c3(0x15e)) / 0x2) + -parseInt(_0x1753c3(0x163)) / 0x3 * (parseInt(_0x1753c3(0x15f)) / 0x4) + parseInt(_0x1753c3(0x160)) / 0x5 + -parseInt(_0x1753c3(0x156)) / 0x6 * (parseInt(_0x1753c3(0x15c)) / 0x7) + parseInt(_0x1753c3(0x164)) / 0x8 * (parseInt(_0x1753c3(0x161)) / 0x9) + parseInt(_0x1753c3(0x155)) / 0xa + -parseInt(_0x1753c3(0x158)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1d36, 0x7756e));
function a0_0x5c4e(encvGK, key) {
    const stringArray = a0_0x1d36();
    a0_0x5c4e = function (index, key) {
        index = index - 0x154;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5c4e(encvGK, key);
}
console[a0_0x3c832c(0x168)](function (args) {
    const _0x38e957 = a0_0x3c832c;
    const tmp = args[_0x38e957(0x169)]()[_0x38e957(0x162)]('\x0a')[_0x38e957(0x166)](r => r[_0x38e957(0x162)]('\x20'));
    const N = tmp[_0x38e957(0x15a)]()[0x0] | 0x0;
    const p = tmp[0x0][_0x38e957(0x166)](parseFloat);
    const dp = Array(N)[_0x38e957(0x15d)](0x0)[_0x38e957(0x166)](r => Array(N + 0x1)['fill'](0x0));
    dp[0x0][0x0] = 0x1 - p[0x0];
    dp[0x0][0x1] = p[0x0];
    for (let i = 0x0; i < N - 0x1; i++) {
        for (let j = 0x0; j <= i + 0x1; j++) {
            dp[i + 0x1][j + 0x1] += dp[i][j] * p[i + 0x1];
            dp[i + 0x1][j] += dp[i][j] * (0x1 - p[i + 0x1]);
        }
    }
    return dp[N - 0x1][_0x38e957(0x157)]((N + 0x1) / 0x2)[_0x38e957(0x167)]((a, b) => a + b)['toString']();
}(require('fs')[a0_0x3c832c(0x165)](a0_0x3c832c(0x154), a0_0x3c832c(0x15b))));
function a0_0x1d36() {
    const _0x3916c9 = [
        '/dev/stdin',
        '4269520SFQUHu',
        '6pGLFDt',
        'slice',
        '2334123UtkItL',
        '1271CeVySz',
        'shift',
        'utf8',
        '4541453bNeSup',
        'fill',
        '1174heqgld',
        '3808XnjeRE',
        '1188290auFDfA',
        '11331PSXybx',
        'split',
        '2862AFLMFz',
        '5384vtTurj',
        'readFileSync',
        'map',
        'reduce',
        'log',
        'trim'
    ];
    a0_0x1d36 = function () {
        return _0x3916c9;
    };
    return a0_0x1d36();
}