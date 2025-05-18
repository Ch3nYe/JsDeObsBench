var a0_0xe3070b = (function () {
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
    a0_0xe3070b(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x440cbc('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x440cbc();
        }
    })();
}());
config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
line = require('fs')['readFileSync'](config['input'], 'ascii')['trim']()['split'](config['newline']);
n = Number(line['shift']());
adj = {};
for (i in line) {
    ary = line[i]['split']('\x20');
    j = ary['shift']();
    ary['shift']();
    adj[j] = ary;
}
for (i = 0x1; i <= n; i++) {
    ary = [];
    for (j = 0x1; j <= n; j++) {
        if (adj[i]['indexOf'](String(j)) !== -0x1)
            ary['push'](0x1);
        else
            ary['push'](0x0);
    }
    console['log'](ary['join']('\x20'));
}
function a0_0x440cbc(ret) {
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