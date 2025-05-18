q = [];
require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a')['some'](function (_0x499ed8) {
    _0x499ed8 != 0x0 ? q['push'](_0x499ed8) : console['log'](q['pop']());
});