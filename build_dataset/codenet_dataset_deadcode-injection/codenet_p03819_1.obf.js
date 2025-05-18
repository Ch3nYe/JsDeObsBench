var a0_0x462f08 = a0_0x3f3b;
function Main(input) {
    var _0x3b8033 = a0_0x3f3b;
    input = input[_0x3b8033(0x0)]('\x0a');
    var N = input[0x0][_0x3b8033(0x0)]('\x20')[0x0] - 0x0;
    var M = input[0x0][_0x3b8033(0x0)]('\x20')[0x1] - 0x0;
    var answer = new Array(M + 0x1);
    answer['fill'](0x0);
    var line;
    for (var i = 0x1; i < input[_0x3b8033(0x1)]; i++) {
        line = input[i][_0x3b8033(0x0)]('\x20');
        line[0x1] -= 0x0;
        line[0x0] -= 0x0;
        for (var j = 0x1; j <= M; j++) {
            if (!(line[0x1] - line[0x0] < j - 0x1 && line[0x1] % j >= line[0x0] % j && line[0x0] % j > 0x0)) {
                answer[j]++;
            }
        }
    }
    answer['shift']();
    console[_0x3b8033(0x2)](answer['join']('\x0a'));
}
Main(require('fs')[a0_0x462f08(0x3)]('/dev/stdin', a0_0x462f08(0x4)));
function a0_0x3f3b(rHpSNW, key) {
    var stringArray = a0_0x552a();
    a0_0x3f3b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3f3b(rHpSNW, key);
}
function a0_0x552a() {
    var _0x43c736 = [
        'split',
        'length',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x552a = function () {
        return _0x43c736;
    };
    return a0_0x552a();
}