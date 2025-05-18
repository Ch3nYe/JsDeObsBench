(function (stdin) {
    var LbeeSf = {
        'GVtXW': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'Slqqd': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'yHgYQ': function (x, y) {
            return x * y;
        }
    };
    var lines = stdin['toString']()['split']('\x20');
    var x = LbeeSf['GVtXW'](parseInt, lines[0x0], 0xa);
    var y = LbeeSf['Slqqd'](parseInt, lines[0x1], 0xa);
    console['log'](LbeeSf['yHgYQ'](x, y), LbeeSf['yHgYQ'](x + y, 0x2));
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));