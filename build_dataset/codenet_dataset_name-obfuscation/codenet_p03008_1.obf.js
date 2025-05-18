'use strict';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf-8');
let inputString = '';
let currentLine = 0x0;
process['stdin']['on']('data', _0xa083af => {
    inputString += _0xa083af;
});
process['stdin']['on']('end', _0x20ebd3 => {
    inputString = inputString['split']('\x0a');
    main();
});
function readLine() {
    return inputString[currentLine++];
}
function F(_0x1031ff, _0x3a3048, _0x2eac9f) {
    let _0x3f9fc6 = Array(_0x1031ff + 0x1)['fill'](0x0);
    for (let _0x45d98d = 0x0; _0x45d98d <= _0x1031ff; _0x45d98d++) {
        let _0x1c4f6c = _0x45d98d;
        for (let _0x50fbbc = 0x0; _0x50fbbc < 0x3; _0x50fbbc++) {
            if (_0x45d98d >= _0x3a3048[_0x50fbbc]) {
                let _0x4cfad0 = _0x3f9fc6[_0x45d98d - _0x3a3048[_0x50fbbc]] + _0x2eac9f[_0x50fbbc];
                if (_0x1c4f6c < _0x4cfad0) {
                    _0x1c4f6c = _0x4cfad0;
                }
            }
        }
        _0x3f9fc6[_0x45d98d] = _0x1c4f6c;
    }
    return _0x3f9fc6[_0x1031ff];
}
function main() {
    const _0x18c76c = parseInt(readLine(), 0xa);
    const _0x9ae4aa = readLine()['split']('\x20')['map'](_0x55ed9c => parseInt(_0x55ed9c, 0xa));
    const _0x558e77 = readLine()['split']('\x20')['map'](_0x535584 => parseInt(_0x535584, 0xa));
    let _0x26eb4c = F(_0x18c76c, _0x9ae4aa, _0x558e77);
    let _0x416176 = F(_0x26eb4c, _0x558e77, _0x9ae4aa);
    console['log'](_0x416176);
}