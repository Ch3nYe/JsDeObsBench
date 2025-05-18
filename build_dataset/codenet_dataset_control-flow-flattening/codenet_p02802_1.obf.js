'use strict';
function Main(input) {
    const dLOjDM = {
        'jpeYL': function (x, y) {
            return x === y;
        },
        'wwaRw': function (x, y) {
            return x < y;
        },
        'qgnNj': function (x, y) {
            return x == y;
        },
        'KUsnA': function (x, y) {
            return x + y;
        }
    };
    let lines = input['split']('\x0a');
    let numInfo = lines['shift']()['split']('\x20')[0x1];
    let ansObj = {};
    for (let i = 0x0; i < numInfo; i++) {
        let quesNum = lines[i]['split']('\x20')[0x0];
        let ansKind = lines[i]['split']('\x20')[0x1];
        if (dLOjDM['jpeYL'](ansObj[quesNum], undefined)) {
            ansObj[quesNum] = '' + ansKind;
        } else {
            ansObj[quesNum] += ',' + ansKind;
        }
    }
    let WANum = 0x0;
    let ACNum = 0x0;
    let ansObjKeys = Object['keys'](ansObj);
    for (let i = 0x0; dLOjDM['wwaRw'](i, ansObjKeys['length']); i++) {
        let targetKey = ansObjKeys[i];
        let target = ansObj[targetKey]['split'](',');
        for (let j = 0x0; dLOjDM['wwaRw'](j, target['length']); j++) {
            if (dLOjDM['qgnNj'](target[j], 'AC')) {
                ACNum++;
                break;
            } else {
                WANum++;
            }
        }
    }
    console['log'](dLOjDM['KUsnA'](ACNum, '\x20') + WANum);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));