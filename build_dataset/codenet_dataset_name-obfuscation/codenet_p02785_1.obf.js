'use strict';
function main(_0x54b235) {
    const _0x356797 = _0x54b235['split']('\x0a'), _0x5e89ae = parseInt(_0x356797[0x0]['split']('\x20')[0x1]), _0x32599c = _0x356797[0x1]['split']('\x20');
    var _0x47c633 = _0x32599c['sort']()['splice'](0x0, _0x32599c['length'] - _0x5e89ae)['reduce']((_0x5ef26c, _0x43f4c4) => _0x5ef26c + parseInt(_0x43f4c4), 0x0);
    console['log'](_0x47c633);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));