const a0_0xa72bf8 = a0_0x58fb;
function a0_0x1359() {
    const _0x462c67 = [
        'split',
        'map',
        'fill',
        'slice',
        'every',
        'Yes',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1359 = function () {
        return _0x462c67;
    };
    return a0_0x1359();
}
const main = input => {
    const _0x4a2526 = a0_0x58fb;
    const lines = input[_0x4a2526(0x0)]('\x0a');
    const [h, w] = lines[0x0]['split']('\x20')[_0x4a2526(0x1)](Number);
    const data = Array(h)[_0x4a2526(0x2)](![])['map']((_, i) => lines[i + 0x1]['split']('')[_0x4a2526(0x3)](0x0, w)['map'](c => c === '#'));
    const ans = data[_0x4a2526(0x4)]((row, i) => row[_0x4a2526(0x4)]((cell, j) => !cell || (data[i - 0x1] || [])[j] || (data[i + 0x1] || [])[j] || data[i][j - 0x1] || data[i][j + 0x1]));
    console['log'](ans ? _0x4a2526(0x5) : 'No');
};
function a0_0x58fb(dpObEx, key) {
    const stringArray = a0_0x1359();
    a0_0x58fb = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x58fb(dpObEx, key);
}
main(require('fs')[a0_0xa72bf8(0x6)](a0_0xa72bf8(0x7), a0_0xa72bf8(0x8)));