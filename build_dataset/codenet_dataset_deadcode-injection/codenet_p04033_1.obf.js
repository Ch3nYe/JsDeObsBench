const a0_0x58a3e3 = a0_0x4ce2;
const main = input => {
    const _0x2a6ec4 = a0_0x4ce2;
    const data = input[_0x2a6ec4(0x0)](/\n|\s/)['map'](a => parseInt(a, 0xa));
    const a = data[0x0];
    const b = data[0x1];
    if (a <= 0x0 && 0x0 <= b) {
        return _0x2a6ec4(0x1);
    }
    if ((b - a) % 0x2 || a > 0x0) {
        return _0x2a6ec4(0x2);
    } else {
        return _0x2a6ec4(0x3);
    }
};
console[a0_0x58a3e3(0x4)](main(require('fs')[a0_0x58a3e3(0x5)](a0_0x58a3e3(0x6), a0_0x58a3e3(0x7))));
function a0_0x4ce2(yPDHgi, key) {
    const stringArray = a0_0x1338();
    a0_0x4ce2 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4ce2(yPDHgi, key);
}
function a0_0x1338() {
    const _0x426746 = [
        'split',
        'Zero',
        'Positive',
        'Negative',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1338 = function () {
        return _0x426746;
    };
    return a0_0x1338();
}