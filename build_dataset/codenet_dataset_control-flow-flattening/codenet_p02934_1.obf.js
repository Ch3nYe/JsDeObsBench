function Main(input) {
    var qmobgr = {
        'EVZqH': function (x, y) {
            return x < y;
        },
        'VPxgN': function (x, y) {
            return x / y;
        },
        'FSIPj': function (x, y) {
            return x / y;
        }
    };
    var input = input['split']('\x0a');
    const num = input[0x0];
    const arr = input[0x1]['split']('\x20');
    var a = 0x1;
    var b = 0x0;
    arr['forEach'](i => a *= i);
    for (var i = 0x0; qmobgr['EVZqH'](i, arr['length']); i++) {
        b += qmobgr['VPxgN'](a, arr[i]);
    }
    console['log'](qmobgr['FSIPj'](a, b));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));