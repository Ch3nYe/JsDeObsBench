var a0_0x27e5d0 = a0_0x5e09;
function a0_0x58b5() {
    var _0x595927 = [
        'split',
        'slice',
        'length',
        'abs',
        'Yes',
        'push',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x58b5 = function () {
        return _0x595927;
    };
    return a0_0x58b5();
}
function Main(input) {
    var _0xa37e0b = a0_0x5e09;
    var args = input[_0xa37e0b(0x0)]('\x0a');
    var N = parseInt(args, 0xa);
    var history = args[_0xa37e0b(0x1)](0x1, N + 0x1);
    var answer;
    var flg = 0x1;
    var plan = [];
    plan[0x0] = [
        0x0,
        0x0,
        0x0
    ];
    for (var i = 0x0; i < N; i++) {
        plan[i + 0x1] = parser(history[i]);
    }
    for (var i = 0x1; i < plan[_0xa37e0b(0x2)]; i++) {
        var rec1 = plan[i - 0x1];
        var rec2 = plan[i];
        var dt = rec2[0x0] - rec1[0x0];
        var dist = Math[_0xa37e0b(0x3)](rec2[0x1] + rec2[0x2] - rec1[0x1] - rec1[0x2]);
        if (dt >= dist && dt % 0x2 === dist % 0x2) {
        } else {
            flg = 0x0;
        }
    }
    answer = flg ? _0xa37e0b(0x4) : 'No';
    console['log'](answer);
}
function a0_0x5e09(ixAzKy, key) {
    var stringArray = a0_0x58b5();
    a0_0x5e09 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5e09(ixAzKy, key);
}
function parser(record) {
    var _0x38396f = a0_0x5e09;
    var args = record['split']('\x20');
    var return_val = [];
    return_val['push'](parseInt(args[0x0], 0xa));
    return_val[_0x38396f(0x5)](parseInt(args[0x1], 0xa));
    return_val['push'](parseInt(args[0x2], 0xa));
    return return_val;
}
Main(require('fs')['readFileSync'](a0_0x27e5d0(0x6), a0_0x27e5d0(0x7)));