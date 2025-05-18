var a0_0x8858f2 = a0_0x2a2f;
process[a0_0x8858f2(0x0)]['resume']();
function a0_0x2a2f(erHWwy, key) {
    var stringArray = a0_0x1371();
    a0_0x2a2f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2a2f(erHWwy, key);
}
process[a0_0x8858f2(0x0)][a0_0x8858f2(0x1)]('utf8');
function a0_0x1371() {
    var _0x4cb51e = [
        'stdin',
        'setEncoding',
        'data',
        'push',
        'split',
        'map',
        'log',
        'abs',
        'toFixed',
        'shift'
    ];
    a0_0x1371 = function () {
        return _0x4cb51e;
    };
    return a0_0x1371();
}
process[a0_0x8858f2(0x0)]['on'](a0_0x8858f2(0x2), function (chunk) {
    var _0x41afa0 = a0_0x2a2f;
    var input = chunk['trim']()['split']('\x0a');
    var order = 0x1;
    while (!![]) {
        var n = input['shift']();
        if (n == 0x0)
            break;
        var coordinate = [];
        while (n--)
            coordinate[_0x41afa0(0x3)](input['shift']()[_0x41afa0(0x4)]('\x20')[_0x41afa0(0x5)](Number));
        coordinate['push'](coordinate[0x0]);
        var area = 0x0;
        for (var i = 0x0; i < coordinate['length'] - 0x1; i++) {
            area += coordinate[i][0x0] * coordinate[i + 0x1][0x1] - coordinate[i][0x1] * coordinate[i + 0x1][0x0];
        }
        console[_0x41afa0(0x6)](order + '\x20' + Math[_0x41afa0(0x7)](area / 0x2)[_0x41afa0(0x8)](0x1));
        input[_0x41afa0(0x9)]();
        order++;
    }
});