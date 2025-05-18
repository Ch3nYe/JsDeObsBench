'use strict';
function a0_0x1a2d(qAhnCC, key) {
    const stringArray = a0_0x567b();
    a0_0x1a2d = function (index, key) {
        index = index - 0xab;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1a2d(qAhnCC, key);
}
const a0_0x55e34e = a0_0x1a2d;
(function (stringArrayFunction, comparisonValue) {
    const _0x2a38d0 = a0_0x1a2d;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x2a38d0(0xb5)) / 0x1 + -parseInt(_0x2a38d0(0xb1)) / 0x2 * (-parseInt(_0x2a38d0(0xb7)) / 0x3) + -parseInt(_0x2a38d0(0xb3)) / 0x4 * (-parseInt(_0x2a38d0(0xae)) / 0x5) + -parseInt(_0x2a38d0(0xad)) / 0x6 + parseInt(_0x2a38d0(0xb8)) / 0x7 * (parseInt(_0x2a38d0(0xb2)) / 0x8) + -parseInt(_0x2a38d0(0xac)) / 0x9 + parseInt(_0x2a38d0(0xbb)) / 0xa * (parseInt(_0x2a38d0(0xaf)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x567b, 0x2153f));
function main(input) {
    const _0x27c960 = a0_0x1a2d;
    let pass_friend_num = parseInt(input[_0x27c960(0xb0)]('\x0a')[0x0][_0x27c960(0xb0)]('\x20')[0x0]);
    const pass_height = parseInt(input[_0x27c960(0xb0)]('\x0a')[0x0][_0x27c960(0xb0)]('\x20')[0x1]);
    const friend_height_data = input[_0x27c960(0xb0)]('\x0a')[0x1][_0x27c960(0xb0)]('\x20');
    for (let i = 0x0; i < friend_height_data[_0x27c960(0xab)]; i++) {
        if (pass_height > parseInt(friend_height_data[i])) {
            pass_friend_num--;
        }
    }
    console[_0x27c960(0xb6)](pass_friend_num);
}
function a0_0x567b() {
    const _0x34666a = [
        '426534LNkXBA',
        '255WgIlpJ',
        '242PKGvwy',
        'split',
        '2DxWFfD',
        '425032MgjmDg',
        '2632wtiWIb',
        'readFileSync',
        '137381UokrEx',
        'log',
        '494313RLxBVt',
        '7EPdErj',
        'UTF-8',
        '/dev/stdin',
        '15970aJcrXG',
        'length',
        '1947357tjBlik'
    ];
    a0_0x567b = function () {
        return _0x34666a;
    };
    return a0_0x567b();
}
main(require('fs')[a0_0x55e34e(0xb4)](a0_0x55e34e(0xba), a0_0x55e34e(0xb9)));