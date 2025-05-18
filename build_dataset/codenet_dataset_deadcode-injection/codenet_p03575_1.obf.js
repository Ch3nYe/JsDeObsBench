var a0_0x4d91c7 = a0_0x48b4;
function a0_0x2d6d() {
    var _0x2aea3a = [
        'split',
        'length',
        'splice',
        'keys',
        'forEach',
        '/dev/stdin',
        'utf8',
        'trim'
    ];
    a0_0x2d6d = function () {
        return _0x2aea3a;
    };
    return a0_0x2d6d();
}
function Main(input) {
    var _0x416e6d = a0_0x48b4;
    var N = input[0x0][_0x416e6d(0x0)]('\x20')[0x0] - 0x0;
    var M = input[0x0][_0x416e6d(0x0)]('\x20')[0x1] - 0x0;
    var list = {};
    for (var i = 0x1; i <= M; i++) {
        var a = input[i][_0x416e6d(0x0)]('\x20')[0x0] - 0x0;
        var b = input[i][_0x416e6d(0x0)]('\x20')[0x1] - 0x0;
        list[a] = list[a] || {};
        list[b] = list[b] || {};
        list[a][b] = i;
        list[b][a] = i;
    }
    var ans = 0x0;
    for (var i = 0x1; i <= M; i++) {
        if (check(list, i) != N)
            ans++;
    }
    console['log'](ans);
}
function check(list, i) {
    var _0x4479be = a0_0x48b4;
    var stack = [0x1];
    var checked = {};
    while (stack[_0x4479be(0x1)] > 0x0) {
        var now = stack[_0x4479be(0x2)](0x0, 0x1)[0x0];
        if (checked[now])
            continue;
        checked[now] = !![];
        var next = Object[_0x4479be(0x3)](list[now]);
        next[_0x4479be(0x4)](nxt => {
            if (list[now][nxt] != i) {
                stack['push'](nxt);
            }
        });
    }
    return Object[_0x4479be(0x3)](checked)['length'];
}
function a0_0x48b4(FvAsJv, key) {
    var stringArray = a0_0x2d6d();
    a0_0x48b4 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x48b4(FvAsJv, key);
}
Main(require('fs')['readFileSync'](a0_0x4d91c7(0x5), a0_0x4d91c7(0x6))[a0_0x4d91c7(0x7)]()['split']('\x0a'));