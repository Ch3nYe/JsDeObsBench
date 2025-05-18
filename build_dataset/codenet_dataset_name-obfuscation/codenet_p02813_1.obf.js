'use strict';
const permutation = ({
    result: result = [],
    pre: pre = [],
    post: _0x9b8786,
    n: n = _0x9b8786['length']
}) => {
    if (n > 0x0) {
        _0x9b8786['forEach']((_0x357236, _0x372c5e) => {
            const _0x456f09 = [..._0x9b8786];
            const _0x2b09c2 = _0x456f09['splice'](_0x372c5e, 0x1);
            permutation({
                'result': result,
                'pre': [
                    ...pre,
                    ..._0x2b09c2
                ],
                'post': _0x456f09,
                'n': n - 0x1
            });
        });
    } else {
        result['push'](pre);
    }
    return result;
};
function Main(_0xd6000) {
    const _0x19a099 = _0xd6000['split']('\x0a');
    const _0x3cd268 = Number(_0x19a099[0x0]);
    const _0x9058ca = _0x19a099[0x1];
    const _0x49086b = _0x19a099[0x2];
    const _0x1031c6 = permutation({ 'post': new Array(_0x3cd268)['fill'](0x0)['map']((_0x16ccba, _0x3d0940) => _0x3d0940 + 0x1) })['map'](_0x11a399 => _0x11a399['join']('\x20'));
    const _0x26232f = _0x1031c6['indexOf'](_0x9058ca);
    const _0x1d7f2b = _0x1031c6['indexOf'](_0x49086b);
    console['log'](Math['abs'](_0x26232f - _0x1d7f2b));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));