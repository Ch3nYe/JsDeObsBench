const a0_0x37ef46 = a0_0x59c2;
function a0_0x575b() {
    const _0x5c0c2d = [
        'log',
        'a\x20<\x20b',
        'readFileSync',
        '/dev/stdin',
        'utf-8'
    ];
    a0_0x575b = function () {
        return _0x5c0c2d;
    };
    return a0_0x575b();
}
function main(input) {
    const _0x28a974 = a0_0x59c2;
    let nums = input['split']('\x20')['map'](item => parseInt(item));
    if (nums[0x0] > nums[0x1]) {
        console['log']('a\x20>\x20b');
    } else if (nums[0x0] < nums[0x1]) {
        console[_0x28a974(0x0)](_0x28a974(0x1));
    } else {
        console[_0x28a974(0x0)]('a\x20==\x20b');
    }
}
function a0_0x59c2(GZOCWQ, key) {
    const stringArray = a0_0x575b();
    a0_0x59c2 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x59c2(GZOCWQ, key);
}
main(require('fs')[a0_0x37ef46(0x2)](a0_0x37ef46(0x3), a0_0x37ef46(0x4)));