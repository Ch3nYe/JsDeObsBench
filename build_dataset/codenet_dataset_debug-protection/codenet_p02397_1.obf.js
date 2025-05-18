var a0_0x45d265 = (function () {
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
    a0_0x45d265(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0xe47f17('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0xe47f17();
        }
    })();
}());
function main(tmp) {
    var i = 0x0;
    while (tmp[i] != 0x0 && tmp[i + 0x1] != 0x0) {
        if (tmp[i] < tmp[i + 0x1])
            console['log'](tmp[i] + '\x20' + tmp[i + 0x1]);
        else
            console['log'](tmp[i + 0x1] + '\x20' + tmp[i]);
        i = i + 0x2;
    }
}
var lines = [];
var b = [];
var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', function (line) {
    var a = line['split']('\x20');
    var c = parseInt(a[0x0], 0xa);
    var d = parseInt(a[0x1], 0xa);
    b['push'](c);
    b['push'](d);
    if (c == 0x0 && d == 0x0)
        main(b);
});
process['stdin']['on']('end', function () {
});
function a0_0xe47f17(ret) {
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