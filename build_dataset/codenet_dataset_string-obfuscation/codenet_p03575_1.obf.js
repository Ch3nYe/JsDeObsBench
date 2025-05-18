function a0_0x5b97(UdxMYg, key) {
    var stringArray = a0_0x15c5();
    a0_0x5b97 = function (index, key) {
        index = index - 0x1ef;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5b97(UdxMYg, key);
}
function a0_0x15c5() {
    var _0x421b38 = [
        '3973392hSodNv',
        '10131iripWh',
        '590fKcCCN',
        'forEach',
        'log',
        '872538azeyzH',
        '8neTtnl',
        '65RJLHnY',
        '574074DQDXfo',
        'split',
        'length',
        '2892652fDkQrL',
        'splice',
        '/dev/stdin',
        'readFileSync',
        'keys',
        '648637QBoAzc',
        '1746451QVhdGP',
        '1056RhcfTK'
    ];
    a0_0x15c5 = function () {
        return _0x421b38;
    };
    return a0_0x15c5();
}
var a0_0x136a66 = a0_0x5b97;
(function (stringArrayFunction, comparisonValue) {
    var _0xbc1b30 = a0_0x5b97;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0xbc1b30(0x1fe)) / 0x1 + parseInt(_0xbc1b30(0x1f1)) / 0x2 + parseInt(_0xbc1b30(0x1fa)) / 0x3 * (parseInt(_0xbc1b30(0x1f8)) / 0x4) + parseInt(_0xbc1b30(0x200)) / 0x5 * (parseInt(_0xbc1b30(0x201)) / 0x6) + -parseInt(_0xbc1b30(0x1f7)) / 0x7 * (-parseInt(_0xbc1b30(0x1ff)) / 0x8) + -parseInt(_0xbc1b30(0x1f9)) / 0x9 + -parseInt(_0xbc1b30(0x1fb)) / 0xa * (parseInt(_0xbc1b30(0x1f6)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x15c5, 0xbf343));
function Main(input) {
    var _0x52f54d = a0_0x5b97;
    var N = input[0x0]['split']('\x20')[0x0] - 0x0;
    var M = input[0x0][_0x52f54d(0x1ef)]('\x20')[0x1] - 0x0;
    var list = {};
    for (var i = 0x1; i <= M; i++) {
        var a = input[i][_0x52f54d(0x1ef)]('\x20')[0x0] - 0x0;
        var b = input[i][_0x52f54d(0x1ef)]('\x20')[0x1] - 0x0;
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
    console[_0x52f54d(0x1fd)](ans);
}
function check(list, i) {
    var _0x1100c0 = a0_0x5b97;
    var stack = [0x1];
    var checked = {};
    while (stack[_0x1100c0(0x1f0)] > 0x0) {
        var now = stack[_0x1100c0(0x1f2)](0x0, 0x1)[0x0];
        if (checked[now])
            continue;
        checked[now] = !![];
        var next = Object['keys'](list[now]);
        next[_0x1100c0(0x1fc)](nxt => {
            if (list[now][nxt] != i) {
                stack['push'](nxt);
            }
        });
    }
    return Object[_0x1100c0(0x1f5)](checked)[_0x1100c0(0x1f0)];
}
Main(require('fs')[a0_0x136a66(0x1f4)](a0_0x136a66(0x1f3), 'utf8')['trim']()[a0_0x136a66(0x1ef)]('\x0a'));