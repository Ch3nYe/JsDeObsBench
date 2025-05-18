var a0_0x3f96c1 = a0_0x4887;
function Main(arg) {
    var _0xce7d3f = a0_0x4887;
    var N = arg[_0xce7d3f(0x0)]('\x0a')[0x0][_0xce7d3f(0x0)]('\x20')[0x0] - 0x0;
    var K = arg[_0xce7d3f(0x0)]('\x0a')[0x0][_0xce7d3f(0x0)]('\x20')[0x1] - 0x0;
    var P = arg[_0xce7d3f(0x0)]('\x0a')[0x1][_0xce7d3f(0x0)]('\x20')[_0xce7d3f(0x1)](v => v - 0x0);
    var ans = [];
    for (var i = 0x0; i < N - K + 0x1; i++) {
        var tmp = P[_0xce7d3f(0x2)](i, i + K);
        tmp[_0xce7d3f(0x3)](compareNumbers);
        ans[i] = P[_0xce7d3f(0x2)](0x0, i)[_0xce7d3f(0x4)](tmp)['concat'](P[_0xce7d3f(0x2)](i + K))['toString']();
    }
    var aa = new Set(ans);
    console[_0xce7d3f(0x5)](aa[_0xce7d3f(0x6)]);
}
Main(require('fs')[a0_0x3f96c1(0x7)](a0_0x3f96c1(0x8), a0_0x3f96c1(0x9)));
function compareNumbers(a, b) {
    return a - b;
}
function a0_0x4887(voTlvk, key) {
    var stringArray = a0_0x142d();
    a0_0x4887 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4887(voTlvk, key);
}
function a0_0x142d() {
    var _0x435637 = [
        'split',
        'map',
        'slice',
        'sort',
        'concat',
        'log',
        'size',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x142d = function () {
        return _0x435637;
    };
    return a0_0x142d();
}