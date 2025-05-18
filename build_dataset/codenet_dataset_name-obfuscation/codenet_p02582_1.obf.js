function main(_0x443340) {
    _0x443340 = _0x443340['trim']();
    let _0x434770 = _0x443340['split']('');
    let _0x125d41 = 0x0;
    for (let _0x27251f = 0x0; _0x27251f < _0x434770['length']; _0x27251f++) {
        if (_0x434770[_0x27251f] === 'R') {
            if (_0x125d41 === 0x0) {
                _0x125d41++;
            } else if (_0x434770[_0x27251f - 0x1] === 'R') {
                _0x125d41++;
            }
        }
    }
    console['log'](_0x125d41);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));