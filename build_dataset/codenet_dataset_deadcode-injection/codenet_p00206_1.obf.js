function a0_0xe84e(hzMEvi, key) {
    var stringArray = a0_0x1205();
    a0_0xe84e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xe84e(hzMEvi, key);
}
var a0_0x13bea2 = a0_0xe84e;
function main() {
    var _0x4777f0 = a0_0xe84e;
    var i = 0x0, j, flag, L, MN;
    for (;;) {
        L = Number(input[i++]);
        if (L === 0x0)
            break;
        flag = !![];
        for (j = 0x0; j < 0xc; j++) {
            MN = input[i++][_0x4777f0(0x0)]('\x20')[_0x4777f0(0x1)](Number);
            L -= MN[0x0] - MN[0x1];
            if (flag && L <= 0x0) {
                console[_0x4777f0(0x2)](j + 0x1);
                flag = ![];
            }
        }
        if (flag)
            console['log']('NA');
    }
}
var input = '';
process[a0_0x13bea2(0x3)][a0_0x13bea2(0x4)]();
process[a0_0x13bea2(0x3)][a0_0x13bea2(0x5)](a0_0x13bea2(0x6));
process[a0_0x13bea2(0x3)]['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on'](a0_0x13bea2(0x7), function () {
    input = input['split']('\x0a');
    main();
});
function a0_0x1205() {
    var _0x1b2420 = [
        'split',
        'map',
        'log',
        'stdin',
        'resume',
        'setEncoding',
        'utf8',
        'end'
    ];
    a0_0x1205 = function () {
        return _0x1b2420;
    };
    return a0_0x1205();
}