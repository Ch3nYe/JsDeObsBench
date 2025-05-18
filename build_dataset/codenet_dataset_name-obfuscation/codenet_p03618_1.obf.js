main();
function main() {
    var _0x33bad8 = require('readline');
    var _0x7f4d5a = _0x33bad8['createInterface']({
        'input': process['stdin'],
        'output': process['stdout']
    });
    var _0x5e11c4 = [];
    _0x7f4d5a['on']('line', function (_0x17249a) {
        _0x5e11c4['push'](_0x17249a);
    });
    _0x7f4d5a['on']('close', function () {
        console['log'](countSequencePattern(_0x5e11c4[0x0]));
    });
}
function countSequencePattern(_0xdd0ca9) {
    var _0x28242c = 0x1;
    var _0x59d687 = _0xdd0ca9['split']('');
    for (var _0x2c1439 = 0x0; _0x2c1439 < _0x59d687['length']; _0x2c1439++) {
        for (var _0x295260 = _0x2c1439; _0x295260 < _0x59d687['length']; _0x295260++) {
            if (_0x59d687[_0x2c1439] != _0x59d687[_0x295260])
                _0x28242c++;
        }
    }
    return _0x28242c;
}