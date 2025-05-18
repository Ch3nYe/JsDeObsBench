var a0_0x1e8479 = (function () {
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
    a0_0x1e8479(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x1f7460('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x1f7460();
        }
    })();
}());
const main = inputs => {
    var array = inputs[0x0]['split']('\x20');
    var array2 = inputs[0x1]['split']('\x20');
    var N = array[0x0] - 0x0;
    var M = array[0x1] - 0x0;
    var sum = 0x0;
    for (var i = 0x0; i < M; i++) {
        sum = sum + Number(array2[i]);
    }
    console['log'](N - sum < 0x0 ? -0x1 : N - sum);
};
main(require('fs')['readFileSync']('/dev/stdin', 'UTF-8')['trim']()['split']('\x0a'));
function a0_0x1f7460(ret) {
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