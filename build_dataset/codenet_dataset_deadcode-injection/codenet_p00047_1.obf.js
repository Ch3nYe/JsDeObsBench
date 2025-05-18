var a0_0x196bc8 = a0_0x2ac6;
var a = 'A';
process['stdin'][a0_0x196bc8(0x0)]();
process[a0_0x196bc8(0x1)][a0_0x196bc8(0x2)](a0_0x196bc8(0x3));
process['stdin']['on'](a0_0x196bc8(0x4), function (chunk) {
    var _0x131667 = a0_0x2ac6;
    input = chunk['trim']()[_0x131667(0x5)](',');
    if (input[0x0] == a)
        a = input[0x1];
    else if (input[0x1] == a)
        a = input[0x0];
});
function a0_0x2ac6(vJriIZ, key) {
    var stringArray = a0_0x5ebc();
    a0_0x2ac6 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2ac6(vJriIZ, key);
}
process['stdin']['on']('end', function () {
    var _0xb11bca = a0_0x2ac6;
    console[_0xb11bca(0x6)](a);
});
function a0_0x5ebc() {
    var _0x1b3109 = [
        'resume',
        'stdin',
        'setEncoding',
        'utf8',
        'data',
        'split',
        'log'
    ];
    a0_0x5ebc = function () {
        return _0x1b3109;
    };
    return a0_0x5ebc();
}