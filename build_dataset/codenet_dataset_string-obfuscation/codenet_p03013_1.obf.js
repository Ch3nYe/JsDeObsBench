'use strict';
const a0_0x40a837 = a0_0x315c;
(function (stringArrayFunction, comparisonValue) {
    const _0x538a65 = a0_0x315c;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x538a65(0x8f)) / 0x1 * (parseInt(_0x538a65(0x9b)) / 0x2) + parseInt(_0x538a65(0x9a)) / 0x3 + -parseInt(_0x538a65(0x91)) / 0x4 * (parseInt(_0x538a65(0x97)) / 0x5) + -parseInt(_0x538a65(0x94)) / 0x6 + parseInt(_0x538a65(0x9c)) / 0x7 * (-parseInt(_0x538a65(0x96)) / 0x8) + -parseInt(_0x538a65(0x9d)) / 0x9 + parseInt(_0x538a65(0x90)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x31a0, 0x26b35));
function a0_0x315c(svxCzu, key) {
    const stringArray = a0_0x31a0();
    a0_0x315c = function (index, key) {
        index = index - 0x8f;
        let value = stringArray[index];
        return value;
    };
    return a0_0x315c(svxCzu, key);
}
function a0_0x31a0() {
    const _0x44a6a8 = [
        '5ZDTeGK',
        'trim',
        'slice',
        '934077MhYkxl',
        '4122saHkhL',
        '1141eXgeUI',
        '1773441WzlXYJ',
        'fill',
        'split',
        '40UCvFfA',
        '6112390VPAbZt',
        '1056500GEinDN',
        'log',
        'utf8',
        '626988jIQNaO',
        'readFileSync',
        '13784FPgxag'
    ];
    a0_0x31a0 = function () {
        return _0x44a6a8;
    };
    return a0_0x31a0();
}
const main = arg => {
    const _0x38fd87 = a0_0x315c;
    arg = arg[_0x38fd87(0x98)]()['split']('\x0a');
    const N = parseInt(arg[0x0][_0x38fd87(0x9f)]('\x20')[0x0]);
    const M = parseInt(arg[0x0][_0x38fd87(0x9f)]('\x20')[0x1]);
    const dangers = arg[_0x38fd87(0x99)](0x1, M + 0x1);
    let answer = [...Array(N + 0x1)][_0x38fd87(0x9e)](0x1);
    let broken = -0x1;
    let NG = ![];
    for (let i in dangers) {
        if (broken + 0x1 === dangers[i]) {
            NG = !![];
        }
        answer[dangers[i]] = 0x0;
        broken = dangers[i];
    }
    for (let i = 0x2; i <= N; i++) {
        answer[i] = answer[i] * (answer[i - 0x2] + answer[i - 0x1]) % 0x3b9aca07;
    }
    console[_0x38fd87(0x92)](answer[N]);
};
main(require('fs')[a0_0x40a837(0x95)]('/dev/stdin', a0_0x40a837(0x93)));