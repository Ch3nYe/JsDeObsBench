const a0_0x2fea0c = a0_0xd172;
(function (stringArrayFunction, comparisonValue) {
    const _0x3155da = a0_0xd172;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x3155da(0x1c5)) / 0x1 + parseInt(_0x3155da(0x1bf)) / 0x2 + parseInt(_0x3155da(0x1c6)) / 0x3 * (-parseInt(_0x3155da(0x1bc)) / 0x4) + parseInt(_0x3155da(0x1c1)) / 0x5 * (parseInt(_0x3155da(0x1c3)) / 0x6) + -parseInt(_0x3155da(0x1b7)) / 0x7 * (-parseInt(_0x3155da(0x1b8)) / 0x8) + -parseInt(_0x3155da(0x1c0)) / 0x9 * (-parseInt(_0x3155da(0x1bb)) / 0xa) + parseInt(_0x3155da(0x1b6)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3285, 0x51bb3));
function a0_0xd172(asezzC, key) {
    const stringArray = a0_0x3285();
    a0_0xd172 = function (index, key) {
        index = index - 0x1b6;
        let value = stringArray[index];
        return value;
    };
    return a0_0xd172(asezzC, key);
}
function Main(input) {
    const _0x48405a = a0_0xd172;
    input = input[_0x48405a(0x1bd)]()[_0x48405a(0x1b9)]('\x0a')[_0x48405a(0x1c2)](function (x) {
        return x['split']('\x20');
    });
    let M = parseInt(input[0x0][0x0], 0xa);
    let ans = -0x1;
    let tmp = 0x0;
    for (let i = 0x0; i < M; i++) {
        ans += parseInt(input[i + 0x1][0x1], 0xa);
        tmp += parseInt(input[i + 0x1][0x0], 0xa) * parseInt(input[i + 0x1][0x1], 0xa);
    }
    ans += Math[_0x48405a(0x1be)]((tmp - 0x1) / 0x9);
    console['log'](ans);
}
Main(require('fs')[a0_0x2fea0c(0x1c7)](a0_0x2fea0c(0x1c4), a0_0x2fea0c(0x1ba)));
function a0_0x3285() {
    const _0x191639 = [
        'utf8',
        '2380yAypYk',
        '559796QDvDDp',
        'trim',
        'floor',
        '408222cBdhXV',
        '19665lajEHD',
        '10WOaeRz',
        'map',
        '25626xUEEmd',
        '/dev/stdin',
        '394712FVBhtH',
        '9Ngscta',
        'readFileSync',
        '682704TnQHNY',
        '7rMJrie',
        '2836664JAZrZf',
        'split'
    ];
    a0_0x3285 = function () {
        return _0x191639;
    };
    return a0_0x3285();
}