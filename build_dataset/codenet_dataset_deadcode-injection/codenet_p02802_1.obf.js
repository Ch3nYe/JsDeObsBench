'use strict';
function a0_0x11d9() {
    const _0x39590a = [
        'split',
        'shift',
        'keys',
        'length',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x11d9 = function () {
        return _0x39590a;
    };
    return a0_0x11d9();
}
const a0_0x1ffcc4 = a0_0xbeeb;
function Main(input) {
    const _0x2b335d = a0_0xbeeb;
    let lines = input[_0x2b335d(0x0)]('\x0a');
    let numInfo = lines[_0x2b335d(0x1)]()[_0x2b335d(0x0)]('\x20')[0x1];
    let ansObj = {};
    for (let i = 0x0; i < numInfo; i++) {
        let quesNum = lines[i][_0x2b335d(0x0)]('\x20')[0x0];
        let ansKind = lines[i][_0x2b335d(0x0)]('\x20')[0x1];
        if (ansObj[quesNum] === undefined) {
            ansObj[quesNum] = '' + ansKind;
        } else {
            ansObj[quesNum] += ',' + ansKind;
        }
    }
    let WANum = 0x0;
    let ACNum = 0x0;
    let ansObjKeys = Object[_0x2b335d(0x2)](ansObj);
    for (let i = 0x0; i < ansObjKeys[_0x2b335d(0x3)]; i++) {
        let targetKey = ansObjKeys[i];
        let target = ansObj[targetKey][_0x2b335d(0x0)](',');
        for (let j = 0x0; j < target[_0x2b335d(0x3)]; j++) {
            if (target[j] == 'AC') {
                ACNum++;
                break;
            } else {
                WANum++;
            }
        }
    }
    console['log'](ACNum + '\x20' + WANum);
}
function a0_0xbeeb(RDVYwX, key) {
    const stringArray = a0_0x11d9();
    a0_0xbeeb = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xbeeb(RDVYwX, key);
}
Main(require('fs')[a0_0x1ffcc4(0x4)](a0_0x1ffcc4(0x5), a0_0x1ffcc4(0x6)));