var a0_0xea5120 = a0_0x19c9;
process[a0_0xea5120(0x0)][a0_0xea5120(0x1)]();
function a0_0x19c9(gzcwDD, key) {
    var stringArray = a0_0x5156();
    a0_0x19c9 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x19c9(gzcwDD, key);
}
function a0_0x5156() {
    var _0x4d3882 = [
        'stdin',
        'resume',
        'setEncoding',
        'utf8',
        'data',
        'end',
        'log',
        'Yes'
    ];
    a0_0x5156 = function () {
        return _0x4d3882;
    };
    return a0_0x5156();
}
process[a0_0xea5120(0x0)][a0_0xea5120(0x2)](a0_0xea5120(0x3));
var g_input = '';
process[a0_0xea5120(0x0)]['on'](a0_0xea5120(0x4), function (chunk) {
    g_input += chunk;
});
process['stdin']['on'](a0_0xea5120(0x5), function () {
    Main(g_input['split'](/\r?\n/));
});
function Main(input) {
    var _0x80311a = a0_0x19c9;
    if (input[0x0][0x0] === '9' || input[0x0][0x1] === '9') {
        console[_0x80311a(0x6)](_0x80311a(0x7));
    } else {
        console[_0x80311a(0x6)]('No');
    }
    return 0x0;
}