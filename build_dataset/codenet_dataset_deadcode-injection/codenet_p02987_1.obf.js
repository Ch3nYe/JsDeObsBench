function main(input) {
    const _0x5acae3 = a0_0x157b;
    const inputList = input[_0x5acae3(0x0)]('');
    const list = [];
    inputList['forEach'](il => {
        const _0x58b93b = a0_0x157b;
        if (!list['some'](l => l === il)) {
            list[_0x58b93b(0x1)](il);
        }
    });
    const result = list[_0x5acae3(0x2)] === 0x2 ? _0x5acae3(0x3) : 'No';
    console[_0x5acae3(0x4)](result);
}
function a0_0x3d20() {
    const _0x34f4f1 = [
        'split',
        'push',
        'length',
        'Yes',
        'log'
    ];
    a0_0x3d20 = function () {
        return _0x34f4f1;
    };
    return a0_0x3d20();
}
function a0_0x157b(cDsjcG, key) {
    const stringArray = a0_0x3d20();
    a0_0x157b = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x157b(cDsjcG, key);
}
;
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));