var a0_0x24f34e = (function () {
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
    a0_0x24f34e(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0xb439dd('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0xb439dd();
        }
    })();
}());
const main = input => {
    var K = input['trim']()['split']('\x0a')[0x0]['split']('\x20')[0x3];
    var x = input['trim']()['split']('\x0a')[0x0]['split']('\x20')[0x0];
    var y = input['trim']()['split']('\x0a')[0x0]['split']('\x20')[0x1];
    var z = input['trim']()['split']('\x0a')[0x0]['split']('\x20')[0x2];
    var a = input['trim']()['split']('\x0a')[0x1]['split']('\x20')['sort']((a, b) => b - a)['map'](v => v - 0x0);
    var b = input['trim']()['split']('\x0a')[0x2]['split']('\x20')['sort']((a, b) => b - a)['map'](v => v - 0x0);
    var c = input['trim']()['split']('\x0a')[0x3]['split']('\x20')['sort']((a, b) => b - a)['map'](v => v - 0x0);
    var anss = [];
    var idxa = 0x0, idxb = 0x0, idxc = 0x0;
    var min = 0x0;
    for (var i = 0x0; i < x; i++) {
        for (var j = 0x0; j < y; j++) {
            for (var k = 0x0; k < z; k++) {
                if (i * j * k > K)
                    break;
                var sum = a[i] + b[j] + c[k];
                anss['push'](sum);
            }
        }
    }
    console['log'](anss['sort']((a, b) => b - a)['filter']((v, i) => i < K)['join']('\x0a'));
};
main(require('fs')['readFileSync']('/dev/stdin', 'UTF-8'));
function a0_0xb439dd(ret) {
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