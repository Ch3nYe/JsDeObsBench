'use strict';
function a0_0x2c19(VCKPwH, key) {
    const stringArray = a0_0x4def();
    a0_0x2c19 = function (index, key) {
        index = index - 0xca;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2c19(VCKPwH, key);
}
const a0_0xe455d7 = a0_0x2c19;
(function (stringArrayFunction, comparisonValue) {
    const _0x33dc42 = a0_0x2c19;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x33dc42(0xd0)) / 0x1 + parseInt(_0x33dc42(0xca)) / 0x2 + -parseInt(_0x33dc42(0xd1)) / 0x3 + parseInt(_0x33dc42(0xd5)) / 0x4 * (-parseInt(_0x33dc42(0xcf)) / 0x5) + parseInt(_0x33dc42(0xcd)) / 0x6 + -parseInt(_0x33dc42(0xce)) / 0x7 + -parseInt(_0x33dc42(0xd6)) / 0x8 * (-parseInt(_0x33dc42(0xd3)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4def, 0x2b5c4));
function main(input) {
    const _0x412bf8 = a0_0x2c19;
    const args = input['trim']()[_0x412bf8(0xd2)]('\x0a')[_0x412bf8(0xd8)](_ => _[_0x412bf8(0xd2)]('\x20')['map'](x => parseInt(x, 0xa)));
    const k = args[0x0][0x1];
    const arr = args['slice'](0x1);
    let cnt = 0x0;
    let i = 0x0;
    while (cnt < k) {
        cnt += arr[i][0x1];
        i++;
    }
    console[_0x412bf8(0xd4)](arr[i - 0x1][0x0]);
}
function a0_0x4def() {
    const _0x2c05bd = [
        'log',
        '4VaGkRy',
        '16xmsSrH',
        '/dev/stdin',
        'map',
        '615286NoVrfk',
        'utf8',
        'readFileSync',
        '1624638ZKIrYY',
        '2287628pMPBQT',
        '1691025AGXGVV',
        '29817TtOadI',
        '872760hssvwv',
        'split',
        '2632203arOUDU'
    ];
    a0_0x4def = function () {
        return _0x2c05bd;
    };
    return a0_0x4def();
}
main(require('fs')[a0_0xe455d7(0xcc)](a0_0xe455d7(0xd7), a0_0xe455d7(0xcb)));