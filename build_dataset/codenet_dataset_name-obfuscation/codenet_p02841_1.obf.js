function Main(_0x255d2e) {
    var _0x255d2e = _0x255d2e['split']('\x0a');
    var _0x5822f2 = _0x255d2e[0x0]['split']('\x20');
    var _0x3dfced = _0x255d2e[0x1]['split']('\x20');
    var _0x3f8c05 = new Date('2019/' + _0x5822f2[0x0] + '/' + _0x5822f2[0x1]);
    var _0x59841e = new Date('2019/' + _0x3dfced[0x0] + '/' + _0x3dfced[0x1]);
    if (_0x3f8c05['getMonth']() == _0x59841e['getMonth']()) {
        console['log'](0x0);
    } else {
        console['log'](0x1);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));