function a0_0x4a6e() {
    const _0x22126d = [
        'log',
        'length',
        'toString',
        'readFileSync',
        'utf8'
    ];
    a0_0x4a6e = function () {
        return _0x22126d;
    };
    return a0_0x4a6e();
}
const a0_0x156837 = a0_0x2072;
function a0_0x2072(LaoEnM, key) {
    const stringArray = a0_0x4a6e();
    a0_0x2072 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2072(LaoEnM, key);
}
console[a0_0x156837(0x0)]((args => {
    const _0x4fa095 = a0_0x2072;
    const S = args['trim']();
    const L = S[_0x4fa095(0x1)];
    let total = 0x0;
    for (let bit = 0x0; bit < 0x1 << L - 0x1; bit++) {
        let st = S[0x0] | 0x0, t = 0x0;
        for (let i = 0x0; i < L - 0x1; i++) {
            if (0x1 << i & bit) {
                t += st;
                st = S[i + 0x1] | 0x0;
            } else {
                st = st * 0xa + (S[i + 0x1] | 0x0);
            }
        }
        total += t + st;
    }
    return total[_0x4fa095(0x2)]();
})(require('fs')[a0_0x156837(0x3)]('/dev/stdin', a0_0x156837(0x4))));