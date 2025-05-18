function Main(_0x5f26c9) {
    _0x5f26c9 = _0x5f26c9['split']('\x0a');
    var _0xcd1c8d = Number(_0x5f26c9[0x0]['split']('\x20')[0x0]);
    var _0x18ecf4 = Number(_0x5f26c9[0x0]['split']('\x20')[0x1]);
    var _0x285d72 = BigInt(Math['floor'](_0xcd1c8d * _0x18ecf4));
    var _0x285d72 = _0x285d72['toString']();
    console['log']('%s', _0x285d72);
    return _0x285d72;
}
function debug(_0x276111) {
    var _0x4b2d0b = document['getElementById']('input' + _0x276111)['value'];
    var _0x317912 = Main(_0x4b2d0b);
    var _0x4b7632 = 'WA';
    if (_0x317912 == document['getElementById']('output' + _0x276111)['value']['split']('\x0a')[0x0]) {
        _0x4b7632 = 'AC';
    }
    document['getElementById']('result' + _0x276111)['innerHTML'] = _0x4b7632;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));