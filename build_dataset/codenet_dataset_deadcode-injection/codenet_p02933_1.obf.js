const a0_0x32e3c7 = a0_0x41e3;
const Main = input => {
    const _0x32804c = a0_0x41e3;
    input = input['split']('\x0a');
    const a = input[0x0];
    const s = input[0x1];
    if (a >= 0xc80) {
        console[_0x32804c(0x0)](s);
    } else {
        console[_0x32804c(0x0)]('red');
    }
};
function a0_0x41e3(jHqJzX, key) {
    const stringArray = a0_0xba65();
    a0_0x41e3 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x41e3(jHqJzX, key);
}
Main(require('fs')['readFileSync'](a0_0x32e3c7(0x1), a0_0x32e3c7(0x2)));
function a0_0xba65() {
    const _0x28a816 = [
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0xba65 = function () {
        return _0x28a816;
    };
    return a0_0xba65();
}