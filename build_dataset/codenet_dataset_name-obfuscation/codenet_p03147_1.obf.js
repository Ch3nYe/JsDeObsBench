function search(_0x193573) {
    var _0x5d1ed0 = ![];
    for (var _0xa7bfb2 = 0x0; _0xa7bfb2 < _0x193573['length']; _0xa7bfb2++) {
        if (_0x5d1ed0) {
            if (_0x193573[_0xa7bfb2] == 0x0) {
                break;
            }
            _0x193573[_0xa7bfb2] -= 0x1;
        } else {
            if (_0x193573[_0xa7bfb2] == 0x0) {
                continue;
            }
            _0x5d1ed0 = !![];
            _0x193573[_0xa7bfb2] -= 0x1;
        }
    }
    return _0x193573;
}
function main(_0x400721) {
    var _0x3dc137 = _0x400721['split']('\x0a')[0x1]['split']('\x20')['map'](_0x1b9c07 => Number(_0x1b9c07));
    var _0x1a6b90 = [];
    var _0x5afd19 = 0x0;
    for (_0x5afd19 = 0x1;; _0x5afd19++) {
        _0x3dc137 = search(_0x3dc137);
        if (_0x3dc137[0x0] == 0x0) {
            var _0x560325 = _0x3dc137['filter']((_0x1c5fa2, _0x595afb, _0x38fa53) => _0x38fa53['indexOf'](_0x1c5fa2) === _0x595afb);
            if (_0x560325['length'] == 0x1) {
                break;
            }
        }
    }
    console['log'](_0x5afd19);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));