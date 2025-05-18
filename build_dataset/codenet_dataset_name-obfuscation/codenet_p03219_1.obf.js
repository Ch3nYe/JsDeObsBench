const rl = require('readline')['createInterface']({ 'input': process['stdin'] });
rl['on']('line', _0x3c1017 => {
    const _0xb5b9de = _0x3c1017['split']('\x20');
    solve(Number(_0xb5b9de[0x0]), Number(_0xb5b9de[0x1]));
    rl['close']();
});
function solve(_0x1efd21, _0x2f87f1) {
    console['log'](_0x1efd21 + _0x2f87f1 / 0x2);
}