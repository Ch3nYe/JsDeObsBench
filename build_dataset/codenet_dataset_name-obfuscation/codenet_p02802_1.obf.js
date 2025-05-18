'use strict';
function Main(_0x4678f2) {
    let _0x30cab5 = _0x4678f2['split']('\x0a');
    let _0x21b2e2 = _0x30cab5['shift']()['split']('\x20')[0x1];
    let _0x136984 = {};
    for (let _0x5557cf = 0x0; _0x5557cf < _0x21b2e2; _0x5557cf++) {
        let _0x2219da = _0x30cab5[_0x5557cf]['split']('\x20')[0x0];
        let _0x3aece3 = _0x30cab5[_0x5557cf]['split']('\x20')[0x1];
        if (_0x136984[_0x2219da] === undefined) {
            _0x136984[_0x2219da] = '' + _0x3aece3;
        } else {
            _0x136984[_0x2219da] += ',' + _0x3aece3;
        }
    }
    let _0x561433 = 0x0;
    let _0x5d3647 = 0x0;
    let _0x96cd07 = Object['keys'](_0x136984);
    for (let _0x1b429f = 0x0; _0x1b429f < _0x96cd07['length']; _0x1b429f++) {
        let _0x4ac3a1 = _0x96cd07[_0x1b429f];
        let _0x329fec = _0x136984[_0x4ac3a1]['split'](',');
        for (let _0x3928c5 = 0x0; _0x3928c5 < _0x329fec['length']; _0x3928c5++) {
            if (_0x329fec[_0x3928c5] == 'AC') {
                _0x5d3647++;
                break;
            } else {
                _0x561433++;
            }
        }
    }
    console['log'](_0x5d3647 + '\x20' + _0x561433);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));