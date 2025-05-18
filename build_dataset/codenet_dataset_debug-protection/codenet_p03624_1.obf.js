function main(input) {
    var _0x5c3b57 = (function () {
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
    const S = input['split']('');
    alphabetList = 'abcdefghijklmnopqrstuvwxyz'['split']('');
    arr = S['filter'](function (x, i, self) {
        return self['indexOf'](x) === i;
    })['sort']();
    tmp = arrDiff(arr, alphabetList);
    function arrDiff(arr, alphabetList) {
        (function () {
            _0x5c3b57(this, function () {
                var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                var result = _0x3a1bec('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x3a1bec();
                }
            })();
        }());
        var a = [];
        var diff = [];
        for (var i = 0x0; i < arr['length']; i++) {
            a[arr[i]] = !![];
        }
        for (var i = 0x0; i < alphabetList['length']; i++) {
            if (a[alphabetList[i]]) {
                delete a[alphabetList[i]];
            } else {
                a[alphabetList[i]] = !![];
            }
        }
        for (var k in a) {
            diff['push'](k);
        }
        return diff;
    }
    if (tmp['length'] > 0x0) {
        ans = tmp[0x0];
    } else {
        ans = 'None';
    }
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x3a1bec(ret) {
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