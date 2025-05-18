var a0_0x43faf1 = a0_0x9da5;
process[a0_0x43faf1(0x0)][a0_0x43faf1(0x1)]();
process[a0_0x43faf1(0x0)][a0_0x43faf1(0x2)](a0_0x43faf1(0x3));
var g_input = '';
function a0_0x9da5(pXfVjD, key) {
    var stringArray = a0_0x57bd();
    a0_0x9da5 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x9da5(pXfVjD, key);
}
process[a0_0x43faf1(0x0)]['on'](a0_0x43faf1(0x4), function (chunk) {
    g_input += chunk;
});
function a0_0x57bd() {
    var _0x64ad3d = [
        'stdin',
        'resume',
        'setEncoding',
        'utf8',
        'data',
        'end',
        'split',
        'log',
        'slice',
        'length',
        'FESTIVAL'
    ];
    a0_0x57bd = function () {
        return _0x64ad3d;
    };
    return a0_0x57bd();
}
process[a0_0x43faf1(0x0)]['on'](a0_0x43faf1(0x5), function () {
    var _0x423ffa = a0_0x9da5;
    Main(g_input[_0x423ffa(0x6)](/\r?\n/));
});
function Main(input) {
    var _0x357e9a = a0_0x9da5;
    console[_0x357e9a(0x7)](input[0x0][_0x357e9a(0x8)](0x0, input[0x0][_0x357e9a(0x9)] - _0x357e9a(0xa)[_0x357e9a(0x9)]));
    return 0x0;
}