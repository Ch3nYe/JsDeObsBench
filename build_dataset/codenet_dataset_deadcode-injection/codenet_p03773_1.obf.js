var a0_0x59fd64 = a0_0x5e4f;
function a0_0xec01() {
    var _0x2c7a75 = [
        'stdin',
        'resume',
        'setEncoding',
        'utf8',
        'data',
        'toString',
        'split'
    ];
    a0_0xec01 = function () {
        return _0x2c7a75;
    };
    return a0_0xec01();
}
function a0_0x5e4f(JXfqMV, key) {
    var stringArray = a0_0xec01();
    a0_0x5e4f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5e4f(JXfqMV, key);
}
process[a0_0x59fd64(0x0)][a0_0x59fd64(0x1)]();
process['stdin'][a0_0x59fd64(0x2)](a0_0x59fd64(0x3));
process[a0_0x59fd64(0x0)]['on'](a0_0x59fd64(0x4), function (chunk) {
    var _0x221244 = a0_0x5e4f;
    var lines = chunk[_0x221244(0x5)]()[_0x221244(0x6)]('\x20');
    var first = Number(lines[0x0]);
    var second = Number(lines[0x1]);
    var time = second + first;
    if (time < 0x18) {
        console['log'](time);
    } else {
        console['log'](time - 0x18);
    }
});