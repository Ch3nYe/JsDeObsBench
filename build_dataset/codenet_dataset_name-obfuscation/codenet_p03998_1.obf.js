function Main(_0x3bfc19) {
    var _0x3bfc19 = _0x3bfc19['split']('\x0a');
    var _0x1937ba;
    var _0x535a28 = {
        'a': _0x3bfc19[0x0]['split'](''),
        'b': _0x3bfc19[0x1]['split'](''),
        'c': _0x3bfc19[0x2]['split']('')
    };
    var _0x3b776c = 'a';
    while (!![]) {
        currentCard = _0x535a28[_0x3b776c]['shift']();
        if (currentCard) {
            _0x3b776c = currentCard;
        } else {
            _0x1937ba = _0x3b776c['toUpperCase']();
            break;
        }
    }
    console['log'](_0x1937ba);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));