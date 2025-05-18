var a = 'A';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (_0x1a1c8b) {
    input = _0x1a1c8b['trim']()['split'](',');
    if (input[0x0] == a)
        a = input[0x1];
    else if (input[0x1] == a)
        a = input[0x0];
});
process['stdin']['on']('end', function () {
    console['log'](a);
});