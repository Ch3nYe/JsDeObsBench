var a0_0x312ca9 = a0_0x19c6;
function a0_0x18ce() {
    var _0x233da5 = [
        'split',
        'map',
        'shift',
        'forEach',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim'
    ];
    a0_0x18ce = function () {
        return _0x233da5;
    };
    return a0_0x18ce();
}
function Main(input) {
    var _0xd42687 = a0_0x19c6;
    input = input[_0xd42687(0x0)]('\x0a');
    var m = input[0x0]['split']('\x20')[_0xd42687(0x1)](Number);
    input[_0xd42687(0x2)]();
    var arr = new Array(0x23)['fill'](0x0);
    input[_0xd42687(0x3)](function (val) {
        var _0x48123f = a0_0x19c6;
        var mem = val[_0x48123f(0x0)]('\x20')[_0x48123f(0x1)](Number);
        mem['shift']();
        mem[_0x48123f(0x3)](function (p) {
            arr[p]++;
        });
    });
    var ans = 0x0;
    arr[_0xd42687(0x3)](function (val) {
        if (val == m[0x0])
            ans++;
    });
    console[_0xd42687(0x4)](ans);
}
function a0_0x19c6(EbyXqQ, key) {
    var stringArray = a0_0x18ce();
    a0_0x19c6 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x19c6(EbyXqQ, key);
}
Main(require('fs')[a0_0x312ca9(0x5)](a0_0x312ca9(0x6), a0_0x312ca9(0x7))[a0_0x312ca9(0x8)]());