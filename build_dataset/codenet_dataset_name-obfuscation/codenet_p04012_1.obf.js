'use strict';
function main(_0x22ee54) {
    const _0x3fb560 = _0x22ee54['replace'](/\n/g, '')['split']('');
    let _0x5e8adf = [];
    _0x3fb560['forEach']((_0xc15a5a, _0x4c6a5e, _0x41f691) => {
        if (_0x41f691['indexOf'](_0xc15a5a) === _0x4c6a5e) {
            _0x5e8adf['push']({
                'word': _0xc15a5a,
                'counter': 0x1
            });
        } else {
            _0x5e8adf['forEach'](_0x1e80f8 => {
                if (_0xc15a5a === _0x1e80f8['word']) {
                    _0x1e80f8['counter'] += 0x1;
                }
            });
        }
    });
    const _0x7eed96 = _0x5e8adf['every'](_0xab91d => _0xab91d['counter'] % 0x2 === 0x0) ? 'Yes' : 'No';
    console['log'](_0x7eed96);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));