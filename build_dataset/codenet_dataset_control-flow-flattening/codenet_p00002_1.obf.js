process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    var SRyjwG = {
        'soGcr': function (x, y) {
            return x + y;
        },
        'GjCnd': function (callee, param1) {
            return callee(param1);
        }
    };
    var nums = chunk['trim']()['split']('\x0a');
    function digit(e) {
        var a = e['split']('\x20');
        var wa = SRyjwG['soGcr'](SRyjwG['GjCnd'](parseInt, a[0x0]), SRyjwG['GjCnd'](parseInt, a[0x1]));
        return wa['toString']()['length'];
    }
    console['log'](nums['map'](digit)['join']('\x0a'));
});