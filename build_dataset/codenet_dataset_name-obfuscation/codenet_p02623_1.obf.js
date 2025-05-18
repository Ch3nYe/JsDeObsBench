function compareFunc(_0x2024ce, _0x1ab8e6) {
    return _0x2024ce - _0x1ab8e6;
}
function main(_0xfe66e1) {
    let _0x57f324 = _0xfe66e1['split'](/\n/);
    let _0x4e09bf = [
        ..._0x57f324[0x1]['split'](/\s/),
        ..._0x57f324[0x2]['split'](/\s/)
    ];
    let _0x5c6b20 = _0x57f324[0x0]['split'](/\s/)[0x2];
    let _0x1f4114 = 0x0;
    _0x4e09bf['sort'](compareFunc);
    for (let _0x500155 = 0x0; _0x500155 < _0x4e09bf['length']; _0x500155++) {
        if (_0x5c6b20 >= _0x4e09bf[_0x500155] * 0x1) {
            _0x5c6b20 -= _0x4e09bf[_0x500155];
            _0x1f4114++;
        }
    }
    console['log'](_0x1f4114);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));