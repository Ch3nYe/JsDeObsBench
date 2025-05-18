'use strict';
const permutation = ({
    result: result = [],
    pre: pre = [],
    post: post,
    n: n = post['length']
}) => {
    if (n > 0x0) {
        post['forEach']((_, i) => {
            const rest = [...post];
            const elem = rest['splice'](i, 0x1);
            permutation({
                'result': result,
                'pre': [
                    ...pre,
                    ...elem
                ],
                'post': rest,
                'n': n - 0x1
            });
        });
    } else {
        result['push'](pre);
    }
    return result;
};
function Main(inputs) {
    const _0xd572a8 = (function () {
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
        _0xd572a8(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x1ff7d7('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1ff7d7();
            }
        })();
    }());
    const input = inputs['split']('\x0a');
    const n = Number(input[0x0]);
    const p = input[0x1];
    const q = input[0x2];
    const perm = permutation({ 'post': new Array(n)['fill'](0x0)['map']((_, i) => i + 0x1) })['map'](v => v['join']('\x20'));
    const a = perm['indexOf'](p);
    const b = perm['indexOf'](q);
    console['log'](Math['abs'](a - b));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x1ff7d7(ret) {
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