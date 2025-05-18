function a0_0x117d() {
    var _0x3eb8e2 = [
        'trim',
        'split',
        'length',
        'substr',
        'slice',
        'log',
        'utf8'
    ];
    a0_0x117d = function () {
        return _0x3eb8e2;
    };
    return a0_0x117d();
}
var a0_0x23b932 = a0_0x4af8;
function Main(input) {
    var _0x1583cd = a0_0x4af8;
    ans = 'No';
    input = input[_0x1583cd(0x0)]()[_0x1583cd(0x1)]('\x0a');
    rotate = input[0x0];
    for (i = 0x0; i <= input[0x0][_0x1583cd(0x2)]; i++) {
        head = rotate[_0x1583cd(0x3)](0x0, 0x1);
        str = rotate[_0x1583cd(0x4)](0x1) + head;
        if (input[0x1] === str) {
            ans = 'Yes';
            break;
        }
        rotate = str;
    }
    console[_0x1583cd(0x5)](ans);
}
function a0_0x4af8(NTeGpu, key) {
    var stringArray = a0_0x117d();
    a0_0x4af8 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4af8(NTeGpu, key);
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x23b932(0x6)));