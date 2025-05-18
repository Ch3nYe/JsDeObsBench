var a0_0x212188 = (function () {
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
    a0_0x212188(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x161d1c('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x161d1c();
        }
    })();
}());
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var input = '';
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    var lines = input['split']('\x0a');
    var l = 0x0;
    while (!![]) {
        var n = Number(lines[l++]);
        if (n === 0x0) {
            break;
        }
        var sales = [
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0
        ];
        for (var i = 0x0; i < n; i++) {
            sales[Number(lines[l++])]++;
        }
        for (var i = 0x0; i < sales['length']; i++) {
            var bar = sales[i] === 0x0 ? '-' : '';
            for (var j = 0x0; j < sales[i]; j++) {
                bar += '*';
            }
            console['log'](bar);
        }
    }
});
function a0_0x161d1c(ret) {
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