'use strict';
const a0_0x28698c = a0_0x18f5;
function main(arg) {
    const _0x231566 = a0_0x18f5;
    let getInt = arg['trim']()[_0x231566(0x0)]('\x20')[0x3];
    let oneCount = arg[_0x231566(0x1)]()[_0x231566(0x0)]('\x20')[0x0];
    let zeroCnt = arg[_0x231566(0x1)]()[_0x231566(0x0)]('\x20')[0x1];
    let minusCnt = arg[_0x231566(0x1)]()['split']('\x20')[0x2];
    let result = 0x0;
    if (oneCount == 0x0 && zeroCnt == 0x0 && minusCnt == 0x0) {
        console[_0x231566(0x2)](0x0);
        return;
    }
    if (getInt > 0x0) {
        if (getInt > oneCount) {
            if (_0x231566(0x3) === _0x231566(0x4)) {
                getInt = getInt - zeroCnt;
            } else {
                result = oneCount * 0x1;
            }
        } else {
            result = getInt * 0x1;
        }
        getInt = getInt - oneCount;
    }
    if (getInt > 0x0) {
        if (_0x231566(0x5) === _0x231566(0x5)) {
            getInt = getInt - zeroCnt;
        } else {
            result = oneCount * 0x1;
        }
    }
    if (getInt > 0x0) {
        if (_0x231566(0x6) === _0x231566(0x6)) {
            result = result + getInt * -0x1;
        } else {
            console['log'](0x0);
            return;
        }
    }
    console['log'](result);
}
main(require('fs')[a0_0x28698c(0x7)](a0_0x28698c(0x8), a0_0x28698c(0x9)));
function a0_0x18f5(HcQmrJ, key) {
    const stringArray = a0_0x419c();
    a0_0x18f5 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x18f5(HcQmrJ, key);
}
function a0_0x419c() {
    const _0x20cb7e = [
        'split',
        'trim',
        'log',
        'pDHJZ',
        'tCpEl',
        'RgjgC',
        'yYqxO',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x419c = function () {
        return _0x20cb7e;
    };
    return a0_0x419c();
}