const a0_0x3b2939 = a0_0x29f8;
(function (stringArrayFunction, comparisonValue) {
    const _0x38aa92 = a0_0x29f8;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x38aa92(0x1f3)) / 0x1 + -parseInt(_0x38aa92(0x1f6)) / 0x2 + parseInt(_0x38aa92(0x1f8)) / 0x3 * (-parseInt(_0x38aa92(0x1fd)) / 0x4) + parseInt(_0x38aa92(0x1f5)) / 0x5 * (parseInt(_0x38aa92(0x1f1)) / 0x6) + parseInt(_0x38aa92(0x1f4)) / 0x7 * (-parseInt(_0x38aa92(0x1fc)) / 0x8) + -parseInt(_0x38aa92(0x1f2)) / 0x9 + parseInt(_0x38aa92(0x1fa)) / 0xa * (parseInt(_0x38aa92(0x1ff)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x316c, 0xc0e28));
function Main(input) {
    const _0x13ca26 = a0_0x29f8;
    const Param = input[_0x13ca26(0x1fb)]('\x20');
    const N = i(Param[0x0]);
    const M = i(Param[0x1]);
    const K = i(Param[0x2]);
    for (var n = 0x0; n < N; n++) {
        for (var m = 0x0; m < M; m++) {
            var b = calcBlack(n, m, N, M);
            if (b == K)
                return console[_0x13ca26(0x1fe)]('Yes');
        }
    }
    console[_0x13ca26(0x1fe)]('No');
}
function a0_0x29f8(vujwjc, key) {
    const stringArray = a0_0x316c();
    a0_0x29f8 = function (index, key) {
        index = index - 0x1f1;
        let value = stringArray[index];
        return value;
    };
    return a0_0x29f8(vujwjc, key);
}
function calcBlack(n, m, N, M) {
    return N * n - m * n + (M * m - n * m);
}
function a0_0x316c() {
    const _0x5e174b = [
        '56340hpcAbm',
        '2470238KvaZDp',
        'readFileSync',
        '3MofqhJ',
        'utf8',
        '70VRvNIT',
        'split',
        '216DXsZQE',
        '1390852EXGZzN',
        'log',
        '3754289zAkHKC',
        '690UIntDx',
        '8846739yiqYjr',
        '910273WCrdlW',
        '321307GfFigT'
    ];
    a0_0x316c = function () {
        return _0x5e174b;
    };
    return a0_0x316c();
}
function i(x) {
    return parseInt(x, 0xa);
}
Main(require('fs')[a0_0x3b2939(0x1f7)]('/dev/stdin', a0_0x3b2939(0x1f9)));