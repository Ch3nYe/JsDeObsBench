const a0_0x5e6bf6 = a0_0x5c54;
function a0_0x5c54(iazjtb, key) {
    const stringArray = a0_0x5d3a();
    a0_0x5c54 = function (index, key) {
        index = index - 0xbb;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5c54(iazjtb, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x3c72db = a0_0x5c54;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x3c72db(0xc7)) / 0x1 * (-parseInt(_0x3c72db(0xbc)) / 0x2) + parseInt(_0x3c72db(0xc1)) / 0x3 + parseInt(_0x3c72db(0xc8)) / 0x4 * (parseInt(_0x3c72db(0xbd)) / 0x5) + -parseInt(_0x3c72db(0xc5)) / 0x6 + parseInt(_0x3c72db(0xc4)) / 0x7 * (-parseInt(_0x3c72db(0xbf)) / 0x8) + -parseInt(_0x3c72db(0xbb)) / 0x9 * (-parseInt(_0x3c72db(0xc3)) / 0xa) + parseInt(_0x3c72db(0xc0)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5d3a, 0x59176));
let input = require('fs')['readFileSync'](a0_0x5e6bf6(0xbe), a0_0x5e6bf6(0xc9));
function a0_0x5d3a() {
    const _0x1e0fe4 = [
        'split',
        '25474haaNNs',
        '1869988VJyfma',
        'UTF-8',
        '1638XsDueh',
        '48hduBNZ',
        '5IjrIVy',
        '/dev/stdin',
        '8mdsvOa',
        '68178aTqiqK',
        '282864xzEJxJ',
        'map',
        '20630eEuwQK',
        '3500602UaQDUD',
        '4138926lENXcB'
    ];
    a0_0x5d3a = function () {
        return _0x1e0fe4;
    };
    return a0_0x5d3a();
}
let array = input[a0_0x5e6bf6(0xc6)]('\x0a');
let result = '';
for (let i = 0x0; i < array['length']; i++) {
    let data = array[i]['split']('\x20')[a0_0x5e6bf6(0xc2)](Number);
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