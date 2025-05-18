const a0_0x185f94 = a0_0xf7e9;
function Main(input) {
    const _0x48b607 = a0_0xf7e9;
    let Red = 0x0;
    let Blue = 0x0;
    const input_line = input[_0x48b607(0x0)]('\x0a');
    inputS = input_line[0x1][_0x48b607(0x0)]('');
    for (i = 0x0; i < inputS[_0x48b607(0x1)]; i++) {
        if (inputS[i] === 'R') {
            Red++;
        } else {
            Blue++;
        }
    }
    console[_0x48b607(0x2)](Red > Blue ? 'Yes' : 'No');
}
Main(require('fs')['readFileSync'](a0_0x185f94(0x3), a0_0x185f94(0x4)));
function a0_0xf7e9(NXRTvi, key) {
    const stringArray = a0_0xf181();
    a0_0xf7e9 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xf7e9(NXRTvi, key);
}
function a0_0xf181() {
    const _0x44d7c7 = [
        'split',
        'length',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0xf181 = function () {
        return _0x44d7c7;
    };
    return a0_0xf181();
}