var a = 'A';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    var SgVApf = {
        'fXWUn': function (x, y) {
            return x == y;
        },
        'AbsTE': function (x, y) {
            return x == y;
        }
    };
    input = chunk['trim']()['split'](',');
    if (SgVApf['fXWUn'](input[0x0], a))
        a = input[0x1];
    else if (SgVApf['AbsTE'](input[0x1], a))
        a = input[0x0];
});
process['stdin']['on']('end', function () {
    console['log'](a);
});