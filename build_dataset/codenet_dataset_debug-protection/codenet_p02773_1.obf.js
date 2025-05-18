const a0_0x2ee8b9 = (function () {
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
    a0_0x2ee8b9(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x1ef9e7('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x1ef9e7();
        }
    })();
}());
'use strict';
const main = arg => {
    const rows = arg['trim']()['split']('\x0a');
    const N = rows['shift']();
    let wordsObj = {};
    rows['forEach'](row => {
        if (wordsObj[row]) {
            wordsObj[row]++;
        } else {
            wordsObj[row] = 0x1;
        }
    });
    let ansArr = [];
    let max = 0x0;
    let output = w => {
        console['log'](w);
    };
    for (let i = 0x0; i < Object['keys'](wordsObj)['length']; i++) {
        if (wordsObj[Object['keys'](wordsObj)[i]] < max) {
            continue;
        } else if (wordsObj[Object['keys'](wordsObj)[i]] > max) {
            ansArr = [];
            ansArr['push'](Object['keys'](wordsObj)[i]);
            max = wordsObj[Object['keys'](wordsObj)[i]];
        } else if (wordsObj[Object['keys'](wordsObj)[i]] * 0x1 == max) {
            ansArr['push'](Object['keys'](wordsObj)[i]);
        }
    }
    ansArr['sort']();
    ansArr['forEach'](output);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x1ef9e7(ret) {
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