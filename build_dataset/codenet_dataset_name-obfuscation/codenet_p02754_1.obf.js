'use strict';
function main(_0x5cda15) {
    let _0x912f0c = _0x5cda15[0x0]['trim']()['split']('\x20');
    let _0x2a89dc = parseInt(_0x912f0c[0x0]);
    let _0x42e660 = parseInt(_0x912f0c[0x1]);
    let _0x5c313f = parseInt(_0x912f0c[0x2]);
    let _0x324b70 = _0x42e660 + _0x5c313f;
    let _0x557754 = 0x0;
    if (_0x42e660 === 0x0) {
        console['log'](0x0);
    } else if (_0x5c313f === 0x0) {
        console['log'](_0x2a89dc);
    } else {
        if (_0x2a89dc % _0x324b70 < _0x42e660) {
            _0x557754 = Math['floor'](_0x2a89dc / _0x324b70) * _0x42e660 + _0x2a89dc % _0x324b70;
        } else {
            _0x557754 = Math['floor'](_0x2a89dc / _0x324b70) * _0x42e660 + _0x42e660;
        }
        console['log'](_0x557754);
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));