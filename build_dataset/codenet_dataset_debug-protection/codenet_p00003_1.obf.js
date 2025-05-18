var a0_0x1200b9 = (function () {
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
    a0_0x1200b9(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x52afd3('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x52afd3();
        }
    })();
}());
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    var aaa = chunk['toString']();
    var line = aaa['split']('\x0a');
    line['shift']();
    for (var i in line) {
        var l = line[i]['split']('\x20');
        for (var i in l) {
            l[i] = new Number(l[i]);
        }
        l['sort'](function (a, b) {
            if (a > b)
                return -0x1;
            if (a < b)
                return 0x1;
            return 0x0;
        });
        var num1 = new Number(l[0x0]) * new Number(l[0x0]);
        var num2 = new Number(l[0x1]) * new Number(l[0x1]);
        var num3 = new Number(l[0x2]) * new Number(l[0x2]);
        var num4 = num2 + num3;
        if (num1 === num4) {
            console['log']('YES');
        } else {
            console['log']('NO');
        }
    }
});
function a0_0x52afd3(ret) {
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