function main() {
    var SyjgMg = {
        'lBQzi': function (x, y) {
            return x < y;
        },
        'UCeVT': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var waitTime = [
        0x0,
        0x0,
        0x0,
        0x0,
        0x0,
        0x0,
        0xe,
        0x9,
        0x4,
        0x0,
        0x0,
        0x8,
        0x3,
        0x2,
        0x0,
        0x0,
        0xf,
        0xa,
        0xf,
        0xa,
        0x6,
        0xc,
        0x7,
        0x9,
        0xb,
        0x6,
        0x17,
        0x12,
        0xd,
        0x8,
        0x3,
        0x17,
        0x12,
        0xd,
        0x8,
        0x3,
        0x22,
        0x1d,
        0x18,
        0x16,
        0x11,
        0x1c,
        0x17,
        0x18,
        0x13,
        0x1b,
        0x22,
        0x1d,
        0x23,
        0x1e,
        0x1c,
        0x1f,
        0x1c,
        0x17,
        0x18,
        0x1c,
        0x2a,
        0x25,
        0x20,
        0x1b,
        0x16,
        0x2a,
        0x25,
        0x20,
        0x1b,
        0x16,
        0x35,
        0x30,
        0x2b,
        0x29,
        0x24,
        0x2f,
        0x2a,
        0x2b,
        0x26,
        0x2e,
        0x40,
        0x3b,
        0x36,
        0x31,
        0x2c,
        0x3d,
        0x38,
        0x33,
        0x2e,
        0x2c,
        0x48,
        0x43,
        0x3e,
        0x39,
        0x34,
        0x48,
        0x43,
        0x3e,
        0x39,
        0x34,
        0x53,
        0x4e,
        0x49,
        0x47
    ];
    for (var i = 0x0; SyjgMg['lBQzi'](i, input['length']); i++) {
        var idx = SyjgMg['UCeVT'](parseInt, input[i], 0xa);
        console['log']('%d', waitTime[idx]);
    }
}
var input = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    input = input['split']('\x0a');
    main();
});