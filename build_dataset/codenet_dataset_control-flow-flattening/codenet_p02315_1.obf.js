function Main(input) {
    var SgmvkO = {
        'yYTNI': function (x, y) {
            return x - y;
        },
        'jqAar': function (x, y) {
            return x + y;
        },
        'KwBoy': function (x, y) {
            return x < y;
        },
        'mkZfm': function (x, y) {
            return x >= y;
        },
        'hQwjU': function (x, y) {
            return x - y;
        }
    };
    input = input['split']('\x0a');
    var p = input[0x0]['split']('\x20')['map'](Number);
    var max = SgmvkO['yYTNI'](p[0x1], 0x0);
    var dp = new Array(SgmvkO['jqAar'](p[0x0], 0x1));
    for (var n = 0x0; SgmvkO['KwBoy'](n, SgmvkO['jqAar'](p[0x0], 0x1)); n++) {
        dp[n] = new Array(SgmvkO['jqAar'](max, 0x1))['fill'](0x0);
    }
    for (var i = 0x1; SgmvkO['KwBoy'](i, input['length']); i++) {
        var mem = input[i]['split']('\x20')['map'](Number);
        for (var j = 0x0; j <= max; j++) {
            if (SgmvkO['mkZfm'](j, mem[0x1]))
                dp[i][j] = Math['max'](SgmvkO['jqAar'](dp[SgmvkO['yYTNI'](i, 0x1)][SgmvkO['hQwjU'](j, mem[0x1])], mem[0x0]), dp[SgmvkO['yYTNI'](i, 0x1)][j]);
            else
                dp[i][j] = dp[SgmvkO['hQwjU'](i, 0x1)][j];
        }
    }
    console['log'](dp[p[0x0]][max]);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());