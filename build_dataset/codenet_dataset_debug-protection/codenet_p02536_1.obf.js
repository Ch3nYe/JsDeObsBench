const a0_0x529820 = (function () {
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
    a0_0x529820(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x4fb1fc('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x4fb1fc();
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
    const [n, m] = lines[0x0]['split']('\x20');
    const a = [];
    const b = [];
    for (let i = 0x0; i < m; i++) {
        [a[i], b[i]] = lines[i + 0x1]['split']('\x20');
    }
    const connected = [];
    connected['push'](a[0x0]);
    connected['push'](b[0x0]);
    ans = n - 0x2;
    for (let i = 0x1; i < m; i++) {
        if (!connected['includes'](a[i]) && !connected['includes'](b[i])) {
            ans--;
        } else if (!connected['includes'](a[i])) {
            ans--;
            connected['push'](a[i]);
        } else if (!connected['includes'](b[i])) {
            ans--;
            connected['push'](b[i]);
        }
    }
    console['log'](ans);
});
function a0_0x4fb1fc(ret) {
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