var a0_0x377f27 = a0_0x2181;
function a0_0x4815() {
    var _0x9a21e2 = [
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x4815 = function () {
        return _0x9a21e2;
    };
    return a0_0x4815();
}
function a0_0x2181(JFoYsV, key) {
    var stringArray = a0_0x4815();
    a0_0x2181 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2181(JFoYsV, key);
}
function main(input) {
    var input = input;
    var sum = 0x0;
    for (var i = 0x0; i < 0x4; i++) {
        if (input[i] == '+') {
            sum += 0x1;
        } else {
            sum -= 0x1;
        }
    }
    console['log'](sum);
}
main(require('fs')[a0_0x377f27(0x0)](a0_0x377f27(0x1), 'utf8'));