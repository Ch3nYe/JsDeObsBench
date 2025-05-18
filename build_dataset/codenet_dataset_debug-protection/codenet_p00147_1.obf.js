var a0_0x540d0a = (function () {
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
    a0_0x540d0a(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x41bb4e('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x41bb4e();
        }
    })();
}());
function main() {
    var waitTime = [
        0x0,
        0x0,
        0x0,
        0x0,
        0x0,
        0x0,
        0xe,
        0x9,
        0x4,
        0x0,
        0x0,
        0x8,
        0x3,
        0x2,
        0x0,
        0x0,
        0xf,
        0xa,
        0xf,
        0xa,
        0x6,
        0xc,
        0x7,
        0x9,
        0xb,
        0x6,
        0x17,
        0x12,
        0xd,
        0x8,
        0x3,
        0x17,
        0x12,
        0xd,
        0x8,
        0x3,
        0x22,
        0x1d,
        0x18,
        0x16,
        0x11,
        0x1c,
        0x17,
        0x18,
        0x13,
        0x1b,
        0x22,
        0x1d,
        0x23,
        0x1e,
        0x1c,
        0x1f,
        0x1c,
        0x17,
        0x18,
        0x1c,
        0x2a,
        0x25,
        0x20,
        0x1b,
        0x16,
        0x2a,
        0x25,
        0x20,
        0x1b,
        0x16,
        0x35,
        0x30,
        0x2b,
        0x29,
        0x24,
        0x2f,
        0x2a,
        0x2b,
        0x26,
        0x2e,
        0x40,
        0x3b,
        0x36,
        0x31,
        0x2c,
        0x3d,
        0x38,
        0x33,
        0x2e,
        0x2c,
        0x48,
        0x43,
        0x3e,
        0x39,
        0x34,
        0x48,
        0x43,
        0x3e,
        0x39,
        0x34,
        0x53,
        0x4e,
        0x49,
        0x47
    ];
    for (var i = 0x0; i < input['length']; i++) {
        var idx = parseInt(input[i], 0xa);
        console['log']('%d', waitTime[idx]);
    }
}
var input = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    input = input['split']('\x0a');
    main();
});
function a0_0x41bb4e(ret) {
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