'use strict';
function a0_0x3ed1() {
    const _0x3dfa2d = [
        'length',
        'reduce',
        '60694bVhhtC',
        'data',
        'map',
        '325144DvfNyn',
        'split',
        'stdin',
        '1318944keesNn',
        'log',
        '391027UsvTzb',
        'trim',
        'setEncoding',
        '1085405CJPqQn',
        'resume',
        'keys',
        '531801NbiVhh',
        '3vwVJxW',
        'end',
        '6dUeNVm',
        '234911cvTNGU'
    ];
    a0_0x3ed1 = function () {
        return _0x3dfa2d;
    };
    return a0_0x3ed1();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x306bc8 = a0_0x5488;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x306bc8(0xbb)) / 0x1 + -parseInt(_0x306bc8(0xbe)) / 0x2 + -parseInt(_0x306bc8(0xb8)) / 0x3 * (-parseInt(_0x306bc8(0xc1)) / 0x4) + parseInt(_0x306bc8(0xc9)) / 0x5 + parseInt(_0x306bc8(0xba)) / 0x6 * (-parseInt(_0x306bc8(0xc6)) / 0x7) + -parseInt(_0x306bc8(0xc4)) / 0x8 + -parseInt(_0x306bc8(0xb7)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3ed1, 0x36789));
function main(n, array) {
    const _0x1c9c61 = a0_0x5488;
    let counter = {};
    for (let a of array) {
        counter[a] = counter[a] || 0x0;
        counter[a]++;
    }
    let nums = Object[_0x1c9c61(0xb6)](counter);
    let evenCount = nums[_0x1c9c61(0xbd)]((count, num) => {
        if (counter[num] % 0x2 === 0x0) {
            return count + 0x1;
        } else {
            return count;
        }
    }, 0x0);
    let answer;
    if (evenCount % 0x2 === 0x0) {
        answer = nums[_0x1c9c61(0xbc)];
    } else {
        answer = nums[_0x1c9c61(0xbc)] - 0x1;
    }
    console[_0x1c9c61(0xc5)](answer);
}
function a0_0x5488(VcwVCF, key) {
    const stringArray = a0_0x3ed1();
    a0_0x5488 = function (index, key) {
        index = index - 0xb6;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5488(VcwVCF, key);
}
function doMain() {
    const _0x5ac163 = a0_0x5488;
    let input = '';
    process[_0x5ac163(0xc3)][_0x5ac163(0xca)]();
    process[_0x5ac163(0xc3)][_0x5ac163(0xc8)]('utf8');
    process['stdin']['on'](_0x5ac163(0xbf), chunk => {
        input += chunk;
    });
    process['stdin']['on'](_0x5ac163(0xb9), () => {
        const _0x5054ae = _0x5ac163;
        input = input[_0x5054ae(0xc7)]()[_0x5054ae(0xc2)]('\x0a');
        let n = Number(input[0x0]);
        let array = input[0x1]['split']('\x20')[_0x5054ae(0xc0)](a => Number(a));
        main(n, array);
    });
}
doMain();