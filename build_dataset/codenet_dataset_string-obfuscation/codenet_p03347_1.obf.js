const a0_0x2af113 = a0_0x3ce4;
(function (stringArrayFunction, comparisonValue) {
    const _0x4a9a66 = a0_0x3ce4;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x4a9a66(0x11f)) / 0x1 * (-parseInt(_0x4a9a66(0x11e)) / 0x2) + -parseInt(_0x4a9a66(0x110)) / 0x3 + -parseInt(_0x4a9a66(0x115)) / 0x4 * (-parseInt(_0x4a9a66(0x11b)) / 0x5) + -parseInt(_0x4a9a66(0x118)) / 0x6 * (parseInt(_0x4a9a66(0x11a)) / 0x7) + -parseInt(_0x4a9a66(0x11c)) / 0x8 + parseInt(_0x4a9a66(0x116)) / 0x9 * (parseInt(_0x4a9a66(0x11d)) / 0xa) + -parseInt(_0x4a9a66(0x117)) / 0xb * (-parseInt(_0x4a9a66(0x112)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3287, 0xa782d));
function a0_0x3ce4(aFZTpB, key) {
    const stringArray = a0_0x3287();
    a0_0x3ce4 = function (index, key) {
        index = index - 0x110;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3ce4(aFZTpB, key);
}
console['log']((args => {
    const _0x1f519f = a0_0x3ce4;
    const [N, ...A] = args[_0x1f519f(0x119)]()['split']('\x0a')[_0x1f519f(0x111)](v => v | 0x0);
    if (A[0x0] > 0x0)
        return '-1';
    let m = 0x0;
    for (let i = 0x1; i < N; i++) {
        if (A[i] > i || A[i] > A[i - 0x1] + 0x1)
            return '-1';
        if (A[i] === A[i - 0x1] + 0x1)
            m++;
        else if (A[i] <= A[i - 0x1])
            m += A[i];
    }
    return '' + m;
})(require('fs')[a0_0x2af113(0x113)]('/dev/stdin', a0_0x2af113(0x114))));
function a0_0x3287() {
    const _0x13773b = [
        'readFileSync',
        'utf8',
        '3474956UaYQmM',
        '27954thNpPW',
        '17765473OJrlRy',
        '12ZgBnhp',
        'trim',
        '2923060dDrSgs',
        '5hlYjmr',
        '9003320DjKEek',
        '2150MULFjL',
        '449146ssMUdM',
        '1QqYnsu',
        '840897WtGzKG',
        'map',
        '12qsihQC'
    ];
    a0_0x3287 = function () {
        return _0x13773b;
    };
    return a0_0x3287();
}