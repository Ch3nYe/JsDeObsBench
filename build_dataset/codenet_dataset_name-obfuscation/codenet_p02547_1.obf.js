let lines = [];
let reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', function (_0x2f7ed2) {
    lines['push'](_0x2f7ed2);
});
reader['on']('close', function () {
    let _0x42cc63 = [];
    let _0x3e16fd = [];
    const _0x2a1e43 = lines[0x0];
    let _0x550195 = 'No';
    for (let _0x1fd09e = 0x1; _0x1fd09e < _0x2a1e43; _0x1fd09e++) {
        _0x42cc63['push'](lines[_0x1fd09e]['split']('\x20')[0x0]);
        _0x3e16fd['push'](lines[_0x1fd09e]['split']('\x20')[0x1]);
    }
    for (let _0x5785e8 = 0x0; _0x5785e8 < _0x2a1e43 - 0x2; _0x5785e8++) {
        if (_0x42cc63[_0x5785e8] == _0x3e16fd[_0x5785e8]) {
            if (_0x42cc63[_0x5785e8 + 0x1] == _0x3e16fd[_0x5785e8 + 0x1]) {
                if (_0x42cc63[_0x5785e8 + 0x2] == _0x3e16fd[_0x5785e8 + 0x2]) {
                    _0x550195 = 'Yes';
                    break;
                }
            }
        }
    }
    console['log'](_0x550195);
});