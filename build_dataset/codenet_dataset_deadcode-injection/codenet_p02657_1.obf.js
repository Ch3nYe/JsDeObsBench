function a0_0x5c78(WwrevO, key) {
    const stringArray = a0_0x1fcd();
    a0_0x5c78 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5c78(WwrevO, key);
}
const a0_0x5c1dae = a0_0x5c78;
const main = stdin => {
    const _0x3b6dc3 = a0_0x5c78;
    const [A, B] = stdin[_0x3b6dc3(0x0)]()['split']('\x20')[_0x3b6dc3(0x1)](x => parseInt(x));
    console[_0x3b6dc3(0x2)](A * B);
};
function a0_0x1fcd() {
    const _0x994143 = [
        'trim',
        'map',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x1fcd = function () {
        return _0x994143;
    };
    return a0_0x1fcd();
}
main(require('fs')[a0_0x5c1dae(0x3)](a0_0x5c1dae(0x4), 'utf8'));