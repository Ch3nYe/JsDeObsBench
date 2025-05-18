const a0_0x3a69d5 = a0_0x2f18;
function main(input) {
    const _0xeffbcf = a0_0x2f18;
    input = input[_0xeffbcf(0x0)]();
    const a = input[_0xeffbcf(0x1)]('\x20')[_0xeffbcf(0x2)](Number);
    console[_0xeffbcf(0x3)](a[0x1] % a[0x0] == 0x0 ? a[0x0] + a[0x1] : a[0x1] - a[0x0]);
}
function a0_0x2f18(HYFTjQ, key) {
    const stringArray = a0_0x2d74();
    a0_0x2f18 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2f18(HYFTjQ, key);
}
function a0_0x2d74() {
    const _0xc7281 = [
        'trim',
        'split',
        'map',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2d74 = function () {
        return _0xc7281;
    };
    return a0_0x2d74();
}
main(require('fs')['readFileSync'](a0_0x3a69d5(0x4), a0_0x3a69d5(0x5)));