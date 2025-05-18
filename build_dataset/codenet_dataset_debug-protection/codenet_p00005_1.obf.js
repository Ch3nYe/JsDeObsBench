var a0_0x25d74c = (function () {
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
    a0_0x25d74c(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x3b4430('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x3b4430();
        }
    })();
}());
config = {
    'stdin': '/dev/stdin',
    'newline': '\x0a'
};
require('fs')['readFileSync'](config['stdin'], 'ascii')['trim']()['split'](config['newline'])['forEach'](function (line) {
    var ary = line['split']('\x20');
    var a = ary[0x0], b = ary[0x1];
    console['log']('%d\x20%d', gcd(a, b), lcm(a, b));
});
function gcd(a, b) {
    while (a !== b) {
        if (a < b) {
            var tmp = a;
            a = b;
            b = tmp;
        }
        if (a % b === 0x0)
            return b;
        a -= b;
    }
    return a;
}
function lcm(a, b) {
    var g = gcd(a, b);
    return g * (a / g) * (b / g);
}
function a0_0x3b4430(ret) {
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