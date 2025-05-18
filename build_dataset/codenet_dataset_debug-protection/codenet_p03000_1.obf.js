function Main(input) {
    var _0x3d49eb = (function () {
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
        _0x3d49eb(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x53da3e('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x53da3e();
            }
        })();
    }());
    lines = input['split']('\x0a');
    firstLine = lines[0x0]['split']('\x20');
    N = +firstLine[0x0];
    X = +firstLine[0x1];
    secondLine = lines[0x1]['split']('\x20');
    distanceTravelled = 0x0;
    numBounces = 0x1;
    for (i = 0x0; i < N; i++) {
        distanceTravelled += +secondLine[i];
        if (distanceTravelled <= X) {
            numBounces += 0x1;
        }
    }
    console['log'](numBounces);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x53da3e(ret) {
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