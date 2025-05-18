var a0_0x21a9eb = a0_0x43a7;
const main = input => {
    var _0x324832 = a0_0x43a7;
    var K = input[_0x324832(0x0)]()[_0x324832(0x1)]('\x0a')[0x0][_0x324832(0x1)]('\x20')[0x3];
    var x = input[_0x324832(0x0)]()['split']('\x0a')[0x0][_0x324832(0x1)]('\x20')[0x0];
    var y = input[_0x324832(0x0)]()['split']('\x0a')[0x0][_0x324832(0x1)]('\x20')[0x1];
    var z = input['trim']()[_0x324832(0x1)]('\x0a')[0x0][_0x324832(0x1)]('\x20')[0x2];
    var a = input[_0x324832(0x0)]()[_0x324832(0x1)]('\x0a')[0x1][_0x324832(0x1)]('\x20')['sort']((a, b) => b - a)[_0x324832(0x2)](v => v - 0x0);
    var b = input[_0x324832(0x0)]()[_0x324832(0x1)]('\x0a')[0x2][_0x324832(0x1)]('\x20')[_0x324832(0x3)]((a, b) => b - a)[_0x324832(0x2)](v => v - 0x0);
    var c = input['trim']()[_0x324832(0x1)]('\x0a')[0x3][_0x324832(0x1)]('\x20')[_0x324832(0x3)]((a, b) => b - a)[_0x324832(0x2)](v => v - 0x0);
    var anss = [];
    var idxa = 0x0, idxb = 0x0, idxc = 0x0;
    var min = 0x0;
    for (var i = 0x0; i < x; i++) {
        for (var j = 0x0; j < y; j++) {
            for (var k = 0x0; k < z; k++) {
                if (i * j * k > K)
                    break;
                var sum = a[i] + b[j] + c[k];
                anss[_0x324832(0x4)](sum);
            }
        }
    }
    console['log'](anss['sort']((a, b) => b - a)[_0x324832(0x5)]((v, i) => i < K)[_0x324832(0x6)]('\x0a'));
};
main(require('fs')[a0_0x21a9eb(0x7)]('/dev/stdin', a0_0x21a9eb(0x8)));
function a0_0x43a7(ioiGwi, key) {
    var stringArray = a0_0x2bb2();
    a0_0x43a7 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x43a7(ioiGwi, key);
}
function a0_0x2bb2() {
    var _0x14e816 = [
        'trim',
        'split',
        'map',
        'sort',
        'push',
        'filter',
        'join',
        'readFileSync',
        'UTF-8'
    ];
    a0_0x2bb2 = function () {
        return _0x14e816;
    };
    return a0_0x2bb2();
}