var a0_0x194cf6 = a0_0x8614;
(function (stringArrayFunction, comparisonValue) {
    var _0x2f90a3 = a0_0x8614;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x2f90a3(0x79)) / 0x1 + parseInt(_0x2f90a3(0x77)) / 0x2 * (-parseInt(_0x2f90a3(0x76)) / 0x3) + -parseInt(_0x2f90a3(0x6c)) / 0x4 + parseInt(_0x2f90a3(0x6f)) / 0x5 + parseInt(_0x2f90a3(0x6b)) / 0x6 + parseInt(_0x2f90a3(0x6d)) / 0x7 + parseInt(_0x2f90a3(0x72)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x56bd, 0x882ac));
function a0_0x8614(oEpZJi, key) {
    var stringArray = a0_0x56bd();
    a0_0x8614 = function (index, key) {
        index = index - 0x6b;
        var value = stringArray[index];
        return value;
    };
    return a0_0x8614(oEpZJi, key);
}
process[a0_0x194cf6(0x78)][a0_0x194cf6(0x73)]();
process[a0_0x194cf6(0x78)][a0_0x194cf6(0x6e)](a0_0x194cf6(0x75));
function a0_0x56bd() {
    var _0x5a0268 = [
        '16005344HcETES',
        'resume',
        'data',
        'utf8',
        '239604pNeDTC',
        '16RPJuKR',
        'stdin',
        '862068KcmXJT',
        '468696noDwAv',
        '3854156HLxgpf',
        '3558443anhdGX',
        'setEncoding',
        '2175790chwmTz',
        'log',
        'split'
    ];
    a0_0x56bd = function () {
        return _0x5a0268;
    };
    return a0_0x56bd();
}
process[a0_0x194cf6(0x78)]['on'](a0_0x194cf6(0x74), function (chunk) {
    var _0x208431 = a0_0x194cf6;
    var lines = chunk['toString']()[_0x208431(0x71)]('\x20');
    var first = Number(lines[0x0]);
    var second = Number(lines[0x1]);
    var time = second + first;
    if (time < 0x18) {
        console[_0x208431(0x70)](time);
    } else {
        console[_0x208431(0x70)](time - 0x18);
    }
});