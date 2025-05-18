'use strict';
const permutation = ({
    result: result = [],
    pre: pre = [],
    post: post,
    n: n = post['length']
}) => {
    const PRdbRb = {
        'KjjYY': function (callee, param1) {
            return callee(param1);
        },
        'SPKwZ': function (x, y) {
            return x - y;
        }
    };
    if (n > 0x0) {
        post['forEach']((_, i) => {
            const rest = [...post];
            const elem = rest['splice'](i, 0x1);
            PRdbRb['KjjYY'](permutation, {
                'result': result,
                'pre': [
                    ...pre,
                    ...elem
                ],
                'post': rest,
                'n': PRdbRb['SPKwZ'](n, 0x1)
            });
        });
    } else {
        result['push'](pre);
    }
    return result;
};
function Main(inputs) {
    const NjRfcA = {
        'mKbjx': function (callee, param1) {
            return callee(param1);
        }
    };
    const input = inputs['split']('\x0a');
    const n = NjRfcA['mKbjx'](Number, input[0x0]);
    const p = input[0x1];
    const q = input[0x2];
    const perm = permutation({ 'post': new Array(n)['fill'](0x0)['map']((_, i) => i + 0x1) })['map'](v => v['join']('\x20'));
    const a = perm['indexOf'](p);
    const b = perm['indexOf'](q);
    console['log'](Math['abs'](a - b));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));