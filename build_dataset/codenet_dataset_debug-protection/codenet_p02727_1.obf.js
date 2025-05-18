var a0_0xd7ee10 = (function () {
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
    a0_0xd7ee10(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x1c9905('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x1c9905();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var lines = input['split']('\x0a');
const parse = (s, sep) => {
    return s['split'](sep)['map'](v => parseInt(v));
};
const split = (s, sep, result, keys) => {
    var arr = parse(s, sep);
    for (var i = 0x0; i < arr['length']; i++) {
        result[keys[i]] = arr[i];
    }
};
var inp = {};
split(lines[0x0], '\x20', inp, [
    'x',
    'y',
    'a',
    'b',
    'c'
]);
var p = parse(lines[0x1], '\x20')['sort']((a, b) => b - a);
var q = parse(lines[0x2], '\x20')['sort']((a, b) => b - a);
var r = parse(lines[0x3], '\x20')['sort']((a, b) => b - a);
p = p['slice'](0x0, inp['x']);
q = q['slice'](0x0, inp['y']);
console['log'](p['concat'](q, r)['sort']((a, b) => b - a)['slice'](0x0, inp['x'] + inp['y'])['reduce']((a, b) => a + b, 0x0));
function a0_0x1c9905(ret) {
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