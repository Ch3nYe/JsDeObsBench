const a0_0x4369bd = a0_0x2d36;
function a0_0x423e() {
    const _0x176b38 = [
        'trim',
        'split',
        'map',
        'log',
        'toFixed',
        '/dev/stdin'
    ];
    a0_0x423e = function () {
        return _0x176b38;
    };
    return a0_0x423e();
}
function main(input) {
    const _0x363974 = a0_0x2d36;
    const nums = input[_0x363974(0x0)]()[_0x363974(0x1)](/\s/)[_0x363974(0x2)](str => {
        return Number(str);
    });
    console[_0x363974(0x3)]((nums[0x0] / nums[0x1])[_0x363974(0x4)](0xa));
}
function a0_0x2d36(HQyMYK, key) {
    const stringArray = a0_0x423e();
    a0_0x2d36 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2d36(HQyMYK, key);
}
main(require('fs')['readFileSync'](a0_0x4369bd(0x5), 'utf8'));