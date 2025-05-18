process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var lines = [];
var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', _0x5409c2 => {
    lines['push'](_0x5409c2);
});
reader['on']('close', () => {
    var _0x73457d = lines[0x0];
    var _0x2cfb31 = lines[0x1]['split']('\x20')['map'](_0x36d8d9 => Number(_0x36d8d9));
    var _0x36ff4b = 0x0;
    var _0x4347b3 = 0x1;
    var _0x19b545 = 0x0;
    for (var _0x43ad66 = 0x0; _0x43ad66 < _0x73457d; _0x43ad66++) {
        if (_0x2cfb31[_0x4347b3 - 0x1] == _0x4347b3) {
            _0x19b545 += _0x4347b3;
            _0x4347b3++;
        } else {
            _0x36ff4b++;
            _0x2cfb31['splice'](_0x4347b3 - 0x1, 0x1);
        }
    }
    var _0x470aca = ![];
    if (_0x2cfb31['length'] == 0x0) {
        _0x470aca = !![];
    }
    if (_0xd8a97a(_0x2cfb31['length']) != _0x19b545) {
        _0x470aca = !![];
    }
    if (_0x36ff4b == 0x0 && _0x470aca) {
        console['log'](0x0);
    } else {
        if (_0x470aca) {
            console['log'](-0x1);
        } else {
            console['log'](_0x36ff4b);
        }
    }
    function _0xd8a97a(_0x152588) {
        return _0x152588 * (_0x152588 + 0x1) * 0.5;
    }
});