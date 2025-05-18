var a0_0x3ceaa7 = a0_0x52a1;
(function (stringArrayFunction, comparisonValue) {
    var _0x65a657 = a0_0x52a1;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x65a657(0x9d)) / 0x1 * (parseInt(_0x65a657(0x8f)) / 0x2) + -parseInt(_0x65a657(0x9b)) / 0x3 * (-parseInt(_0x65a657(0x92)) / 0x4) + -parseInt(_0x65a657(0x91)) / 0x5 + parseInt(_0x65a657(0x90)) / 0x6 + parseInt(_0x65a657(0x8d)) / 0x7 + parseInt(_0x65a657(0x9c)) / 0x8 + -parseInt(_0x65a657(0x97)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x35b4, 0x1ee67));
function a0_0x52a1(gPgKrN, key) {
    var stringArray = a0_0x35b4();
    a0_0x52a1 = function (index, key) {
        index = index - 0x8d;
        var value = stringArray[index];
        return value;
    };
    return a0_0x52a1(gPgKrN, key);
}
(function (input) {
    var _0x1c1be3 = a0_0x52a1;
    var p = input['replace'](/\n$/, '')['split']('\x0a');
    var n = Number(p[_0x1c1be3(0x95)]());
    for (var i = 0x0; i < n; i++) {
        var a = p[_0x1c1be3(0x95)]()[_0x1c1be3(0x98)]('\x20')[_0x1c1be3(0x99)](Number);
        console[_0x1c1be3(0x93)](order(a));
    }
}(require('fs')[a0_0x3ceaa7(0x8e)](a0_0x3ceaa7(0x9a), a0_0x3ceaa7(0x9e))));
function a0_0x35b4() {
    var _0x3339d3 = [
        '1214920VZNjCB',
        '48cwjYdE',
        'log',
        'YES',
        'shift',
        'push',
        '261270KeIKzG',
        'split',
        'map',
        '/dev/stdin',
        '10587POJFQW',
        '1830424KFMZfO',
        '145961ZlFfel',
        'utf8',
        '216216DfhQWw',
        'readFileSync',
        '2vNfONU',
        '1455018EgFQwN'
    ];
    a0_0x35b4 = function () {
        return _0x3339d3;
    };
    return a0_0x35b4();
}
function order(a) {
    var _0x2f1cfc = a0_0x3ceaa7;
    var r = [];
    var x;
    var c = a[_0x2f1cfc(0x95)]();
    while (x = a[_0x2f1cfc(0x95)]()) {
        if (x > c) {
            c = x;
            continue;
        }
        r[_0x2f1cfc(0x96)](x);
    }
    var m = -Infinity;
    while (x = r['shift']()) {
        if (x > m) {
            m = x;
            continue;
        }
        return 'NO';
    }
    return _0x2f1cfc(0x94);
}