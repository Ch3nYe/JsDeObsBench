process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
function Main(_0x993d56) {
    var _0x5c4dd3 = _0x993d56['split']('\x0a');
    var _0x4ce874 = _0x5c4dd3[0x0]['split']('\x20');
    var _0x771db = _0x5c4dd3[0x1]['split']('\x20');
    var _0x3ffa01 = _0x5c4dd3[0x2]['split']('\x20');
    var _0x529017 = _0x5c4dd3[0x3]['split']('\x20');
    var _0x2dee4a = Number(_0x4ce874[0x0]);
    var _0x18b353 = Number(_0x771db[0x0]);
    var _0x4e8c98 = Number(_0x3ffa01[0x0]);
    var _0x250841 = Number(_0x529017[0x0]);
    var _0x1b042e = 'initial_answer';
    if (_0x2dee4a < _0x18b353)
        console['log'](_0x4e8c98 * _0x2dee4a);
    else
        console['log'](_0x4e8c98 * _0x18b353 + (_0x2dee4a - _0x18b353) * _0x250841);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));