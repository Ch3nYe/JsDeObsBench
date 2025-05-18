const a0_0x322190 = a0_0x19c6;
function Main(input) {
    const _0x45b4e6 = a0_0x19c6;
    input = input[_0x45b4e6(0x0)]('\x0a')[_0x45b4e6(0x1)](v => v[_0x45b4e6(0x0)]('\x20'));
    const [n, q] = input[0x0][_0x45b4e6(0x1)](v => +v);
    input['shift']();
    const mod = 0x3b800001;
    const str = new Array(n)[_0x45b4e6(0x2)](0x1);
    input[_0x45b4e6(0x1)](value => {
        const _0x32ba39 = a0_0x19c6;
        if (_0x32ba39(0x3) !== 'ajERd') {
            const [l, r, d] = [
                value[0x0] - 0x1,
                value[0x1] - 0x1,
                +value[0x2]
            ];
            for (let i = l; i <= r; i++) {
                str[i] = d;
            }
            let num = 0x0;
            for (let s = 0x0; s < n; s++) {
                num = (num * 0xa + str[s]) % mod;
            }
            console[_0x32ba39(0x4)](num);
        } else {
            return parseInt(v, 0xa);
        }
    });
}
function a0_0x27e7() {
    const _0x1c2647 = [
        'split',
        'map',
        'fill',
        'qssMk',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x27e7 = function () {
        return _0x1c2647;
    };
    return a0_0x27e7();
}
function a0_0x19c6(UoVtwW, key) {
    const stringArray = a0_0x27e7();
    a0_0x19c6 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x19c6(UoVtwW, key);
}
function toInt(v) {
    return parseInt(v, 0xa);
}
Main(require('fs')[a0_0x322190(0x5)](a0_0x322190(0x6), 'utf8'));