'use strict';
const a0_0x25f1d6 = a0_0x3748;
function a0_0x3d46() {
    const _0x24934c = [
        'replace',
        'split',
        'forEach',
        'indexOf',
        'push',
        'word',
        'counter',
        'every',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x3d46 = function () {
        return _0x24934c;
    };
    return a0_0x3d46();
}
function a0_0x3748(JEAuoC, key) {
    const stringArray = a0_0x3d46();
    a0_0x3748 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3748(JEAuoC, key);
}
function main(s) {
    const _0x1ee7e3 = a0_0x3748;
    const input = s[_0x1ee7e3(0x0)](/\n/g, '')[_0x1ee7e3(0x1)]('');
    let words = [];
    input[_0x1ee7e3(0x2)]((x, i, self) => {
        const _0x114f57 = a0_0x3748;
        if (self[_0x114f57(0x3)](x) === i) {
            words[_0x114f57(0x4)]({
                'word': x,
                'counter': 0x1
            });
        } else {
            words[_0x114f57(0x2)](y => {
                const _0x2253fb = a0_0x3748;
                if (x === y[_0x2253fb(0x5)]) {
                    y[_0x2253fb(0x6)] += 0x1;
                }
            });
        }
    });
    const result = words[_0x1ee7e3(0x7)](x => x[_0x1ee7e3(0x6)] % 0x2 === 0x0) ? 'Yes' : 'No';
    console[_0x1ee7e3(0x8)](result);
}
main(require('fs')[a0_0x25f1d6(0x9)]('/dev/stdin', a0_0x25f1d6(0xa)));