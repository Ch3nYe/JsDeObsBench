var a0_0x47da9a = (function () {
    var firstCall = !![];
    return function (context, fn) {
        var rfn = firstCall ? function () {
            if (fn) {
                var res = fn['apply'](context, arguments);
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
    a0_0x47da9a(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x4db6fa('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x4db6fa();
        }
    })();
}());
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var lines = [];
var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', line => {
    lines['push'](line);
});
reader['on']('close', () => {
    const a = lines[0x1]['split']('\x20')['map'](v => v - 0x0);
    const b = lines[0x1]['split']('\x20')['map'](v => v - 0x0)['sort']((a, b) => a - b);
    let ans = a['filter']((v, i) => v != b[i])['length'];
    console['log'](ans <= 0x2 ? 'YES' : 'NO');
});
min = (...a) => {
    return a['reduce']((a, b) => a < b ? a : b, a[0x0]);
};
function a0_0x4db6fa(ret) {
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