function main() {
    var _0x3216e6 = (function () {
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
        _0x3216e6(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0xfb147c('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0xfb147c();
            }
        })();
    }());
    var input = getInput();
    var ls = input['split']('\x0a');
    var n = parseInt(ls[0x0]);
    var nums = ls['slice'](0x1, n + 0x1)['map'](function (s) {
        return parseInt(s);
    });
    console['log'](lis(nums));
}
function lis(xs) {
    var table = [xs[0x0]];
    for (var i = 0x1; i < xs['length']; i++) {
        var x = xs[i];
        table[search(table, x) + 0x1] = x;
    }
    return table['length'];
}
function search(table, x) {
    var l = 0x0, h = table['length'];
    if (table['length'] == 0x0 || x <= table[0x0]) {
        return -0x1;
    }
    while (l + 0x1 < h) {
        var pivot = (l + h + 0x1) / 0x2;
        if (table[pivot] < x) {
            l = pivot;
        } else {
            h = pivot;
        }
    }
    return l;
}
nodeJS = typeof require != 'undefined';
function getInput() {
    if (!nodeJS) {
        return document['getElementById']('input')['value'];
    }
    return require('fs')['readFileSync']('/dev/stdin')['toString']();
}
if (nodeJS) {
    main();
}
function _0xfb147c(ret) {
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