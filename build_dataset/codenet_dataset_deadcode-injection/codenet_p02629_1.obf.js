const a0_0x1dcb37 = a0_0x2d12;
function a0_0x2d12(AyoVPu, key) {
    const stringArray = a0_0x2b5c();
    a0_0x2d12 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2d12(AyoVPu, key);
}
function Main(inputs) {
    const _0x48fcf0 = a0_0x2d12;
    const inputline = inputs[_0x48fcf0(0x0)]('\x0a')[_0x48fcf0(0x1)](x => parseInt(x, 0xa));
    const line = inputline[0x0];
    function base26(number) {
        const _0x456323 = a0_0x2d12;
        let remainder26 = number % 0x1a;
        let division26 = Math[_0x456323(0x2)](number / 0x1a);
        let output = remainder26 != 0x0 ? String[_0x456323(0x3)](0x40 + remainder26) : (--division26, 'Z');
        return output = division26 != 0x0 ? base26(division26) + output : output;
    }
    console['log'](base26(line)[_0x48fcf0(0x4)]());
}
function a0_0x2b5c() {
    const _0xb05fbd = [
        'split',
        'map',
        'floor',
        'fromCharCode',
        'toLowerCase',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2b5c = function () {
        return _0xb05fbd;
    };
    return a0_0x2b5c();
}
Main(require('fs')['readFileSync'](a0_0x1dcb37(0x5), a0_0x1dcb37(0x6)));