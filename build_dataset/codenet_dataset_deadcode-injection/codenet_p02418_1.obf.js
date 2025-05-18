function a0_0x35be(Pqiksa, key) {
    const stringArray = a0_0x34d5();
    a0_0x35be = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x35be(Pqiksa, key);
}
const a0_0x1c4cad = a0_0x35be;
const input = require('fs')[a0_0x1c4cad(0x0)]('/dev/stdin', 'utf8');
const arr = input['split']('\x0a');
const regExp = new RegExp(arr[0x1]);
console['log'](regExp[a0_0x1c4cad(0x1)](arr[0x0] + arr[0x0]) ? a0_0x1c4cad(0x2) : 'No');
function a0_0x34d5() {
    const _0x4b6670 = [
        'readFileSync',
        'test',
        'Yes'
    ];
    a0_0x34d5 = function () {
        return _0x4b6670;
    };
    return a0_0x34d5();
}