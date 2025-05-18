function main(_0x2ef721) {
    const [_0x27fd5f, _0x59a6bd] = na();
    const _0xf81e6f = Array(_0x27fd5f + 0x1)['fill'](0x0)['map'](() => new Set());
    for (let _0x456b83 = 0x1; _0x456b83 <= _0x59a6bd; _0x456b83++) {
        const [_0x73397b, _0x3070a1] = na();
        _0xf81e6f[_0x73397b]['add'](_0x3070a1);
        _0xf81e6f[_0x3070a1]['add'](_0x73397b);
    }
    let _0x255599 = 0x0;
    _0x4358ce(_0xf81e6f[0x1], [0x1]);
    function _0x4358ce(_0x34729c, _0x72ae56) {
        if (_0x72ae56['length'] == _0x27fd5f)
            return ++_0x255599;
        for (let _0xfd4e2e of _0x34729c) {
            if (_0x72ae56['includes'](_0xfd4e2e))
                continue;
            _0x4358ce(_0xf81e6f[_0xfd4e2e], _0x72ae56['concat'](_0xfd4e2e));
        }
    }
    return _0x255599;
}
const lines = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
let lineCount = 0x0;
const s = () => lines[lineCount++];
const n = () => Number(s());
const b = () => BigInt(s());
const sa = () => s()['split']('\x20');
const na = () => sa()['map'](Number);
const ba = () => sa()['map'](BigInt);
const ans = main(lines);
console['log'](ans);