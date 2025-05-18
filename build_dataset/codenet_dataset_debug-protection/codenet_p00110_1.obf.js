var a0_0x17af5f = (function () {
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
    a0_0x17af5f(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0xfa5e45('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0xfa5e45();
        }
    })();
}());
function main() {
    input['forEach'](function (line) {
        var a, b, c, p, x, y, z, i;
        if (line['trim']() === '')
            return;
        p = line['match'](/([0-9X]+)\+([0-9X]+)\=([0-9X]+)/);
        a = p[0x1];
        b = p[0x2];
        c = p[0x3];
        for (i = 0x0; i <= 0x9; i++) {
            if (i === 0x0 && (a['charAt'](0x0) === 'X' || b['charAt'](0x0) === 'X' || c['charAt'](0x0) === 'X'))
                continue;
            x = parseInt(a['replace'](/X/g, i), 0xa);
            y = parseInt(b['replace'](/X/g, i), 0xa);
            z = parseInt(c['replace'](/X/g, i), 0xa);
            if (x + y === z)
                break;
        }
        console['log'](i === 0xa ? 'NA' : i);
    });
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
function a0_0xfa5e45(ret) {
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