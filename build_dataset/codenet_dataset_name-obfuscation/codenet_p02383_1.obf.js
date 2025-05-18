process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
const reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
const lines = [];
reader['on']('line', _0x5895af => {
    lines['push'](_0x5895af);
});
reader['on']('close', () => {
    let [_0x2a4c95, _0x531fbb, _0x4bd144, _0x4b4497, _0x1bfc6e, _0x396f85] = lines[0x0]['split']('\x20')['map'](Number);
    const _0x25853d = lines[0x1];
    for (let _0xd375e3 = 0x0; _0xd375e3 < _0x25853d['length']; _0xd375e3++) {
        switch (_0x25853d[_0xd375e3]) {
        case 'N':
            [_0x2a4c95, _0x1bfc6e, _0x396f85, _0x531fbb] = [
                _0x531fbb,
                _0x2a4c95,
                _0x1bfc6e,
                _0x396f85
            ];
            break;
        case 'S':
            [_0x2a4c95, _0x1bfc6e, _0x396f85, _0x531fbb] = [
                _0x1bfc6e,
                _0x396f85,
                _0x531fbb,
                _0x2a4c95
            ];
            break;
        case 'W':
            [_0x2a4c95, _0x4b4497, _0x396f85, _0x4bd144] = [
                _0x4bd144,
                _0x2a4c95,
                _0x4b4497,
                _0x396f85
            ];
            break;
        case 'E':
            [_0x2a4c95, _0x4b4497, _0x396f85, _0x4bd144] = [
                _0x4b4497,
                _0x396f85,
                _0x4bd144,
                _0x2a4c95
            ];
            break;
        }
    }
    console['log'](_0x2a4c95);
});