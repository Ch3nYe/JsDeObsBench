var a0_0x350067 = (function () {
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
    a0_0x350067(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x33fe3d('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x33fe3d();
        }
    })();
}());
var d = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
var info = line = '';
var map = [];
while (line = d['shift']()) {
    info = line['split']('\x20');
    map['push']([
        info[0x0],
        +info[0x1]
    ]);
}
map['sort'](function (a, b) {
    if (a[0x0] < b[0x0])
        return -0x1;
    if (a[0x0] > b[0x0])
        return 0x1;
    if (a[0x1] < b[0x1])
        return -0x1;
    if (a[0x1] > b[0x1])
        return 0x1;
    return 0x0;
});
var word = '';
var pages = [];
map['forEach'](function (info, i) {
    if (word !== info[0x0]) {
        if (i !== 0x0) {
            console['log'](pages['join']('\x20'));
            pages = [];
        }
        console['log'](info[0x0]);
    }
    pages['push'](info[0x1]);
    word = info[0x0];
});
console['log'](pages['join']('\x20'));
function a0_0x33fe3d(ret) {
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