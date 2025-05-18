var a0_0x3a4924 = a0_0x1f94;
function a0_0x1f94(ybEdhz, key) {
    var stringArray = a0_0x1181();
    a0_0x1f94 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1f94(ybEdhz, key);
}
function Main(input) {
    var _0x4681f3 = a0_0x1f94;
    input = input[_0x4681f3(0x0)]('\x0a');
    var N = input[0x0];
    var L = input[0x1][_0x4681f3(0x0)]('\x20')[_0x4681f3(0x1)](Number);
    var sum = 0x0;
    L[_0x4681f3(0x2)](function (a, b) {
        return b - a;
    });
    for (var i = 0x0; i < N - 0x1; i++) {
        for (var j = i + 0x1; j < N; j++) {
            var tag = L[i] - L[j];
            var arr = L[_0x4681f3(0x3)](0x0, L[_0x4681f3(0x4)]);
            arr[_0x4681f3(0x5)](0x0, j + 0x1);
            arr[_0x4681f3(0x6)]();
            sum += arr[_0x4681f3(0x4)] - caninsert(arr, tag);
        }
    }
    console[_0x4681f3(0x7)](sum);
}
function a0_0x1181() {
    var _0x1a956b = [
        'split',
        'map',
        'sort',
        'slice',
        'length',
        'splice',
        'reverse',
        'log',
        '/dev/stdin',
        'utf8',
        'floor',
        'SPrdx',
        'fVScU'
    ];
    a0_0x1181 = function () {
        return _0x1a956b;
    };
    return a0_0x1181();
}
Main(require('fs')['readFileSync'](a0_0x3a4924(0x8), a0_0x3a4924(0x9)));
function caninsert(array, value) {
    var _0x262f4d = a0_0x1f94;
    value += 0.1;
    var lower = 0x0;
    var upper = array[_0x262f4d(0x4)];
    while (lower < upper) {
        var mid = Math[_0x262f4d(0xa)](lower + (upper - lower) / 0x2);
        if (array[mid] <= value) {
            if (_0x262f4d(0xb) === _0x262f4d(0xc)) {
                input = input['split']('\x0a');
                var N = input[0x0];
                var L = input[0x1][_0x262f4d(0x0)]('\x20')[_0x262f4d(0x1)](Number);
                var sum = 0x0;
                L[_0x262f4d(0x2)](function (a, b) {
                    return b - a;
                });
                for (var i = 0x0; i < N - 0x1; i++) {
                    for (var j = i + 0x1; j < N; j++) {
                        var tag = L[i] - L[j];
                        var arr = L[_0x262f4d(0x3)](0x0, L[_0x262f4d(0x4)]);
                        arr[_0x262f4d(0x5)](0x0, j + 0x1);
                        arr[_0x262f4d(0x6)]();
                        sum += arr[_0x262f4d(0x4)] - caninsert(arr, tag);
                    }
                }
                console['log'](sum);
            } else {
                lower = mid + 0x1;
            }
        } else {
            upper = mid;
        }
    }
    return lower;
}
;