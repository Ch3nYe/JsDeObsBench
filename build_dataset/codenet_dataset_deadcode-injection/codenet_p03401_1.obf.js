var a0_0x12f87a = a0_0x30a3;
function a0_0x4b68() {
    var _0x765c26 = [
        'concat',
        'split',
        'map',
        'abs',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4b68 = function () {
        return _0x765c26;
    };
    return a0_0x4b68();
}
function main(input) {
    var _0x53dcfc = a0_0x30a3;
    var n = input[0x0] - 0x0;
    var list = [0x0][_0x53dcfc(0x0)](input[0x1][_0x53dcfc(0x1)]('\x20')[_0x53dcfc(0x2)](v => v - 0x0), [0x0]);
    var llist = [];
    llist[0x0] = 0x0;
    var rlist = [];
    rlist[n] = 0x0;
    for (var i = 0x1; i <= n; i++) {
        llist[i] = llist[i - 0x1] + Math[_0x53dcfc(0x3)](list[i] - list[i - 0x1]);
        rlist[n - i] = rlist[n - i + 0x1] + Math[_0x53dcfc(0x3)](list[n - i + 0x1] - list[n - i + 0x2]);
    }
    for (var i = 0x1; i <= n; i++) {
        var ans = 0x0;
        ans += llist[i - 0x1];
        ans += rlist[i] || 0x0;
        ans += Math[_0x53dcfc(0x3)](list[i - 0x1] - list[i + 0x1]);
        console[_0x53dcfc(0x4)](ans);
    }
}
function a0_0x30a3(rytvxF, key) {
    var stringArray = a0_0x4b68();
    a0_0x30a3 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x30a3(rytvxF, key);
}
main(require('fs')[a0_0x12f87a(0x5)](a0_0x12f87a(0x6), a0_0x12f87a(0x7))['trim']()[a0_0x12f87a(0x1)]('\x0a'));