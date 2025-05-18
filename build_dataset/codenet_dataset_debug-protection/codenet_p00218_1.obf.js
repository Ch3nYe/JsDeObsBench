var a0_0x9676ea = (function () {
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
    a0_0x9676ea(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x518349('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x518349();
        }
    })();
}());
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var input = '';
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    var lines = input['split']('\x0a');
    var l = 0x0;
    while (!![]) {
        var n = Number(lines[l++]);
        if (n === 0x0) {
            break;
        }
        for (var i = 0x0; i < n; i++) {
            var values = lines[l++]['split']('\x20')['map'](Number);
            var pm = values[0x0];
            var pe = values[0x1];
            var pj = values[0x2];
            var ans = 'C';
            if (pm === 0x64 || pe === 0x64 || pj === 0x64) {
                ans = 'A';
            } else if ((pm + pe) / 0x2 >= 0x5a) {
                ans = 'A';
            } else {
                var average = (pm + pe + pj) / 0x3;
                if (average >= 0x50) {
                    ans = 'A';
                } else if (average >= 0x46) {
                    ans = 'B';
                } else if (average >= 0x32 && (pm >= 0x50 || pe >= 0x50)) {
                    ans = 'B';
                }
            }
            console['log'](ans);
        }
    }
});
function a0_0x518349(ret) {
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