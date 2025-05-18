function a0_0x2816(wdZkfA, key) {
    var stringArray = a0_0x2748();
    a0_0x2816 = function (index, key) {
        index = index - 0x6b;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2816(wdZkfA, key);
}
var a0_0x1b7182 = a0_0x2816;
(function (stringArrayFunction, comparisonValue) {
    var _0x588523 = a0_0x2816;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x588523(0x71)) / 0x1 + -parseInt(_0x588523(0x70)) / 0x2 + parseInt(_0x588523(0x6b)) / 0x3 + parseInt(_0x588523(0x6d)) / 0x4 + parseInt(_0x588523(0x6c)) / 0x5 + -parseInt(_0x588523(0x72)) / 0x6 * (-parseInt(_0x588523(0x73)) / 0x7) + -parseInt(_0x588523(0x77)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2748, 0xb2bce));
function a0_0x2748() {
    var _0x471724 = [
        '168VIneLH',
        '13153rlNOXR',
        'utf8',
        'log',
        'readFileSync',
        '2530896AFaITD',
        '1971669HPHWSY',
        '3838085DBzzYi',
        '4969356SAGSEY',
        '/dev/stdin',
        'split',
        '816850MTMbbC',
        '1262894neODmM'
    ];
    a0_0x2748 = function () {
        return _0x471724;
    };
    return a0_0x2748();
}
function Main(input) {
    var _0x5ab01c = a0_0x2816;
    input = input[_0x5ab01c(0x6f)]('\x0a');
    var T = input[0x0][_0x5ab01c(0x6f)]('\x20');
    var A = input[0x1][_0x5ab01c(0x6f)]('\x20');
    var B = input[0x2]['split']('\x20');
    for (var i = 0x0; i < 0x2; i++) {
        T[i] = Number(T[i]);
        A[i] = Number(A[i]);
        B[i] = Number(B[i]);
    }
    var sa = new Array(0x2);
    sa[0x0] = T[0x0] * A[0x0] - T[0x0] * B[0x0];
    sa[0x1] = T[0x1] * A[0x1] - T[0x1] * B[0x1];
    var x = 0x0;
    var xmae = 0x1;
    var pm = 0x0;
    var count = -0x1;
    if (sa[0x0] == sa[0x1] * -0x1) {
        console[_0x5ab01c(0x75)]('infinity');
    } else {
        for (var i = 0x0; i < 0x1; i) {
            count++;
            xmae = x;
            x += sa[count % 0x2];
            if (x * xmae > 0x0) {
                i = 0x1;
            } else if (x == 0x0) {
                i = 0x1;
                count++;
            }
        }
        console['log'](count - 0x1);
    }
}
Main(require('fs')[a0_0x1b7182(0x76)](a0_0x1b7182(0x6e), a0_0x1b7182(0x74)));