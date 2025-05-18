function Main(input) {
    var _0x32e72a = (function () {
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
        _0x32e72a(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x1ed496('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1ed496();
            }
        })();
    }());
    var idata = input['split']('');
    var ninzuu = [];
    var nextninzuutemp = [];
    for (let i = 0x0; i < idata['length']; i++) {
        ninzuu['push'](0x1);
        nextninzuutemp['push'](0x0);
    }
    var nextninzuu = nextninzuutemp['slice']();
    for (let turn = 0x0; turn < ninzuu['length'] + ninzuu['length'] % 0x2; turn++) {
        for (let j = 0x0; j < ninzuu['length']; j++) {
            if (idata[j] == 'R') {
                nextninzuu[j + 0x1] += ninzuu[j];
            } else if (idata[j] == 'L') {
                nextninzuu[j - 0x1] += ninzuu[j];
            }
        }
        ninzuu = nextninzuu['slice']();
        nextninzuu = nextninzuutemp['slice']();
    }
    console['log'](ninzuu['join']('\x20'));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x1ed496(ret) {
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