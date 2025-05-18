function Main(_0x99599) {
    _0x99599 = _0x99599['split']('\x0a');
    var _0x5c1576 = parseInt(_0x99599[0x0]['split']('\x20')[0x0], 0xa);
    var _0x2f0a67 = parseInt(_0x99599[0x0]['split']('\x20')[0x1], 0xa);
    var _0x407648 = _0x99599[0x1];
    var _0x1a9808 = new RegExp('^[0-9]{' + _0x5c1576 + '}-[0-9]{' + _0x2f0a67 + '}$', 'g');
    var _0x1728c1 = _0x407648['match'](_0x1a9808);
    console['log'](_0x1728c1 == null ? 'No' : 'Yes');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));