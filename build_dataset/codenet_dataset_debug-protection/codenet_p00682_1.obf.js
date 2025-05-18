var a0_0x52ea58 = (function () {
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
    a0_0x52ea58(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x390724('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x390724();
        }
    })();
}());
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    var input = chunk['trim']()['split']('\x0a');
    var order = 0x1;
    while (!![]) {
        var n = input['shift']();
        if (n == 0x0)
            break;
        var coordinate = [];
        while (n--)
            coordinate['push'](input['shift']()['split']('\x20')['map'](Number));
        coordinate['push'](coordinate[0x0]);
        var area = 0x0;
        for (var i = 0x0; i < coordinate['length'] - 0x1; i++) {
            area += coordinate[i][0x0] * coordinate[i + 0x1][0x1] - coordinate[i][0x1] * coordinate[i + 0x1][0x0];
        }
        console['log'](order + '\x20' + Math['abs'](area / 0x2)['toFixed'](0x1));
        input['shift']();
        order++;
    }
});
function a0_0x390724(ret) {
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