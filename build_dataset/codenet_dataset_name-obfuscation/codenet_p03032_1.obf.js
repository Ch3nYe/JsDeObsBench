'use strict';
function main(_0x5976ec) {
    _0x5976ec = _0x5976ec['trim']()['split']('\x0a');
    const _0x5ab1f0 = _0x5976ec['shift']()['split']('\x20')['map'](_0xcd9ca => Number(_0xcd9ca));
    const _0x72c5f1 = Math['min'](..._0x5ab1f0);
    _0x5976ec = _0x5976ec[0x0]['split']('\x20')['map'](_0x5e1cf0 => Number(_0x5e1cf0));
    const _0x47209c = [];
    for (let _0x57e353 = 0x0; _0x57e353 <= _0x72c5f1; _0x57e353++) {
        for (let _0x1cfbdb = 0x0; _0x1cfbdb <= _0x72c5f1 - _0x57e353; _0x1cfbdb++) {
            let _0x47504b = [
                ..._0x5976ec['slice'](0x0, _0x57e353),
                ..._0x5976ec['slice'](_0x5ab1f0[0x0] - _0x1cfbdb)
            ]['sort']((_0x1fd282, _0x1b1c20) => _0x1fd282 - _0x1b1c20);
            let _0x1bf166 = _0x5ab1f0[0x1] - _0x57e353 - _0x1cfbdb;
            for (let _0x20fce8 = 0x0; _0x20fce8 < _0x1bf166; _0x20fce8++) {
                if (_0x47504b[_0x20fce8] >= 0x0)
                    break;
                _0x47504b[_0x20fce8] = 0x0;
            }
            _0x47209c['push'](_0x47504b['reduce']((_0x5b3078, _0x467faa) => _0x5b3078 + _0x467faa, 0x0));
        }
    }
    console['log'](Math['max'](..._0x47209c));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));