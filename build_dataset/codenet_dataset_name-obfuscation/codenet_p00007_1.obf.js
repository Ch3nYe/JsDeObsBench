function main() {
    var _0x7ea59a = 0x186a0;
    for (var _0x8e9540 = 0x0; _0x8e9540 < input['trim']() - 0x0; _0x8e9540++) {
        _0x7ea59a = Math['ceil'](_0x7ea59a * 1.05 / 0x3e8) * 0x3e8;
    }
    console['log'](_0x7ea59a);
}
var input = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (_0x3f02f2) {
    input += _0x3f02f2;
});
process['stdin']['on']('end', function () {
    main();
});