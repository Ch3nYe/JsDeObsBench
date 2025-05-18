process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
const lines = [];
const reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', _0x48fe8e => {
    lines['push'](_0x48fe8e);
});
reader['on']('close', () => {
    const _0x2eeebd = Number(lines[0x0]);
    const _0x2ea0bc = lines[0x1];
    const _0x2a1ced = _0x2ea0bc['split']('');
    const _0x24be8f = _0x2a1ced['filter'](_0xb5595d => _0xb5595d === 'R');
    const _0x3e8607 = _0x2a1ced['filter'](_0x576b04 => _0x576b04 === 'G');
    const _0x110bcc = _0x2a1ced['filter'](_0x585bd3 => _0x585bd3 === 'B');
    let _0x4c08df = 0x0;
    for (let _0x55c273 = 0x1; _0x55c273 < Number(_0x2eeebd) + 0x1; _0x55c273++) {
        for (let _0x3d12e7 = _0x55c273 + 0x1; _0x3d12e7 < Number(_0x2eeebd) + 0x1; _0x3d12e7++) {
            const _0x2c9388 = _0x3d12e7 + _0x3d12e7 - _0x55c273;
            if (_0x2c9388 <= _0x2eeebd && _0x2a1ced[_0x55c273 - 0x1] !== _0x2a1ced[_0x3d12e7 - 0x1] && _0x2a1ced[_0x3d12e7 - 0x1] !== _0x2a1ced[_0x2c9388 - 0x1] && _0x2a1ced[_0x55c273 - 0x1] !== _0x2a1ced[_0x2c9388 - 0x1]) {
                _0x4c08df = _0x4c08df + 0x1;
            }
        }
    }
    console['log'](_0x24be8f['length'] * _0x3e8607['length'] * _0x110bcc['length'] - _0x4c08df);
});