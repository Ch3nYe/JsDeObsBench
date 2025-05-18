var a0_0x4e3a23 = a0_0x49c8;
function Main(input) {
    var _0x2fdf88 = a0_0x49c8;
    var output = 0x0;
    var list = [];
    var output = input['length'];
    var tmp = '';
    for (var i = input['length'] - 0x1; i >= 0x0; i--) {
        var tmp2 = input['slice'](i, i + 0x1);
        if (list[_0x2fdf88(0x0)] == 0x0) {
            list['push'](tmp2);
            continue;
        } else {
            var tmp1 = list[list[_0x2fdf88(0x0)] - 0x1];
            if (tmp1 == tmp2) {
                list[_0x2fdf88(0x1)](input[_0x2fdf88(0x2)](i - 0x1, i) + tmp2);
                i--;
            } else {
                list[_0x2fdf88(0x1)](tmp2);
            }
        }
    }
    output = list[_0x2fdf88(0x0)];
    var first = input[_0x2fdf88(0x2)](0x0, 0x1);
    var second = input['slice'](0x1, 0x2);
    if (first == second) {
        output--;
    }
    console['log'](output['toString']());
}
function a0_0x49c8(vWQqTg, key) {
    var stringArray = a0_0x194f();
    a0_0x49c8 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x49c8(vWQqTg, key);
}
Main(require('fs')[a0_0x4e3a23(0x3)](a0_0x4e3a23(0x4), 'utf8'));
function a0_0x194f() {
    var _0x2f1a5f = [
        'length',
        'push',
        'slice',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x194f = function () {
        return _0x2f1a5f;
    };
    return a0_0x194f();
}