const BKRT = '\x0a';
const SPAC = '\x20';
const NOSP = '';
function Main(input) {
    const _0x10b994 = (function () {
        let firstCall = !![];
        return function (context, fn) {
            const rfn = firstCall ? function () {
                if (fn) {
                    const res = fn['apply'](context, arguments);
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
        _0x10b994(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x120e8c('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x120e8c();
            }
        })();
    }());
    input = []['concat'](...input['split'](BKRT)['map'](a => a['split'](SPAC)));
    const strShift = () => input['shift']();
    const intShift = () => ~~input['shift']();
    return ~~(intShift() - intShift()) % intShift();
}
((b, c, d) => 'undefined' != typeof require ? console['log'](Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'))) : [
    b = b['split']('\x0a')['slice'](0x1, -0x1)['join']('\x0a'),
    c = (function () {
        try {
            return Main(b);
        } catch (f) {
            return f['stack'] || f['message'];
        }
    }()),
    d = typeof c,
    'string' == d || (c = JSON['stringify'](c)),
    $('<form>')['append']([
        [
            0xa,
            b
        ],
        0x0,
        [
            0x1,
            d
        ],
        0x0,
        [
            0xa,
            c
        ]
    ]['map'](f => $(f ? '<textarea>' : '<br>', f && {
        'rows': f[0x0],
        'cols': 0x28,
        'text': f[0x1]
    })))['appendTo']('body')
])('\x0a1234\x0a150\x0a100\x0a');
function _0x120e8c(ret) {
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