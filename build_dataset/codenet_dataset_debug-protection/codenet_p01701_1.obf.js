var a0_0x5361b6 = (function () {
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
    a0_0x5361b6(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x5167e0('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x5167e0();
        }
    })();
}());
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    var line, lines = chunk['split']('\x0a'), i, len = lines['length'], j, jLen, deg, pow, max;
    for (i = 0x0; i < len; i++) {
        line = lines[i];
        if (line == '#') {
            break;
        }
        line = line['replace'](/north/g, 0x0);
        line = line['replace'](/west/g, 0x1);
        deg = 0x0;
        jLen = line['length'];
        pow = line['length'] - 0x1;
        max = 0x5a * Math['pow'](0x2, pow);
        for (j = jLen; j >= 0x0; j--) {
            if (line[j] * 0x1) {
                if (deg < max) {
                    deg += 0x5a * Math['pow'](0x2, j);
                }
            } else {
                if (deg > 0x0) {
                    deg -= 0x5a * Math['pow'](0x2, j);
                }
            }
        }
        while (pow > 0x0 && deg % 0x2 === 0x0) {
            deg = deg / 0x2;
            pow--;
        }
        if (pow > 0x0) {
            console['log'](deg + '/' + Math['pow'](0x2, pow));
        } else {
            console['log'](deg);
        }
    }
});
function a0_0x5167e0(ret) {
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