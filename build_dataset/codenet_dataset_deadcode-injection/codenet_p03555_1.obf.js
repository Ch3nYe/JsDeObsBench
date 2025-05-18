var a0_0x23d6bf = a0_0x5960;
function a0_0x5960(OaPKJm, key) {
    var stringArray = a0_0xa1d3();
    a0_0x5960 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5960(OaPKJm, key);
}
function a0_0xa1d3() {
    var _0x4bdc1c = [
        'trim',
        'split',
        'log',
        'YES',
        'readFileSync',
        'utf8'
    ];
    a0_0xa1d3 = function () {
        return _0x4bdc1c;
    };
    return a0_0xa1d3();
}
function Main(input) {
    var _0x25a425 = a0_0x5960;
    input = input[_0x25a425(0x0)]();
    input = input['split']('\x0a');
    var A = input[0x0][_0x25a425(0x1)]('');
    var B = input[0x1][_0x25a425(0x1)]('');
    if (A[0x0] == B[0x2] && A[0x1] == B[0x1] && A[0x2] == B[0x0])
        console[_0x25a425(0x2)](_0x25a425(0x3));
    else
        console[_0x25a425(0x2)]('NO');
}
Main(require('fs')[a0_0x23d6bf(0x4)]('/dev/stdin', a0_0x23d6bf(0x5)));