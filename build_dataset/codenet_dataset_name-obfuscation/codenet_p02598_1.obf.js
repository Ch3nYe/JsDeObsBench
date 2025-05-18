function main(_0x5f2b8d) {
    const _0x1ad2df = _0x5f2b8d['split']('\x0a');
    const _0x2f5491 = 0x0 | _0x1ad2df[0x0]['split']('\x20')[0x1];
    let _0x5ce706 = new Int32Array(_0x1ad2df[0x1]['split']('\x20'));
    let _0x9caaeb = (_0x10a038 = 0x0, _0x3f0f6c = 0x0) => {
        _0x5ce706['forEach'](_0x1bdb4e => {
            let _0x566f26 = 0x0 | _0x1bdb4e / _0x10a038;
            if (_0x1bdb4e === _0x566f26 * _0x10a038) {
                _0x566f26--;
            }
            _0x3f0f6c -= _0x566f26;
        });
        return _0x3f0f6c >= 0x0;
    };
    let _0x14770c = 0x0;
    let _0x33b857 = Math['max'](..._0x5ce706);
    let _0x44ee34 = 0x0 | (_0x33b857 + _0x14770c) * 0.5;
    let _0x4f19d1 = _0x33b857;
    while (_0x14770c < _0x33b857) {
        if (_0x9caaeb(_0x44ee34, _0x2f5491)) {
            _0x4f19d1 = _0x44ee34;
            _0x33b857 = _0x44ee34 - 0x1;
        } else {
            _0x14770c = _0x44ee34 + 0x1;
        }
        _0x44ee34 = 0x0 | (_0x33b857 + _0x14770c) * 0.5;
    }
    return _0x4f19d1;
}
exports['main'] = main;
function Main(_0x271ceb) {
    console['log'](main(_0x271ceb['trim']()));
}
if (process['argv'][0x2] !== 'test') {
    Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
}