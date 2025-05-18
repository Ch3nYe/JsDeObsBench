function a0_0x3f78() {
    var _0x2a45b8 = [
        'push',
        'split',
        'indexOf',
        'map',
        'log',
        'Yes',
        '/dev/stdin',
        'utf8',
        'trim'
    ];
    a0_0x3f78 = function () {
        return _0x2a45b8;
    };
    return a0_0x3f78();
}
var a0_0x253cb4 = a0_0x3072;
function Main(input) {
    var _0x43bb16 = a0_0x3072;
    var n = input[0x3];
    var ansmap = [
        [
            ![],
            ![],
            ![]
        ],
        [
            ![],
            ![],
            ![]
        ],
        [
            ![],
            ![],
            ![]
        ]
    ];
    var chk = [];
    for (var i = 0x4; i < n + 0x4; i++) {
        chk[_0x43bb16(0x0)](input[i] - 0x0);
    }
    var map = [
        input[0x0][_0x43bb16(0x1)]('\x20')['map'](v => chk[_0x43bb16(0x2)](v - 0x0) >= 0x0),
        input[0x1][_0x43bb16(0x1)]('\x20')[_0x43bb16(0x3)](v => chk['indexOf'](v - 0x0) >= 0x0),
        input[0x2][_0x43bb16(0x1)]('\x20')[_0x43bb16(0x3)](v => chk[_0x43bb16(0x2)](v - 0x0) >= 0x0)
    ];
    var flg = ![];
    if (map[0x0][0x0] && map[0x0][0x1] && map[0x0][0x2])
        flg = !![];
    if (map[0x1][0x0] && map[0x1][0x1] && map[0x1][0x2])
        flg = !![];
    if (map[0x2][0x0] && map[0x2][0x1] && map[0x2][0x2])
        flg = !![];
    if (map[0x0][0x0] && map[0x1][0x0] && map[0x2][0x0])
        flg = !![];
    if (map[0x0][0x1] && map[0x1][0x1] && map[0x2][0x1])
        flg = !![];
    if (map[0x0][0x2] && map[0x1][0x2] && map[0x2][0x2])
        flg = !![];
    if (map[0x0][0x0] && map[0x1][0x1] && map[0x2][0x2])
        flg = !![];
    if (map[0x0][0x2] && map[0x1][0x1] && map[0x2][0x0])
        flg = !![];
    console[_0x43bb16(0x4)](flg ? _0x43bb16(0x5) : 'No');
}
function a0_0x3072(PTxuJB, key) {
    var stringArray = a0_0x3f78();
    a0_0x3072 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3072(PTxuJB, key);
}
Main(require('fs')['readFileSync'](a0_0x253cb4(0x6), a0_0x253cb4(0x7))[a0_0x253cb4(0x8)]()[a0_0x253cb4(0x1)]('\x0a'));