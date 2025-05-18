function a0_0xfbd4() {
    var _0x204dd6 = [
        'utf8',
        '105oCmhpB',
        '14502IBCKLW',
        '258606ZuLLJa',
        'split',
        '236791BtCngz',
        '237TAsLzJ',
        '8002664CxGxcJ',
        '2123346OxOPvn',
        'map',
        'Yes',
        '13924NdOcqq',
        '/dev/stdin',
        'readFileSync',
        '4564890IKnGQB',
        'log',
        '330kNCXOj'
    ];
    a0_0xfbd4 = function () {
        return _0x204dd6;
    };
    return a0_0xfbd4();
}
var a0_0x5e3aa9 = a0_0x3024;
(function (stringArrayFunction, comparisonValue) {
    var _0x313302 = a0_0x3024;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x313302(0x159)) / 0x1 + parseInt(_0x313302(0x15c)) / 0x2 + -parseInt(_0x313302(0x15a)) / 0x3 * (-parseInt(_0x313302(0x15f)) / 0x4) + parseInt(_0x313302(0x162)) / 0x5 + parseInt(_0x313302(0x156)) / 0x6 * (parseInt(_0x313302(0x155)) / 0x7) + -parseInt(_0x313302(0x15b)) / 0x8 + -parseInt(_0x313302(0x157)) / 0x9 * (parseInt(_0x313302(0x164)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xfbd4, 0x8c2bd));
function Main(input) {
    var _0x453bb8 = a0_0x3024;
    input = input[_0x453bb8(0x158)]('\x0a');
    var N = input[0x0];
    var a = input[0x1]['split']('\x20');
    var flag = !![];
    a = a[_0x453bb8(0x15d)](x => parseInt(x));
    for (var i = 0x0; i < N - 0x2; i++) {
        var x = i === 0x0 ? N - 0x1 : i - 0x1;
        if ((a[i + 0x1] ^ a[x]) !== a[i]) {
            flag = ![];
            break;
        }
    }
    var str = flag === !![] ? _0x453bb8(0x15e) : 'No';
    console[_0x453bb8(0x163)]('%s', str);
}
function a0_0x3024(yTaien, key) {
    var stringArray = a0_0xfbd4();
    a0_0x3024 = function (index, key) {
        index = index - 0x154;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3024(yTaien, key);
}
Main(require('fs')[a0_0x5e3aa9(0x161)](a0_0x5e3aa9(0x160), a0_0x5e3aa9(0x154)));