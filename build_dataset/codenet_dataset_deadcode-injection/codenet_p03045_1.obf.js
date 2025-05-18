function a0_0x3171() {
    var _0x7c5207 = [
        'length',
        'pop',
        'split',
        'SGAyF',
        'WpBYe',
        'PiHvZ',
        'forEach',
        'log',
        'reduce',
        'push',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3171 = function () {
        return _0x7c5207;
    };
    return a0_0x3171();
}
function a0_0x3c05(GihwXu, key) {
    var stringArray = a0_0x3171();
    a0_0x3c05 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3c05(GihwXu, key);
}
var a0_0x36b8bb = a0_0x3c05;
function Main(input) {
    var _0x189096 = a0_0x3c05;
    input = input['split']('\x0a');
    if (input[input[_0x189096(0x0)] - 0x1] === '') {
        input[_0x189096(0x1)]();
    }
    const N = input[0x0]['split']('\x20')[0x0] - 0x0;
    const M = input[0x0][_0x189096(0x2)]('\x20')[0x1] - 0x0;
    var parent = new Array(N + 0x1)['fill'](0x0);
    for (var i = 0x1; i <= M; i++) {
        if (_0x189096(0x3) === _0x189096(0x4)) {
            if (root(input[i][_0x189096(0x2)]('\x20')[0x0] - 0x0) !== root(input[i][_0x189096(0x2)]('\x20')[0x1] - 0x0)) {
                parent[root(input[i][_0x189096(0x2)]('\x20')[0x1] - 0x0)] = root(input[i][_0x189096(0x2)]('\x20')[0x0]) - 0x0;
            }
        } else {
            if (root(input[i]['split']('\x20')[0x0] - 0x0) !== root(input[i][_0x189096(0x2)]('\x20')[0x1] - 0x0)) {
                if ('aCFAV' !== _0x189096(0x5)) {
                    parent[root(input[i][_0x189096(0x2)]('\x20')[0x1] - 0x0)] = root(input[i]['split']('\x20')[0x0]) - 0x0;
                } else {
                    var array = [];
                    var point = node;
                    while (parent[point] !== 0x0) {
                        array['push'](point);
                        point = parent[point];
                    }
                    array[_0x189096(0x6)](e => {
                        parent[e] = point;
                    });
                    return point;
                }
            }
        }
    }
    console[_0x189096(0x7)](parent[_0x189096(0x8)]((acc, cur) => {
        return acc + (cur === 0x0 ? 0x1 : 0x0);
    }, 0x0) - 0x1);
    function root(node) {
        var _0x445ca7 = a0_0x3c05;
        var array = [];
        var point = node;
        while (parent[point] !== 0x0) {
            array[_0x445ca7(0x9)](point);
            point = parent[point];
        }
        array[_0x445ca7(0x6)](e => {
            parent[e] = point;
        });
        return point;
    }
}
Main(require('fs')[a0_0x36b8bb(0xa)](a0_0x36b8bb(0xb), a0_0x36b8bb(0xc)));