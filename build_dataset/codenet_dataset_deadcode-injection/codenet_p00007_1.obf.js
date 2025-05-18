var a0_0x48f3e5 = a0_0x8457;
function a0_0x8457(UzuvwY, key) {
    var stringArray = a0_0x5e27();
    a0_0x8457 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x8457(UzuvwY, key);
}
function main() {
    var _0x3c4a7c = a0_0x8457;
    var debt = 0x186a0;
    for (var i = 0x0; i < input[_0x3c4a7c(0x0)]() - 0x0; i++) {
        debt = Math[_0x3c4a7c(0x1)](debt * 1.05 / 0x3e8) * 0x3e8;
    }
    console[_0x3c4a7c(0x2)](debt);
}
var input = '';
function a0_0x5e27() {
    var _0x28d724 = [
        'trim',
        'ceil',
        'log',
        'stdin',
        'resume',
        'setEncoding',
        'data',
        'end'
    ];
    a0_0x5e27 = function () {
        return _0x28d724;
    };
    return a0_0x5e27();
}
process[a0_0x48f3e5(0x3)][a0_0x48f3e5(0x4)]();
process[a0_0x48f3e5(0x3)][a0_0x48f3e5(0x5)]('utf8');
process['stdin']['on'](a0_0x48f3e5(0x6), function (chunk) {
    input += chunk;
});
process[a0_0x48f3e5(0x3)]['on'](a0_0x48f3e5(0x7), function () {
    main();
});