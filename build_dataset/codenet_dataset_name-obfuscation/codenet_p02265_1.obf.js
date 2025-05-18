const config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
const line = require('fs')['readFileSync'](config['input'], 'utf-8')['split'](config['newline']);
const insert = (_0x2b160b, _0x29e629) => _0x2b160b['unshift'](_0x29e629);
const del = (_0x2a1cc3, _0x5dddf0) => {
    for (var _0x493a7c = 0x0; _0x493a7c < _0x2a1cc3['length']; _0x493a7c++) {
        if (_0x5dddf0 === _0x2a1cc3[_0x493a7c])
            break;
    }
    if (_0x493a7c !== _0x2a1cc3['length'])
        _0x2a1cc3['splice'](_0x493a7c, 0x1);
};
const delFirst = _0x138390 => _0x138390['shift']();
const delLast = _0x28b325 => _0x28b325['pop']();
const cmds = line['slice'](0x1);
const ans = cmds['reduce']((_0xc0069c, _0x210368) => {
    const _0x411e95 = _0x210368['split']('\x20');
    switch (_0x411e95[0x0]) {
    case 'insert':
        insert(_0xc0069c, parseInt(_0x411e95[0x1]));
        break;
    case 'delete':
        del(_0xc0069c, parseInt(_0x411e95[0x1]));
        break;
    case 'deleteFirst':
        delFirst(_0xc0069c);
        break;
    case 'deleteLast':
        delLast(_0xc0069c);
        break;
    }
    return _0xc0069c;
}, [])['map'](_0x3955eb => _0x3955eb['toString']())['join']('\x20');
console['log'](ans);