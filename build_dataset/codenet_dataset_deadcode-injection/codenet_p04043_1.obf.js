const a0_0x4beee2 = a0_0x4b36;
function a0_0x4b36(yEWGKT, key) {
    const stringArray = a0_0x3383();
    a0_0x4b36 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4b36(yEWGKT, key);
}
function a0_0x3383() {
    const _0x4d5d60 = [
        'indexOf',
        'splice',
        'YES',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x3383 = function () {
        return _0x4d5d60;
    };
    return a0_0x3383();
}
function main(input) {
    const _0x27c5a0 = a0_0x4b36;
    const nums = input['split']('\x20');
    if (nums[_0x27c5a0(0x0)]('5') != -0x1) {
        nums[_0x27c5a0(0x1)](nums[_0x27c5a0(0x0)]('5'), 0x1);
    }
    if (nums[_0x27c5a0(0x0)]('5') != -0x1) {
        nums['splice'](nums[_0x27c5a0(0x0)]('5'), 0x1);
    }
    if (nums[_0x27c5a0(0x0)]('7') != -0x1) {
        nums['splice'](nums[_0x27c5a0(0x0)]('7'), 0x1);
    }
    console['log'](nums[0x0] == null ? _0x27c5a0(0x2) : 'NO');
}
main(require('fs')[a0_0x4beee2(0x3)](a0_0x4beee2(0x4), 'utf8'));