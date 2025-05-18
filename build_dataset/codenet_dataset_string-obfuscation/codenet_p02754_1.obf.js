'use strict';
function a0_0x28af(Xtzeih, key) {
    const stringArray = a0_0x2d4d();
    a0_0x28af = function (index, key) {
        index = index - 0xa2;
        let value = stringArray[index];
        return value;
    };
    return a0_0x28af(Xtzeih, key);
}
const a0_0x56db7d = a0_0x28af;
(function (stringArrayFunction, comparisonValue) {
    const _0x175b91 = a0_0x28af;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x175b91(0xa8)) / 0x1 * (-parseInt(_0x175b91(0xa7)) / 0x2) + -parseInt(_0x175b91(0xa9)) / 0x3 + parseInt(_0x175b91(0xa5)) / 0x4 + -parseInt(_0x175b91(0xb0)) / 0x5 * (parseInt(_0x175b91(0xae)) / 0x6) + parseInt(_0x175b91(0xb1)) / 0x7 * (-parseInt(_0x175b91(0xaa)) / 0x8) + -parseInt(_0x175b91(0xa6)) / 0x9 + parseInt(_0x175b91(0xad)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2d4d, 0x50ebd));
function a0_0x2d4d() {
    const _0x5006fc = [
        '406515RpvVYW',
        '45624SPbgbQ',
        'split',
        'floor',
        '14223370gCcChX',
        '2119932zAXAuI',
        '/dev/stdin',
        '5KOURqY',
        '511NydYXY',
        'utf8',
        'log',
        'readFileSync',
        '275868ULpIMz',
        '1440594IeqCxT',
        '11134MxZFSM',
        '17zJARSu'
    ];
    a0_0x2d4d = function () {
        return _0x5006fc;
    };
    return a0_0x2d4d();
}
function main(input) {
    const _0x5afa85 = a0_0x28af;
    let kari = input[0x0]['trim']()[_0x5afa85(0xab)]('\x20');
    let n = parseInt(kari[0x0]);
    let a = parseInt(kari[0x1]);
    let b = parseInt(kari[0x2]);
    let c = a + b;
    let ans = 0x0;
    if (a === 0x0) {
        console['log'](0x0);
    } else if (b === 0x0) {
        console[_0x5afa85(0xa3)](n);
    } else {
        if (n % c < a) {
            ans = Math[_0x5afa85(0xac)](n / c) * a + n % c;
        } else {
            ans = Math[_0x5afa85(0xac)](n / c) * a + a;
        }
        console[_0x5afa85(0xa3)](ans);
    }
}
main(require('fs')[a0_0x56db7d(0xa4)](a0_0x56db7d(0xaf), a0_0x56db7d(0xa2))['trim']()[a0_0x56db7d(0xab)]('\x0a'));