var a0_0x48416e = (function () {
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
    a0_0x48416e(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x8a9833('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x8a9833();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var wq = arr['shift']();
    if (wq == '0\x200')
        break;
    wq = wq['split']('\x20')['map'](Number);
    var w = wq[0x0];
    var W = [];
    for (var i = 0x0; i < w; i++)
        W[i] = !![];
    var cat = {};
    while (wq[0x1]--) {
        var sw = arr['shift']()['split']('\x20');
        if (sw[0x0] == 's') {
            var id = sw[0x1];
            var width = sw[0x2] - 0x0;
            var cnt = 0x0;
            var ans = 'impossible';
            for (var i = 0x0; i < w; i++) {
                cnt = W[i] ? cnt + 0x1 : 0x0;
                if (cnt == width) {
                    while (cnt--) {
                        W[i] = ![];
                        i--;
                    }
                    i++;
                    cat[id] = [
                        i,
                        width
                    ];
                    ans = i;
                    break;
                }
            }
            console['log'](ans);
        }
        if (sw[0x0] == 'w') {
            var id = sw[0x1];
            var width = cat[id][0x1];
            var i = cat[id][0x0];
            while (width--) {
                W[i] = !![];
                i++;
            }
        }
    }
    console['log']('END');
}
function a0_0x8a9833(ret) {
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