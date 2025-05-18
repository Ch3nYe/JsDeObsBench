'use strict';
const a0_0x55c1e3 = a0_0x3a60;
function a0_0x3a60(nFBMQG, key) {
    const stringArray = a0_0x346a();
    a0_0x3a60 = function (index, key) {
        index = index - 0x133;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3a60(nFBMQG, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x4aac94 = a0_0x3a60;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x4aac94(0x142)) / 0x1 + -parseInt(_0x4aac94(0x139)) / 0x2 + parseInt(_0x4aac94(0x13a)) / 0x3 + parseInt(_0x4aac94(0x146)) / 0x4 + parseInt(_0x4aac94(0x137)) / 0x5 * (parseInt(_0x4aac94(0x133)) / 0x6) + parseInt(_0x4aac94(0x13c)) / 0x7 * (-parseInt(_0x4aac94(0x143)) / 0x8) + parseInt(_0x4aac94(0x13e)) / 0x9 * (-parseInt(_0x4aac94(0x136)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x346a, 0x9caa3));
function counter(str, seq) {
    const _0x5d02f5 = a0_0x3a60;
    return str[_0x5d02f5(0x135)](seq)[_0x5d02f5(0x13f)] - 0x1;
}
function a0_0x346a() {
    const _0x4064a2 = [
        'forEach',
        '1684388FtSiYZ',
        '6aEUHrA',
        'max',
        'split',
        '88260yXZOjO',
        '3475365ChUWce',
        'readFileSync',
        '2298206UlYEtS',
        '2201610BlDFmg',
        'charAt',
        '366317GDFAuV',
        'utf8',
        '522eMOKzQ',
        'length',
        'shift',
        '/dev/stdin',
        '609663guPGQl',
        '24yTtftd',
        'min'
    ];
    a0_0x346a = function () {
        return _0x4064a2;
    };
    return a0_0x346a();
}
function main(stdin) {
    const _0x5d41a0 = a0_0x3a60;
    const input = stdin[_0x5d41a0(0x135)]('\x0a');
    input[_0x5d41a0(0x140)]();
    let ans = 0x0;
    let startsB = 0x0;
    let endsA = 0x0;
    let startsBandEndsA = 0x0;
    input[_0x5d41a0(0x145)](s => {
        const _0x1962eb = _0x5d41a0;
        ans += counter(s, 'AB');
        if (s[_0x1962eb(0x13b)](0x0) === 'B') {
            if (s[_0x1962eb(0x13b)](s[_0x1962eb(0x13f)] - 0x1) === 'A') {
                ++startsBandEndsA;
            } else {
                ++startsB;
            }
        } else if (s[_0x1962eb(0x13b)](s['length'] - 0x1) === 'A') {
            ++endsA;
        }
    });
    const smaller = Math[_0x5d41a0(0x144)](startsB, endsA);
    const bigger = Math['max'](startsB, endsA);
    const shortage = bigger - smaller;
    let extra = Math[_0x5d41a0(0x134)](0x0, startsBandEndsA - shortage);
    if (shortage === 0x0 && extra !== 0x0)
        --extra;
    ans += smaller;
    ans += Math[_0x5d41a0(0x144)](shortage, startsBandEndsA);
    ans += extra;
    console['log'](ans);
}
main(require('fs')[a0_0x55c1e3(0x138)](a0_0x55c1e3(0x141), a0_0x55c1e3(0x13d)));