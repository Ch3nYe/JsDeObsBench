function a0_0x1e97(xfieXs, key) {
    const stringArray = a0_0x3c23();
    a0_0x1e97 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1e97(xfieXs, key);
}
const a0_0x207337 = a0_0x1e97;
function a0_0x3c23() {
    const _0x3f0f3e = [
        'split',
        'map',
        'sqrt',
        'log',
        'env',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3c23 = function () {
        return _0x3f0f3e;
    };
    return a0_0x3c23();
}
const main = input => {
    const _0x293ed0 = a0_0x1e97;
    input = input['trim']()[_0x293ed0(0x0)]('\x0a');
    const [N, D] = input[0x0][_0x293ed0(0x0)]('\x20')[_0x293ed0(0x1)](Number);
    const [, ...points] = input;
    let ans = 0x0;
    for (let v of points) {
        const [x, y] = v[_0x293ed0(0x0)]('\x20')['map'](Number);
        if (Math[_0x293ed0(0x2)](x ** 0x2 + y ** 0x2) <= D)
            ans++;
    }
    return console[_0x293ed0(0x3)](ans);
};
process[a0_0x207337(0x4)]['MYTEST'] ? test() : main(require('fs')['readFileSync'](a0_0x207337(0x5), a0_0x207337(0x6)));