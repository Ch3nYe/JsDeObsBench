const a0_0x3bda05 = a0_0x1597;
function a0_0x1597(PltiIN, key) {
    const stringArray = a0_0x1299();
    a0_0x1597 = function (index, key) {
        index = index - 0xdc;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1597(PltiIN, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x5ba968 = a0_0x1597;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x5ba968(0xee)) / 0x1 + -parseInt(_0x5ba968(0xde)) / 0x2 * (-parseInt(_0x5ba968(0xe4)) / 0x3) + parseInt(_0x5ba968(0xe1)) / 0x4 * (parseInt(_0x5ba968(0xdf)) / 0x5) + -parseInt(_0x5ba968(0xec)) / 0x6 * (-parseInt(_0x5ba968(0xe6)) / 0x7) + -parseInt(_0x5ba968(0xdc)) / 0x8 * (parseInt(_0x5ba968(0xe3)) / 0x9) + -parseInt(_0x5ba968(0xe2)) / 0xa * (-parseInt(_0x5ba968(0xdd)) / 0xb) + -parseInt(_0x5ba968(0xe0)) / 0xc * (parseInt(_0x5ba968(0xea)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1299, 0x58371));
function a0_0x1299() {
    const _0x2ba2f7 = [
        '6240wgQjOL',
        '9vXidCi',
        '12cfvGFF',
        'readFileSync',
        '1889713KkSBkt',
        'split',
        'log',
        'map',
        '24006853JnypmU',
        'trim',
        '6PIyopC',
        'sort',
        '561443DxJVCk',
        '457544jkhknx',
        '7524mGoNJH',
        '231286CatpzM',
        '907355EYVjqo',
        '12TPotnC',
        '12rzSaUO'
    ];
    a0_0x1299 = function () {
        return _0x2ba2f7;
    };
    return a0_0x1299();
}
console[a0_0x3bda05(0xe8)]((args => {
    const _0x418007 = a0_0x3bda05;
    const [[N, T], t] = args[_0x418007(0xeb)]()[_0x418007(0xe7)]`\n`['map'](r => r[_0x418007(0xe7)]` `[_0x418007(0xe9)](v => v | 0x0));
    t[_0x418007(0xed)]((a, b) => a - b);
    let s = T;
    for (let i = 0x1; i < N; i++) {
        if (t[i - 0x1] + T > t[i])
            s += t[i] - t[i - 0x1];
        else
            s += T;
    }
    return '' + s;
})(require('fs')[a0_0x3bda05(0xe5)]('/dev/stdin', 'utf8')));