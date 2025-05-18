function main(_0x19fada) {
    var _0xdb0e00 = _0x19fada['split']('\x0a');
    var _0x3372d6 = _0xdb0e00[0x0]['split']('');
    var _0x5369bc = _0xdb0e00[0x1]['split']('');
    _0x3372d6 = _0x3372d6['sort']()['join']();
    _0x5369bc = _0x5369bc['sort']()['reverse']()['join']();
    _0x3372d6 < _0x5369bc ? console['log']('Yes') : console['log']('No');
}
main(require('fs')['readFileSync']('/dev/stdin', 'UTF-8'));