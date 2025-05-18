const a0_0x2c5ea6 = a0_0x411a;
(function (stringArrayFunction, comparisonValue) {
    const _0x2f106 = a0_0x411a;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x2f106(0x18b)) / 0x1 + -parseInt(_0x2f106(0x180)) / 0x2 + parseInt(_0x2f106(0x17f)) / 0x3 * (-parseInt(_0x2f106(0x17d)) / 0x4) + -parseInt(_0x2f106(0x186)) / 0x5 + parseInt(_0x2f106(0x184)) / 0x6 * (parseInt(_0x2f106(0x17c)) / 0x7) + -parseInt(_0x2f106(0x18a)) / 0x8 + parseInt(_0x2f106(0x187)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5071, 0x8ba4e));
function a0_0x411a(XmmIyB, key) {
    const stringArray = a0_0x5071();
    a0_0x411a = function (index, key) {
        index = index - 0x17b;
        let value = stringArray[index];
        return value;
    };
    return a0_0x411a(XmmIyB, key);
}
function a0_0x5071() {
    const _0x37edca = [
        'log',
        '8262376lDsnvP',
        '770332SDtWzH',
        'utf8',
        'readFileSync',
        'env',
        '1417633RrjhrK',
        '4LiStcp',
        'MYTEST',
        '2702832bUBozq',
        '194870OJzNcn',
        'trim',
        '/dev/stdin',
        'sqrt',
        '6lpKvPo',
        'map',
        '712705HMukWi',
        '15955632UiIfiq',
        'split'
    ];
    a0_0x5071 = function () {
        return _0x37edca;
    };
    return a0_0x5071();
}
const main = input => {
    const _0x431a15 = a0_0x411a;
    input = input[_0x431a15(0x181)]()[_0x431a15(0x188)]('\x0a');
    const [N, D] = input[0x0][_0x431a15(0x188)]('\x20')['map'](Number);
    const [, ...points] = input;
    let ans = 0x0;
    for (let v of points) {
        const [x, y] = v[_0x431a15(0x188)]('\x20')[_0x431a15(0x185)](Number);
        if (Math[_0x431a15(0x183)](x ** 0x2 + y ** 0x2) <= D)
            ans++;
    }
    return console[_0x431a15(0x189)](ans);
};
process[a0_0x2c5ea6(0x17b)][a0_0x2c5ea6(0x17e)] ? test() : main(require('fs')[a0_0x2c5ea6(0x18d)](a0_0x2c5ea6(0x182), a0_0x2c5ea6(0x18c)));