function Main(input) {
    var _0x5118e8 = (function () {
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
        _0x5118e8(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x3f2930('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3f2930();
            }
        })();
    }());
    input = input['split']('\x0a');
    var n = parseInt(input[0x0]['split']('\x20')[0x0]);
    var m = parseInt(input[0x0]['split']('\x20')[0x1]);
    x = new Array();
    var ans = 'IMPOSSIBLE';
    for (i = 0x0; i < m; i++) {
        tmp = input[i + 0x1]['split']('\x20');
        if (tmp[0x0] == 0x1) {
            if (x['indexOf'](tmp[0x1]) != -0x1) {
                ans = 'POSSIBLE';
                break;
            } else {
                x['push'](tmp[0x1]);
            }
        }
        if (tmp[0x1] == n) {
            if (x['indexOf'](tmp[0x0]) != -0x1) {
                ans = 'POSSIBLE';
                break;
            } else {
                x['push'](tmp[0x0]);
            }
        }
    }
    console['log']('%s', ans);
}
function debug() {
    var input = document['getElementById']('input')['value'];
    Main(input);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x3f2930(ret) {
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