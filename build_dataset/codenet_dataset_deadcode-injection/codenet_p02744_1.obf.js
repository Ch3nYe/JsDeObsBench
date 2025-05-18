var a0_0x442e61 = a0_0x4c36;
function Main(input) {
    var _0x479c49 = a0_0x4c36;
    var N = input[0x0] - 0x0;
    var list = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k'
    ];
    var ans = {
        0x0: [],
        0x1: ['a']
    };
    for (var i = 0x2; i <= N; i++) {
        ans[i] = [];
        var preAns = ans[i - 0x1];
        var nowAns = ans[i];
        preAns[_0x479c49(0x0)](preans => {
            var _0x45ec67 = a0_0x4c36;
            var max = 'a';
            preans[_0x45ec67(0x1)]('')[_0x45ec67(0x0)](v => {
                max = max < v ? v : max;
            });
            var endflg = ![];
            for (var i = 0x0; i < list[_0x45ec67(0x2)] - 0x1; i++) {
                nowAns[_0x45ec67(0x3)](preans + list[i]);
                if (endflg)
                    break;
                if (max == list[i])
                    endflg = !![];
            }
        });
    }
    console['log'](ans[N][_0x479c49(0x4)]('\x0a'));
}
function a0_0x1261() {
    var _0x1c9591 = [
        'forEach',
        'split',
        'length',
        'push',
        'join',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim'
    ];
    a0_0x1261 = function () {
        return _0x1c9591;
    };
    return a0_0x1261();
}
function a0_0x4c36(Psgyco, key) {
    var stringArray = a0_0x1261();
    a0_0x4c36 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4c36(Psgyco, key);
}
Main(require('fs')[a0_0x442e61(0x5)](a0_0x442e61(0x6), a0_0x442e61(0x7))[a0_0x442e61(0x8)]()[a0_0x442e61(0x1)]('\x0a'));