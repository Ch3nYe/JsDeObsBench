function a0_0x6b82(YYWpui, key) {
    var stringArray = a0_0x2a4e();
    a0_0x6b82 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x6b82(YYWpui, key);
}
var a0_0x52b6a2 = a0_0x6b82;
function a0_0x2a4e() {
    var _0x47dc06 = [
        'isInteger',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x2a4e = function () {
        return _0x47dc06;
    };
    return a0_0x2a4e();
}
function main(input) {
    var _0x487f13 = a0_0x6b82;
    const args = input['split']('\x20');
    var A = Number(args[0x0]);
    var B = Number(args[0x1]);
    var K = Number(args[0x2]);
    var cu = 0x0;
    var sum;
    var count = 0x0;
    for (cu = A; cu > 0x0; --cu) {
        if (Number[_0x487f13(0x0)](A / cu) && Number[_0x487f13(0x0)](B / cu)) {
            count++;
            if (count === K) {
                sum = cu;
                break;
            }
        }
    }
    console[_0x487f13(0x1)](sum);
}
main(require('fs')[a0_0x52b6a2(0x2)](a0_0x52b6a2(0x3), 'utf8'));