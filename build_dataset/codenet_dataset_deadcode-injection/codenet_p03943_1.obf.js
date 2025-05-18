function a0_0x4cc2(IDxgcx, key) {
    var stringArray = a0_0x5e1d();
    a0_0x4cc2 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4cc2(IDxgcx, key);
}
var a0_0x5cadf0 = a0_0x4cc2;
function Main(input) {
    var _0x36e616 = a0_0x4cc2;
    input = input['split']('\x20');
    input = input['map'](Number);
    children = 0x2;
    var sub = function (arry, num) {
        var _0x41cba1 = a0_0x4cc2;
        var sum = 0x0;
        arry[_0x41cba1(0x0)](element => {
            sum += element;
        });
        return arry[_0x41cba1(0x1)](sum / num);
    };
    if (sub(input, children)) {
        console[_0x36e616(0x2)](_0x36e616(0x3));
    } else {
        console[_0x36e616(0x2)]('No');
    }
}
Main(require('fs')['readFileSync'](a0_0x5cadf0(0x4), a0_0x5cadf0(0x5)));
function a0_0x5e1d() {
    var _0xd8d92f = [
        'forEach',
        'includes',
        'log',
        'Yes',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5e1d = function () {
        return _0xd8d92f;
    };
    return a0_0x5e1d();
}