'use strict';
const a0_0x37e961 = a0_0x2074;
(function (stringArrayFunction, comparisonValue) {
    const _0x159a20 = a0_0x2074;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x159a20(0x105)) / 0x1 * (-parseInt(_0x159a20(0x110)) / 0x2) + parseInt(_0x159a20(0x10d)) / 0x3 * (parseInt(_0x159a20(0x10a)) / 0x4) + parseInt(_0x159a20(0x107)) / 0x5 + parseInt(_0x159a20(0x10b)) / 0x6 + -parseInt(_0x159a20(0x102)) / 0x7 + parseInt(_0x159a20(0x10c)) / 0x8 * (-parseInt(_0x159a20(0x109)) / 0x9) + parseInt(_0x159a20(0x108)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1596, 0x95b58));
function a0_0x2074(tPzLWh, key) {
    const stringArray = a0_0x1596();
    a0_0x2074 = function (index, key) {
        index = index - 0x102;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2074(tPzLWh, key);
}
function a0_0x1596() {
    const _0x30cd98 = [
        '88bvKkRd',
        '60kDYNum',
        'log',
        'utf8',
        '2866sHwteU',
        '4504920kZylju',
        'split',
        'trim',
        '667FGYDSm',
        '/dev/stdin',
        '2829010eUVlHo',
        '5002550LtpiPW',
        '434529YDVyoI',
        '171620UKKKOx',
        '4917078StnpLo'
    ];
    a0_0x1596 = function () {
        return _0x30cd98;
    };
    return a0_0x1596();
}
const main = arg => {
    const _0x32b99c = a0_0x2074;
    arg = arg[_0x32b99c(0x104)]()[_0x32b99c(0x103)]('\x0a');
    const L = parseInt(arg[0x0][_0x32b99c(0x103)]('\x20')[0x0]);
    const R = parseInt(arg[0x0][_0x32b99c(0x103)]('\x20')[0x1]);
    const d = parseInt(arg[0x0][_0x32b99c(0x103)]('\x20')[0x2]);
    let answer = 0x0;
    for (let i = L; i <= R; i++) {
        if (i % d === 0x0)
            answer++;
    }
    console[_0x32b99c(0x10e)](answer);
};
main(require('fs')['readFileSync'](a0_0x37e961(0x106), a0_0x37e961(0x10f)));