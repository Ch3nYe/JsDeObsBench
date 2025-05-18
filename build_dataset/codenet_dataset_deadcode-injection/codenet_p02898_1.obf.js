'use strict';
const a0_0x8b8d95 = a0_0x4c24;
function a0_0xbad4() {
    const _0x5aa7db = [
        'split',
        'length',
        'log',
        'readFileSync',
        'UTF-8'
    ];
    a0_0xbad4 = function () {
        return _0x5aa7db;
    };
    return a0_0xbad4();
}
function a0_0x4c24(sHbvnJ, key) {
    const stringArray = a0_0xbad4();
    a0_0x4c24 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4c24(sHbvnJ, key);
}
function main(input) {
    const _0xe5e8f5 = a0_0x4c24;
    let pass_friend_num = parseInt(input['split']('\x0a')[0x0][_0xe5e8f5(0x0)]('\x20')[0x0]);
    const pass_height = parseInt(input[_0xe5e8f5(0x0)]('\x0a')[0x0][_0xe5e8f5(0x0)]('\x20')[0x1]);
    const friend_height_data = input['split']('\x0a')[0x1][_0xe5e8f5(0x0)]('\x20');
    for (let i = 0x0; i < friend_height_data[_0xe5e8f5(0x1)]; i++) {
        if (pass_height > parseInt(friend_height_data[i])) {
            pass_friend_num--;
        }
    }
    console[_0xe5e8f5(0x2)](pass_friend_num);
}
main(require('fs')[a0_0x8b8d95(0x3)]('/dev/stdin', a0_0x8b8d95(0x4)));