var a0_0x32dbe5 = (function () {
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
    a0_0x32dbe5(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0xee8ee1('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0xee8ee1();
        }
    })();
}());
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (line) {
    before(line);
});
var log = console['log'];
function before(line) {
    var lines = line['split']('\x0a');
    lines = lines['filter'](function (e) {
        return e !== '';
    });
    main(lines);
}
function main(lines) {
    var ls = lines['map'](function (e) {
        return Number(e);
    });
    while (ls['length'] > 0x1) {
        var tpl = ls['shift']();
        var arr = ls['slice'](0x0, tpl);
        ls = ls['slice'](tpl);
        var mid = arr['indexOf'](Math['min']['apply'](this, arr));
        arr['splice'](mid, 0x1);
        var Mid = arr['indexOf'](Math['max']['apply'](this, arr));
        arr['splice'](Mid, 0x1);
        var sum = arr['reduce'](function (p, c, i, a) {
            return p + c;
        });
        log(Math['round'](sum / arr['length']));
    }
}
function a0_0xee8ee1(ret) {
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