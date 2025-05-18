'use strict';
const a0_0x57c416 = a0_0x5750;
(function (stringArrayFunction, comparisonValue) {
    const _0x50f941 = a0_0x5750;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x50f941(0x1a5)) / 0x1 * (-parseInt(_0x50f941(0x1a3)) / 0x2) + parseInt(_0x50f941(0x1a6)) / 0x3 * (parseInt(_0x50f941(0x1a4)) / 0x4) + parseInt(_0x50f941(0x1a2)) / 0x5 + -parseInt(_0x50f941(0x1a0)) / 0x6 + -parseInt(_0x50f941(0x1ab)) / 0x7 * (parseInt(_0x50f941(0x19f)) / 0x8) + parseInt(_0x50f941(0x1a1)) / 0x9 + -parseInt(_0x50f941(0x1a7)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x42c7, 0x4f9b6));
function a0_0x5750(tKdoeB, key) {
    const stringArray = a0_0x42c7();
    a0_0x5750 = function (index, key) {
        index = index - 0x19d;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5750(tKdoeB, key);
}
function a0_0x42c7() {
    const _0x2896a2 = [
        '4911uYFTqv',
        '357tRVaXo',
        '2802440rKdsiJ',
        'readFileSync',
        'sort',
        'utf-8',
        '21gUSFIE',
        'log',
        '/dev/stdin',
        '1086104rDjDVx',
        '1084878LxpKNq',
        '5143194hqsSLw',
        '584965bbfMOt',
        '54hfRsdO',
        '21464BQiegi'
    ];
    a0_0x42c7 = function () {
        return _0x2896a2;
    };
    return a0_0x42c7();
}
function main(input) {
    const _0x4d646d = a0_0x5750;
    input = input['trim']()['split']('\x20');
    const N = Number(input[0x0]);
    const X = Number(input[0x1]);
    const T = Number(input[0x2]);
    let ans = 0x0;
    let i;
    for (i = 0x0; ans < N; i++) {
        ans += X;
    }
    console[_0x4d646d(0x19d)](T * i);
}
function numberSort(array) {
    const _0x187132 = a0_0x5750;
    array[_0x187132(0x1a9)](f);
    return array;
}
var f = function (a, b) {
    return a - b;
};
main(require('fs')[a0_0x57c416(0x1a8)](a0_0x57c416(0x19e), a0_0x57c416(0x1aa)));