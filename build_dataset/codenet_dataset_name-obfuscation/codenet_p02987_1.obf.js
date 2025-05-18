function main(_0x37b7b4) {
    const _0x1cd189 = _0x37b7b4['split']('');
    const _0x25e1c4 = [];
    _0x1cd189['forEach'](_0x27742b => {
        if (!_0x25e1c4['some'](_0x4fd4f => _0x4fd4f === _0x27742b)) {
            _0x25e1c4['push'](_0x27742b);
        }
    });
    const _0x2825fa = _0x25e1c4['length'] === 0x2 ? 'Yes' : 'No';
    console['log'](_0x2825fa);
}
;
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));