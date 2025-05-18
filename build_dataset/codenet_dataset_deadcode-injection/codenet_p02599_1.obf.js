var a0_0x450f1c = a0_0xc245;
function Main(input) {
    var _0x14e3a6 = a0_0xc245;
    input = input['split']('\x0a');
    var [n, q] = input[0x0][_0x14e3a6(0x0)]('\x20')[_0x14e3a6(0x1)](a => parseInt(a, 0xa));
    var colors = input[0x1][_0x14e3a6(0x0)]('\x20');
    for (var i = 0x0; i < q; i++) {
        var [start, end] = input[i + 0x2][_0x14e3a6(0x0)]('\x20')[_0x14e3a6(0x1)](a => parseInt(a, 0xa));
        var cs = [];
        for (var j = start - 0x1; j < end; j++) {
            var color = colors[j];
            if (cs[_0x14e3a6(0x2)](color) === -0x1) {
                cs[_0x14e3a6(0x3)](color);
            }
        }
        console['log'](cs[_0x14e3a6(0x4)]);
    }
}
function a0_0xc245(WbCwcU, key) {
    var stringArray = a0_0x1ded();
    a0_0xc245 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xc245(WbCwcU, key);
}
Main(require('fs')[a0_0x450f1c(0x5)]('/dev/stdin', a0_0x450f1c(0x6)));
function a0_0x1ded() {
    var _0x3ed41c = [
        'split',
        'map',
        'indexOf',
        'push',
        'length',
        'readFileSync',
        'utf8'
    ];
    a0_0x1ded = function () {
        return _0x3ed41c;
    };
    return a0_0x1ded();
}