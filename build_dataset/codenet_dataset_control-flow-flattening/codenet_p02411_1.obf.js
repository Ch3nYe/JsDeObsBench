let input = require('fs')['readFileSync']('/dev/stdin', 'UTF-8');
let array = input['split']('\x0a');
let result = '';
for (let i = 0x0; i < array['length']; i++) {
    let data = array[i]['split']('\x20')['map'](Number);
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
console['log'](result);