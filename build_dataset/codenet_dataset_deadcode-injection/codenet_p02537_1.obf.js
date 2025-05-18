function a0_0x3c9e() {
    const _0x13166b = [
        'split',
        'map',
        'slice',
        'push',
        'abs',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3c9e = function () {
        return _0x13166b;
    };
    return a0_0x3c9e();
}
const a0_0x32384d = a0_0x1845;
const main = arg => {
    const _0x463de2 = a0_0x1845;
    const [N, K] = arg[_0x463de2(0x0)]('\x0a')[0x0][_0x463de2(0x0)]('\x20')[_0x463de2(0x1)](Number);
    arg = arg['split']('\x0a')[_0x463de2(0x2)](0x1);
    const a = arg[_0x463de2(0x1)](Number);
    let b = [];
    b[_0x463de2(0x3)](a[0x0]);
    for (let i = 0x1; i < N; i++) {
        if (Math[_0x463de2(0x4)](a[i] - b[b['length'] - 0x1]) <= K) {
            b[_0x463de2(0x3)](a[i]);
        }
    }
    console[_0x463de2(0x5)](b['length']);
};
function a0_0x1845(ASrCpT, key) {
    const stringArray = a0_0x3c9e();
    a0_0x1845 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1845(ASrCpT, key);
}
main(require('fs')['readFileSync'](a0_0x32384d(0x6), a0_0x32384d(0x7)));