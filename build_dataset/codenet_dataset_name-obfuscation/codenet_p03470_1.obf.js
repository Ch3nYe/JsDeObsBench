var lines = [];
var readline = require('readline');
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
rl['on']('line', function (_0x250418) {
    lines['push'](_0x250418);
});
rl['on']('close', function () {
    var _0x1349eb = Number(lines[0x0]);
    lines['shift']();
    var _0x29157a = lines['map'](_0x3630e4 => Number(_0x3630e4));
    _0x29157a = _0x29157a['filter']((_0xd9c73b, _0x21a980, _0x5d7b63) => {
        return _0x5d7b63['indexOf'](_0xd9c73b) === _0x21a980;
    });
    console['log'](_0x29157a['length']);
});