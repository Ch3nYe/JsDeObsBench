function a0_0x3640() {
    const _0x492281 = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'yes',
        'log'
    ];
    a0_0x3640 = function () {
        return _0x492281;
    };
    return a0_0x3640();
}
function a0_0x4f2f(JAPbPF, key) {
    const stringArray = a0_0x3640();
    a0_0x4f2f = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4f2f(JAPbPF, key);
}
(function main() {
    const _0x1f0615 = a0_0x4f2f;
    const lines = require('fs')[_0x1f0615(0x0)]('/dev/stdin', _0x1f0615(0x1))[_0x1f0615(0x2)]()[_0x1f0615(0x3)]('\x0a');
    const n1 = Number(lines['shift']());
    const arr1 = lines[_0x1f0615(0x4)]()[_0x1f0615(0x3)]('\x20')[_0x1f0615(0x5)](Number);
    const n2 = Number(lines[_0x1f0615(0x4)]());
    const arr2 = lines['shift']()[_0x1f0615(0x3)]('\x20')[_0x1f0615(0x5)](Number);
    const solve = (i, m) => {
        if (m == 0x0)
            return !![];
        if (i >= n1)
            return ![];
        return solve(i + 0x1, m) || solve(i + 0x1, m - arr1[i]);
    };
    arr2[_0x1f0615(0x5)](m => solve(0x0, m) ? _0x1f0615(0x6) : 'no')['forEach'](res => console[_0x1f0615(0x7)](res));
}());