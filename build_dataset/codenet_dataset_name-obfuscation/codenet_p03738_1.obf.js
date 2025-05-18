function rec(_0x2d685d, _0x4d1efa) {
    if (_0x2d685d[0x0] > _0x4d1efa[0x0]) {
        return 'GREATER';
    } else if (_0x2d685d[0x0] < _0x4d1efa[0x0]) {
        return 'LESS';
    } else if (_0x2d685d['length'] == 0x1) {
        return 'EQUAL';
    } else {
        return rec(_0x2d685d['slice'](0x1), _0x4d1efa['slice'](0x1));
    }
}
function main(_0x58ac29) {
    _0x58ac29 = _0x58ac29['split']('\x0a');
    if (_0x58ac29[0x0]['length'] > _0x58ac29[0x1]['length']) {
        console['log']('GREATER');
    } else if (_0x58ac29[0x0]['length'] < _0x58ac29[0x1]['length']) {
        console['log']('LESS');
    } else {
        console['log']('%s', rec(_0x58ac29[0x0]['slice'](0x1), _0x58ac29[0x1]['slice'](0x1)));
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));