'use strict';
const a0_0x4130e8 = a0_0x3ac4;
function a0_0x3ac4(trilnE, key) {
    const stringArray = a0_0x3cdc();
    a0_0x3ac4 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3ac4(trilnE, key);
}
function a0_0x3cdc() {
    const _0x177060 = [
        'split',
        'map',
        'abs',
        'join',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim'
    ];
    a0_0x3cdc = function () {
        return _0x177060;
    };
    return a0_0x3cdc();
}
function main(input) {
    const _0x6e94dc = a0_0x3ac4;
    const k = parseInt(input[0x0]);
    let i = 0x1;
    let runruncounter = 0x0;
    while (!![]) {
        const j = (i + '')[_0x6e94dc(0x0)]('')[_0x6e94dc(0x1)](a => parseInt(a));
        let judge = !![];
        for (let l = 0x1; l < j['length']; l++) {
            if (Math[_0x6e94dc(0x2)](j[l] - j[l - 0x1]) > 0x1) {
                judge = ![];
                if (j[l] === 0x9) {
                    j[l - 0x1] += 0x1;
                    j[l] = 0x0;
                } else {
                    j[l] += 0x1;
                }
                i = parseInt(j[_0x6e94dc(0x3)](''));
                break;
            }
        }
        if (judge) {
            runruncounter++;
            if (runruncounter === k) {
                console['log'](i);
                break;
            }
            i++;
        }
    }
}
main(require('fs')[a0_0x4130e8(0x4)](a0_0x4130e8(0x5), a0_0x4130e8(0x6))[a0_0x4130e8(0x7)]()[a0_0x4130e8(0x0)]('\x0a'));