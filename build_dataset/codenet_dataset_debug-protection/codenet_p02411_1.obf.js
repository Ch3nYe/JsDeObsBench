const a0_0x7d181b = (function () {
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
    a0_0x7d181b(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x210d24('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x210d24();
        }
    })();
}());
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
function a0_0x210d24(ret) {
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