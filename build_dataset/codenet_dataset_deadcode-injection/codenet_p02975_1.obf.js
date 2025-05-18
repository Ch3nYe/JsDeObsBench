var a0_0x2625e0 = a0_0x1c71;
function Main(input) {
    var _0x1957e7 = a0_0x1c71;
    input = input[_0x1957e7(0x0)]('\x0a');
    var N = input[0x0];
    var a = input[0x1][_0x1957e7(0x0)]('\x20');
    var flag = !![];
    a = a[_0x1957e7(0x1)](x => parseInt(x));
    for (var i = 0x0; i < N - 0x2; i++) {
        var x = i === 0x0 ? N - 0x1 : i - 0x1;
        if ((a[i + 0x1] ^ a[x]) !== a[i]) {
            flag = ![];
            break;
        }
    }
    var str = flag === !![] ? 'Yes' : 'No';
    console[_0x1957e7(0x2)]('%s', str);
}
function a0_0x519a() {
    var _0x501f39 = [
        'split',
        'map',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x519a = function () {
        return _0x501f39;
    };
    return a0_0x519a();
}
function a0_0x1c71(ExCCNu, key) {
    var stringArray = a0_0x519a();
    a0_0x1c71 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1c71(ExCCNu, key);
}
Main(require('fs')[a0_0x2625e0(0x3)](a0_0x2625e0(0x4), a0_0x2625e0(0x5)));