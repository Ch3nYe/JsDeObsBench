function a0_0x113f() {
    const _0x33740c = [
        '384568kLPGKy',
        '6624460BirNke',
        '2qDBNbZ',
        '/dev/stdin',
        '645144fGkPdQ',
        '9WNtoef',
        '132tNiBKI',
        '6PwvJgI',
        '601485JrCNqE',
        'floor',
        '5uMnODr',
        '2471602mjABXC',
        '2140707wphMAa',
        'split',
        '142888gYMKhb',
        'log'
    ];
    a0_0x113f = function () {
        return _0x33740c;
    };
    return a0_0x113f();
}
const a0_0x50f5f7 = a0_0x43e8;
function a0_0x43e8(EEdTaG, key) {
    const stringArray = a0_0x113f();
    a0_0x43e8 = function (index, key) {
        index = index - 0x1cf;
        let value = stringArray[index];
        return value;
    };
    return a0_0x43e8(EEdTaG, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x23638e = a0_0x43e8;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x23638e(0x1d8)) / 0x1 + -parseInt(_0x23638e(0x1d2)) / 0x2 * (-parseInt(_0x23638e(0x1dc)) / 0x3) + -parseInt(_0x23638e(0x1de)) / 0x4 * (parseInt(_0x23638e(0x1da)) / 0x5) + parseInt(_0x23638e(0x1d7)) / 0x6 * (parseInt(_0x23638e(0x1db)) / 0x7) + -parseInt(_0x23638e(0x1d0)) / 0x8 + -parseInt(_0x23638e(0x1d5)) / 0x9 * (-parseInt(_0x23638e(0x1d1)) / 0xa) + -parseInt(_0x23638e(0x1d6)) / 0xb * (parseInt(_0x23638e(0x1d4)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x113f, 0x61557));
function main(input) {
    const _0x4bef4e = a0_0x43e8;
    input = input['trim']();
    const a = parseInt(input[_0x4bef4e(0x1dd)]('\x20')[0x0], 0xa);
    console[_0x4bef4e(0x1cf)](Math[_0x4bef4e(0x1d9)](a / 0x3));
}
main(require('fs')['readFileSync'](a0_0x50f5f7(0x1d3), 'utf8'));