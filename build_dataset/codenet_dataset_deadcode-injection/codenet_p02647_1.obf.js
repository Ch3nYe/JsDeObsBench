var a0_0x3eea0d = a0_0x5c5c;
function a0_0x460c() {
    var _0x368a60 = [
        'split',
        'map',
        'length',
        'log',
        'join',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim'
    ];
    a0_0x460c = function () {
        return _0x368a60;
    };
    return a0_0x460c();
}
function a0_0x5c5c(kzsBOJ, key) {
    var stringArray = a0_0x460c();
    a0_0x5c5c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5c5c(kzsBOJ, key);
}
function Main(input) {
    var _0x442588 = a0_0x5c5c;
    input = input['split']('\x0a');
    var mem = input[0x0][_0x442588(0x0)]('\x20');
    var arr = input[0x1]['split']('\x20')[_0x442588(0x1)](Number);
    for (var p = 0x0; p < mem[0x1]; p++) {
        var tmp = new Array(arr['length'])['fill'](0x0);
        for (var i = 0x0; i < arr[_0x442588(0x2)]; i++) {
            var n = arr[i];
            var min = i - n;
            var max = i + n;
            if (min < 0x0)
                min = 0x0;
            if (max > arr[_0x442588(0x2)] - 0x1)
                max = arr[_0x442588(0x2)] - 0x1;
            for (var j = min; j <= max; j++) {
                tmp[j]++;
            }
        }
        var flag = !![];
        for (var i = 0x0; i < arr['length']; i++) {
            if (arr[i] != tmp[i])
                flag = ![];
            arr[i] = tmp[i];
        }
        if (flag)
            break;
    }
    console[_0x442588(0x3)](arr[_0x442588(0x4)]('\x20'));
}
Main(require('fs')[a0_0x3eea0d(0x5)](a0_0x3eea0d(0x6), a0_0x3eea0d(0x7))[a0_0x3eea0d(0x8)]());