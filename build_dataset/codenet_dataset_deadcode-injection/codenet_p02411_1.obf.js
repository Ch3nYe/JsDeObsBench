function a0_0x16dc(HyKeUd, key) {
    const stringArray = a0_0x2cd0();
    a0_0x16dc = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x16dc(HyKeUd, key);
}
const a0_0x275c43 = a0_0x16dc;
let input = require('fs')[a0_0x275c43(0x0)](a0_0x275c43(0x1), a0_0x275c43(0x2));
function a0_0x2cd0() {
    const _0x16c1ce = [
        'readFileSync',
        '/dev/stdin',
        'UTF-8',
        'split',
        'log'
    ];
    a0_0x2cd0 = function () {
        return _0x16c1ce;
    };
    return a0_0x2cd0();
}
let array = input[a0_0x275c43(0x3)]('\x0a');
let result = '';
for (let i = 0x0; i < array['length']; i++) {
    let data = array[i][a0_0x275c43(0x3)]('\x20')['map'](Number);
    let fScore = data[0x0];
    let lScore = data[0x1];
    let retest = data[0x2];
    if (fScore === -0x1 && lScore === -0x1 && retest === -0x1)
        break;
    if (i !== 0x0)
        result += '\x0a';
    if (fScore === -0x1 || lScore === -0x1) {
        result += 'F';
    } else {
        let sum = fScore + lScore;
        switch (!![]) {
        case sum >= 0x50:
            result += 'A';
            break;
        case 0x41 <= sum && sum < 0x50:
            result += 'B';
            break;
        case 0x32 <= sum && sum < 0x41:
            result += 'C';
            break;
        case 0x1e <= sum && sum < 0x32:
            result += retest >= 0x32 ? 'C' : 'D';
            break;
        default:
            result += 'F';
        }
        ;
    }
}
console[a0_0x275c43(0x4)](result);