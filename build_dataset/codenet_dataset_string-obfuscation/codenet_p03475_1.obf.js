'use strict';
function a0_0x1f70(wGNfFU, key) {
    const stringArray = a0_0x3e93();
    a0_0x1f70 = function (index, key) {
        index = index - 0xbb;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1f70(wGNfFU, key);
}
const a0_0x50d117 = a0_0x1f70;
(function (stringArrayFunction, comparisonValue) {
    const _0x19edf7 = a0_0x1f70;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x19edf7(0xca)) / 0x1 * (parseInt(_0x19edf7(0xcb)) / 0x2) + -parseInt(_0x19edf7(0xc2)) / 0x3 + -parseInt(_0x19edf7(0xc0)) / 0x4 + -parseInt(_0x19edf7(0xc1)) / 0x5 + parseInt(_0x19edf7(0xbf)) / 0x6 * (-parseInt(_0x19edf7(0xc3)) / 0x7) + -parseInt(_0x19edf7(0xc8)) / 0x8 * (parseInt(_0x19edf7(0xbc)) / 0x9) + -parseInt(_0x19edf7(0xbd)) / 0xa * (-parseInt(_0x19edf7(0xbb)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3e93, 0xe2969));
function a0_0x3e93() {
    const _0x54bc80 = [
        '10CAtgXM',
        'shift',
        '929256LpmSMK',
        '6701096BMGWIv',
        '9074835XhaPsG',
        '372924AyaRJw',
        '49CZDTal',
        'utf8',
        '/dev/stdin',
        'readFileSync',
        'map',
        '368bwGjVt',
        'log',
        '175lWCMEl',
        '330OfTPFL',
        '72106595bMthNt',
        '175986RaDSsO'
    ];
    a0_0x3e93 = function () {
        return _0x54bc80;
    };
    return a0_0x3e93();
}
function main(input) {
    const _0x35780e = a0_0x1f70;
    input = input['split'](/\n/);
    const n = ~~input[_0x35780e(0xbe)]();
    input = input[_0x35780e(0xc7)](v => v['split'](/\s/)[_0x35780e(0xc7)](x => ~~x));
    let ans = '';
    for (let i = 0x0; i < input['length']; i++) {
        let time = 0x0;
        let wait = 0x0;
        for (let j = i; j < input['length']; j++) {
            time += time > input[j][0x1] ? 0x0 : input[j][0x1] - time;
            time += input[j][0x0];
        }
        ans += time + '\x0a';
    }
    ans += '0\x0a';
    console[_0x35780e(0xc9)](ans);
}
main(require('fs')[a0_0x50d117(0xc6)](a0_0x50d117(0xc5), a0_0x50d117(0xc4)));