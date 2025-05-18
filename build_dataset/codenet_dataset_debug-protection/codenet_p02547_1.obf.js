const a0_0x3be54d = (function () {
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
    a0_0x3be54d(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x3b0f25('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x3b0f25();
        }
    })();
}());
let lines = [];
let reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', function (line) {
    lines['push'](line);
});
reader['on']('close', function () {
    let d1 = [];
    let d2 = [];
    const n = lines[0x0];
    let zorome = 'No';
    for (let i = 0x1; i < n; i++) {
        d1['push'](lines[i]['split']('\x20')[0x0]);
        d2['push'](lines[i]['split']('\x20')[0x1]);
    }
    for (let i = 0x0; i < n - 0x2; i++) {
        if (d1[i] == d2[i]) {
            if (d1[i + 0x1] == d2[i + 0x1]) {
                if (d1[i + 0x2] == d2[i + 0x2]) {
                    zorome = 'Yes';
                    break;
                }
            }
        }
    }
    console['log'](zorome);
});
function a0_0x3b0f25(ret) {
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