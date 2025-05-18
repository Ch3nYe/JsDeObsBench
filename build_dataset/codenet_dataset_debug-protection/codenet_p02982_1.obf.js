function main(input) {
    var _0x3ac5fe = (function () {
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
    const args = input['split']('\x0a');
    const aiueo = args[0x0]['split']('\x20');
    const N = parseInt(aiueo[0x0], 0xa);
    const D = parseInt(aiueo[0x1], 0xa);
    var arr = [];
    for (var i = 0x0; i < N; i++) {
        arr[i] = [];
        var subArgs = args[i + 0x1]['split']('\x20');
        for (var j = 0x0; j < D + 0x1; j++) {
            arr[i]['push'](parseInt(subArgs[j], 0xa));
        }
    }
    var kakunin = 0x0;
    function kyori(arr1, arr2) {
        (function () {
            _0x3ac5fe(this, function () {
                var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                var result = _0x5cf82c('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x5cf82c();
                }
            })();
        }());
        var sum = 0x0;
        for (var i = 0x0; i < D; i++) {
            sum = sum + Math['pow'](arr1[i] - arr2[i], 0x2);
        }
        if (Number['isInteger'](Math['sqrt'](sum)) == !![]) {
            return !![];
        } else {
            return ![];
        }
    }
    for (var i = 0x0; i < N; i++) {
        for (var j = i + 0x1; j < N; j++) {
            if (kyori(arr[i], arr[j]) == !![]) {
                kakunin++;
            }
        }
    }
    console['log'](kakunin);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x5cf82c(ret) {
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