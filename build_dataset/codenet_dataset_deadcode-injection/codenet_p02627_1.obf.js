var a0_0x24302a = a0_0x28d0;
function main(input) {
    var _0x44bcb4 = a0_0x28d0;
    input = input['split']('\x0a');
    var answer = input[0x0];
    var answerA = input[0x0]['toUpperCase']();
    if (answer == answerA) {
        console[_0x44bcb4(0x0)]('A');
    } else {
        console['log']('a');
    }
}
function a0_0x28d0(QHmNkf, key) {
    var stringArray = a0_0x2f3d();
    a0_0x28d0 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x28d0(QHmNkf, key);
}
function a0_0x2f3d() {
    var _0x4728a3 = [
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2f3d = function () {
        return _0x4728a3;
    };
    return a0_0x2f3d();
}
main(require('fs')['readFileSync'](a0_0x24302a(0x1), a0_0x24302a(0x2)));