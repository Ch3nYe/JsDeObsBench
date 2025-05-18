function a0_0x4add() {
    const _0x21a405 = [
        'trim',
        'split',
        'map',
        'abs',
        '/dev/stdin'
    ];
    a0_0x4add = function () {
        return _0x21a405;
    };
    return a0_0x4add();
}
const a0_0x4e80a2 = a0_0x30de;
function a0_0x30de(IrNQPI, key) {
    const stringArray = a0_0x4add();
    a0_0x30de = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x30de(IrNQPI, key);
}
console['log']((args => {
    const _0x2a8ccc = a0_0x30de;
    const [N, M] = args[_0x2a8ccc(0x0)]()[_0x2a8ccc(0x1)]('\x20')[_0x2a8ccc(0x2)](v => v - 0x2);
    return '' + Math[_0x2a8ccc(0x3)](N * M);
})(require('fs')['readFileSync'](a0_0x4e80a2(0x4), 'utf8')));