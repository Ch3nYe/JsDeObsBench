'use strict';
function Main(input) {
    const _0xcd801c = (function () {
        let firstCall = !![];
        return function (context, fn) {
            const rfn = firstCall ? function () {
                if (fn) {
                    const res = fn['apply'](context, arguments);
                    fn = null;
                    return res;
                }
            } : function () {
            };
            firstCall = ![];
            return rfn;
        };
    }());
    (function () {
        _0xcd801c(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x279a41('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x279a41();
            }
        })();
    }());
    let lines = input['split']('\x0a');
    let numInfo = lines['shift']()['split']('\x20')[0x1];
    let ansObj = {};
    for (let i = 0x0; i < numInfo; i++) {
        let quesNum = lines[i]['split']('\x20')[0x0];
        let ansKind = lines[i]['split']('\x20')[0x1];
        if (ansObj[quesNum] === undefined) {
            ansObj[quesNum] = '' + ansKind;
        } else {
            ansObj[quesNum] += ',' + ansKind;
        }
    }
    let WANum = 0x0;
    let ACNum = 0x0;
    let ansObjKeys = Object['keys'](ansObj);
    for (let i = 0x0; i < ansObjKeys['length']; i++) {
        let targetKey = ansObjKeys[i];
        let target = ansObj[targetKey]['split'](',');
        for (let j = 0x0; j < target['length']; j++) {
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
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x279a41(ret) {
    function debuggerProtection(counter) {
        if (typeof counter === 'string') {
            return function (arg) {
            }['constructor']('while\x20(true)\x20{}')['apply']('counter');
        } else {
            if (('' + counter / counter)['length'] !== 0x1 || counter % 0x14 === 0x0) {
                (function () {
                    return !![];
                }['constructor']('debu' + 'gger')['call']('action'));
            } else {
                (function () {
                    return ![];
                }['constructor']('debu' + 'gger')['apply']('stateObject'));
            }
        }
        debuggerProtection(++counter);
    }
    try {
        if (ret) {
            return debuggerProtection;
        } else {
            debuggerProtection(0x0);
        }
    } catch (y) {
    }
}