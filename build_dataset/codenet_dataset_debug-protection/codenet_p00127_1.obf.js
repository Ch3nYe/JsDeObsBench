var a0_0x166067 = (function () {
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
    a0_0x166067(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x2ddf07('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x2ddf07();
        }
    })();
}());
var table = {};
table[0xb] = 'a';
table[0xc] = 'b';
table[0xd] = 'c';
table[0xe] = 'd';
table[0xf] = 'e';
table[0x15] = 'f';
table[0x16] = 'g';
table[0x17] = 'h';
table[0x18] = 'i';
table[0x19] = 'j';
table[0x1f] = 'k';
table[0x20] = 'l';
table[0x21] = 'm';
table[0x22] = 'n';
table[0x23] = 'o';
table[0x29] = 'p';
table[0x2a] = 'q';
table[0x2b] = 'r';
table[0x2c] = 's';
table[0x2d] = 't';
table[0x33] = 'u';
table[0x34] = 'v';
table[0x35] = 'w';
table[0x36] = 'x';
table[0x37] = 'y';
table[0x3d] = 'z';
table[0x3e] = '.';
table[0x3f] = '?';
table[0x40] = '!';
table[0x41] = '\x20';
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
Arr['forEach'](function (str) {
    str = str['replace'](/\d\d/g, function (s) {
        if (table['hasOwnProperty'](s))
            s = table[s];
        return s;
    });
    if (str['match'](/\d/))
        str = 'NA';
    console['log'](str);
});
function a0_0x2ddf07(ret) {
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