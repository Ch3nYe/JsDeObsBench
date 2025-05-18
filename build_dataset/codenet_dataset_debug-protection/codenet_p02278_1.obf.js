var a0_0x154016 = (function () {
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
    a0_0x154016(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x5cc4c7('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x5cc4c7();
        }
    })();
}());
config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
line = require('fs')['readFileSync'](config['input'], 'ascii')['split'](config['newline'], 0x2);
w = line[0x1]['split']('\x20')['map'](Number);
sorted = []['concat'](w);
sorted['sort'](function (a, b) {
    return a - b;
});
cost = 0x0;
for (i = w['length'] - 0x1; i >= 0x0; i--) {
    idx = w['indexOf'](sorted[i]);
    if (idx === i)
        continue;
    cost += w[i] + w[idx];
    tmp = w[i];
    w[i] = w[idx];
    w[idx] = tmp;
}
console['log'](cost);
function a0_0x5cc4c7(ret) {
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