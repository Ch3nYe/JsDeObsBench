'use strict';
function main(input) {
    const zFXuJf = {
        'sDXhr': function (x, y) {
            return x < y;
        },
        'YEplS': function (callee, param1) {
            return callee(param1);
        },
        'aIyFm': function (x, y) {
            return x + y;
        },
        'xlJSc': function (x, y) {
            return x + y;
        },
        'vhhzv': function (x, y) {
            return x <= y;
        },
        'JnyNG': function (x, y) {
            return x - y;
        },
        'gExeu': function (x, y) {
            return x - y;
        },
        'sFQbx': function (x, y) {
            return x - y;
        },
        'NBHXR': function (x, y) {
            return x - y;
        }
    };
    const inputs = input['split']('\x0a');
    const L = Number(inputs[0x0]);
    const A = [];
    for (let i = 0x0; zFXuJf['sDXhr'](i, L); i++) {
        A['push'](zFXuJf['YEplS'](Number, inputs[zFXuJf['aIyFm'](i, 0x1)]));
    }
    const dp = Array(zFXuJf['xlJSc'](L, 0x1))['fill']()['map'](() => Array(0x5)['fill']());
    dp[0x0] = [
        0x0,
        0x0,
        0x0,
        0x0,
        0x0
    ];
    for (let i = 0x1; zFXuJf['vhhzv'](i, L); i++) {
        let cur = A[i - 0x1];
        let curEven = A[zFXuJf['JnyNG'](i, 0x1)] === 0x0 ? 0x2 : cur % 0x2;
        let curOdd = (cur + 0x1) % 0x2;
        dp[i][0x0] = zFXuJf['xlJSc'](dp[zFXuJf['JnyNG'](i, 0x1)][0x0], cur);
        dp[i][0x1] = zFXuJf['xlJSc'](Math['min'](dp[zFXuJf['gExeu'](i, 0x1)][0x0], dp[zFXuJf['sFQbx'](i, 0x1)][0x1]), curEven);
        dp[i][0x2] = zFXuJf['aIyFm'](Math['min'](dp[zFXuJf['gExeu'](i, 0x1)][0x0], dp[i - 0x1][0x1], dp[i - 0x1][0x2]), curOdd);
        dp[i][0x3] = zFXuJf['xlJSc'](Math['min'](dp[zFXuJf['JnyNG'](i, 0x1)][0x2], dp[zFXuJf['NBHXR'](i, 0x1)][0x3]), curEven);
        dp[i][0x4] = zFXuJf['aIyFm'](Math['min'](dp[zFXuJf['NBHXR'](i, 0x1)][0x2], dp[i - 0x1][0x3], dp[i - 0x1][0x4]), cur);
    }
    console['log'](Math['min'](...dp[L]));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));