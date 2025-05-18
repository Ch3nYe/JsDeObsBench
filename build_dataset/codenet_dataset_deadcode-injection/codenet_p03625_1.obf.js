'use strict';
const a0_0x180c95 = a0_0x5073;
function a0_0x5073(WtFIyC, key) {
    const stringArray = a0_0x49ba();
    a0_0x5073 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5073(WtFIyC, key);
}
function main(input) {
    const _0x5767af = a0_0x5073;
    input = input[_0x5767af(0x0)](/\r?\n/);
    input = input[0x1][_0x5767af(0x0)]('\x20')[_0x5767af(0x1)](v => ~~v)[_0x5767af(0x2)]((a, b) => b - a);
    let ans = 0x0;
    let sticks = [];
    let prev = input[0x0];
    for (let i = 0x1; i < input['length']; i++) {
        if (_0x5767af(0x3) !== 'WJpho') {
            if (prev == input[i]) {
                sticks['push'](prev);
                sticks[_0x5767af(0x4)](input[i]);
                prev = 0x0;
            } else {
                if ('TgeQq' !== _0x5767af(0x5)) {
                    prev = input[i];
                } else {
                    prev = input[i];
                }
            }
        } else {
            ans = sticks[0x0] * sticks[0x3];
            console[_0x5767af(0x6)](ans);
        }
    }
    if (sticks[_0x5767af(0x7)] >= 0x4) {
        ans = sticks[0x0] * sticks[0x3];
        console[_0x5767af(0x6)](ans);
    } else {
        console['log'](0x0);
    }
}
function a0_0x49ba() {
    const _0x24cff1 = [
        'split',
        'map',
        'sort',
        'Dqgbz',
        'push',
        'TgeQq',
        'log',
        'length',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x49ba = function () {
        return _0x24cff1;
    };
    return a0_0x49ba();
}
main(require('fs')[a0_0x180c95(0x8)](a0_0x180c95(0x9), 'utf8'));