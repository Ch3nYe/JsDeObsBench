var a0_0x5911c9 = a0_0xe8ed;
function Main(input) {
    var _0x1d1ec9 = a0_0xe8ed;
    input = input[_0x1d1ec9(0x0)]('\x0a');
    var inputs = input[0x1][_0x1d1ec9(0x0)]('\x20');
    function avg(args) {
        var _0x2b0041 = a0_0xe8ed;
        var num = 0x0;
        for (var n of args) {
            num += Number(n);
        }
        return num / args[_0x2b0041(0x1)];
    }
    var average = Math[_0x1d1ec9(0x2)](avg(inputs));
    var useStamina = 0x0;
    for (var point of inputs) {
        useStamina += Math[_0x1d1ec9(0x3)](average - point, 0x2);
    }
    console[_0x1d1ec9(0x4)](useStamina);
}
function a0_0x24fd() {
    var _0x16c3df = [
        'split',
        'length',
        'round',
        'pow',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x24fd = function () {
        return _0x16c3df;
    };
    return a0_0x24fd();
}
function a0_0xe8ed(Doauhr, key) {
    var stringArray = a0_0x24fd();
    a0_0xe8ed = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xe8ed(Doauhr, key);
}
Main(require('fs')[a0_0x5911c9(0x5)](a0_0x5911c9(0x6), 'utf8'));