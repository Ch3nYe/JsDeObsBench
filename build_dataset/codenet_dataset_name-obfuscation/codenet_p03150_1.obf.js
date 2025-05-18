'use strict';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', _0x372968 => {
    let _0x3caba6 = _0x372968;
    let _0x37be77 = [
        'k',
        'e',
        'y',
        'e',
        'n',
        'c',
        'e'
    ];
    let _0x5cf6fd = 'keyence';
    if (_0x3caba6['indexOf']('keyence') != -0x1) {
        console['log']('YES');
        return;
    }
    let _0x43b674 = '';
    let _0x15047d = ![];
    for (let _0x2152b2 = 0x0; _0x2152b2 < 0x6; _0x2152b2++) {
        _0x43b674 += _0x37be77['shift']();
        let _0x47a0e8 = _0x5cf6fd['slice'](_0x2152b2 + 0x1);
        if (_0x3caba6['indexOf'](_0x43b674) != -0x1 && _0x3caba6['indexOf'](_0x47a0e8) != -0x1) {
            _0x15047d = !![];
            break;
        }
    }
    if (_0x15047d)
        console['log']('YES');
    else
        console['log']('NO');
});