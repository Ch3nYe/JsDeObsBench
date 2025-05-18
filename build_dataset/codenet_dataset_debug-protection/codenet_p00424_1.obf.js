var a0_0x13a0c7 = (function () {
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
    a0_0x13a0c7(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x29d56b('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x29d56b();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (Arr['length'] > 0x1) {
    var AL = Arr['shift']();
    var hash = {};
    for (var i = 0x0; i < AL; i++) {
        var arr = Arr[i]['trim']()['split']('\x20');
        hash[arr[0x0]] = arr[0x1];
    }
    Arr = Arr['slice'](AL, Arr['length'] + 0x1);
    var AL = Arr['shift']();
    var str = '';
    for (var i = 0x0; i < AL; i++) {
        var k = Arr[i]['trim']();
        str += hash['hasOwnProperty'](k) ? hash[k] : k;
    }
    Arr = Arr['slice'](AL, Arr['length'] + 0x1);
    console['log'](str);
    if (Arr[0x0] == '0')
        break;
}
function a0_0x29d56b(ret) {
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