var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var book = [];
for (var i = 0x0; i < n; i++)
    book[i] = arr['shift']();
var q = arr['shift']() - 0x0;
for (var i = 0x0; i < q; i++) {
    if (i != 0x0)
        console['log']('');
    var ans = [];
    var v = arr['shift']()['split']('\x20');
    var a = v[0x0];
    var b = v[0x1];
    var c = v[0x2] != '*' ? new Date(v[0x2])['getTime']() : '*';
    var d = v[0x3] != '*' ? new Date(v[0x3])['getTime']() : '*';
    book['forEach'](function (_0x48c435) {
        _0x48c435 = _0x48c435['split']('\x20');
        var _0x2efd54 = _0x48c435[0x0];
        var _0x7c0612 = _0x48c435[0x1];
        var _0x29301c = new Date(_0x48c435[0x2])['getTime']();
        var _0x388455 = !![];
        if (a != '*') {
            var _0x23429a = new RegExp(a);
            if (_0x23429a['test'](_0x2efd54) == ![])
                _0x388455 = ![];
        }
        if (b != '*') {
            var _0x23429a = new RegExp(b);
            if (_0x23429a['test'](_0x7c0612) == ![])
                _0x388455 = ![];
        }
        if (c != '*') {
            if (c > _0x29301c)
                _0x388455 = ![];
        }
        if (d != '*') {
            if (d < _0x29301c)
                _0x388455 = ![];
        }
        if (_0x388455)
            ans['push'](_0x2efd54);
    });
    ans['forEach'](function (_0x1cd4ff) {
        console['log'](_0x1cd4ff);
    });
}