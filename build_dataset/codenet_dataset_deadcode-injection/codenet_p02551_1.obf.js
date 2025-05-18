var a0_0x8681f1 = a0_0x343a;
function a0_0x343a(hsVTgP, key) {
    var stringArray = a0_0xa8a1();
    a0_0x343a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x343a(hsVTgP, key);
}
function Main(input) {
    var _0x2719bf = a0_0x343a;
    input = input[_0x2719bf(0x0)]('\x0a');
    tmp = input[0x0][_0x2719bf(0x0)]('\x20');
    var N = parseInt(tmp[0x0]);
    var Q = parseInt(tmp[0x1]);
    var minRows = Array(N - 0x2);
    var minCols = Array(N - 0x2);
    minRows[_0x2719bf(0x1)](N - 0x2);
    minCols[_0x2719bf(0x1)](N - 0x2);
    var result = BigInt((N - 0x2) * (N - 0x2));
    for (var i = 0x0; i < Q; i++) {
        var query = input[i + 0x1][_0x2719bf(0x0)]('\x20');
        var q_1 = parseInt(query[0x0]);
        var q_2 = parseInt(query[0x1]);
        var myArray = minRows;
        var myArray2 = minCols;
        var index = q_2 - 0x2;
        var closest = minCols[index];
        if (q_1 == 0x1) {
            myArray = minCols;
            myArray2 = minRows;
            closest = minRows[index];
        }
        result -= BigInt(closest);
        for (var j = 0x0; j < closest; j++) {
            if (myArray[j] > index)
                myArray[j] = index;
        }
        myArray2[index] = 0x0;
    }
    console['log']('%d', Number(result));
}
function a0_0xa8a1() {
    var _0x49cbf6 = [
        'split',
        'fill',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0xa8a1 = function () {
        return _0x49cbf6;
    };
    return a0_0xa8a1();
}
Main(require('fs')[a0_0x8681f1(0x2)](a0_0x8681f1(0x3), a0_0x8681f1(0x4)));