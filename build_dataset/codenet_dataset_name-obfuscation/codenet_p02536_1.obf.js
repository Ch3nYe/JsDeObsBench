let lines = [];
let reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', function (_0x1ce0fd) {
    lines['push'](_0x1ce0fd);
});
reader['on']('close', function () {
    const [_0x3bb5f9, _0x532d1e] = lines[0x0]['split']('\x20');
    const _0x33a165 = [];
    const _0x1342fc = [];
    for (let _0x3d5b7f = 0x0; _0x3d5b7f < _0x532d1e; _0x3d5b7f++) {
        [_0x33a165[_0x3d5b7f], _0x1342fc[_0x3d5b7f]] = lines[_0x3d5b7f + 0x1]['split']('\x20');
    }
    const _0x46920b = [];
    _0x46920b['push'](_0x33a165[0x0]);
    _0x46920b['push'](_0x1342fc[0x0]);
    ans = _0x3bb5f9 - 0x2;
    for (let _0x58ce07 = 0x1; _0x58ce07 < _0x532d1e; _0x58ce07++) {
        if (!_0x46920b['includes'](_0x33a165[_0x58ce07]) && !_0x46920b['includes'](_0x1342fc[_0x58ce07])) {
            ans--;
        } else if (!_0x46920b['includes'](_0x33a165[_0x58ce07])) {
            ans--;
            _0x46920b['push'](_0x33a165[_0x58ce07]);
        } else if (!_0x46920b['includes'](_0x1342fc[_0x58ce07])) {
            ans--;
            _0x46920b['push'](_0x1342fc[_0x58ce07]);
        }
    }
    console['log'](ans);
});