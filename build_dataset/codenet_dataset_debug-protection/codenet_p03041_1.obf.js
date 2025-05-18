const a0_0x21750c = (function () {
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
    a0_0x21750c(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x2d27f4('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x2d27f4();
        }
    })();
}());
'use strict';
const Main = input => {
    let tmp = input['split']('\x0a');
    let Num = tmp[0x0]['split']('\x20')['map'](Number)[0x0];
    let Kji = tmp[0x0]['split']('\x20')['map'](Number)[0x1];
    let Str = tmp[0x1]['trim']();
    let Change = Str[Kji - 0x1];
    switch (Change) {
    case 'A':
        Change = 'a';
        break;
    case 'B':
        Change = 'b';
        break;
    case 'C':
        Change = 'c';
        break;
    }
    let StrArr = Str['split']('');
    StrArr[Kji - 0x1] = Change;
    Str = StrArr['join']('');
    console['log'](Str);
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x2d27f4(ret) {
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