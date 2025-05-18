function myout(text) {
    console['log'](text);
}
function Main(input) {
    var _0x17ad65 = (function () {
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
        _0x17ad65(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0xfa0d38('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0xfa0d38();
            }
        })();
    }());
    input = input['split']('\x0a');
    var S = input[0x0];
    var w = parseInt(input[0x1]);
    if (w == 0x1) {
        myout(S);
        return;
    }
    S = S['split']('');
    var list = [];
    while (S['length'] != 0x0) {
        var tmp = '';
        for (var i = 0x0; i < w; i++) {
            if (S['length'] != 0x0) {
                tmp += S['shift']();
            }
        }
        list['push'](tmp);
    }
    var output = '';
    for (var i = 0x0; i < list['length']; i++) {
        output += list[i]['slice'](0x0, 0x1);
    }
    myout(output);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());
function _0xfa0d38(ret) {
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