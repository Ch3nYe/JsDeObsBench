function* main() {
    const _0x1c5518 = +(yield);
    let _0x416bd9 = 0x0;
    for (let _0x5d5f0b = 0x1; _0x5d5f0b <= _0x1c5518; _0x5d5f0b++)
        _0x416bd9 += Math['floor'](_0x5d5f0b * Math['floor'](0x1 + _0x1c5518 / _0x5d5f0b) * Math['floor'](_0x1c5518 / _0x5d5f0b) / 0x2);
    console['log'](_0x416bd9);
}
const iter = main();
iter['next']();
require('readline')['createInterface']({ 'input': process['stdin'] })['on']('line', _0x2d9ae9 => iter['next'](_0x2d9ae9));