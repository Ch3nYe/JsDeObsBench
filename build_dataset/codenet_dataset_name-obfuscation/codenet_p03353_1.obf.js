function Main(_0x5bac88) {
    _0x5bac88 = _0x5bac88['split']('\x0a');
    var _0xd4a7ce = +_0x5bac88[0x1];
    _0x5bac88 = _0x5bac88[0x0];
    var _0x320919 = 0x60;
    var _0x26adcb = _0x5bac88['length'];
    var _0x5eb437 = {};
    var _0x5545dd;
    _0x28e2f1:
        while (_0x320919 <= 0x7a) {
            _0x320919++;
            var _0x1c7223 = _0x5bac88['indexOf'](String['fromCharCode'](_0x320919));
            while (_0x1c7223 !== -0x1) {
                for (_0x5545dd = 0x0; _0x5545dd < _0xd4a7ce; _0x5545dd++) {
                    if (_0x1c7223 + _0x5545dd >= _0x26adcb)
                        break;
                    _0x5eb437[_0x5bac88['slice'](_0x1c7223, _0x1c7223 + _0x5545dd + 0x1)] = 0x1;
                }
                _0x1c7223 = _0x5bac88['indexOf'](String['fromCharCode'](_0x320919), _0x1c7223 + 0x1);
            }
            _0x5545dd = 0x0;
            var _0x29507d = [];
            for (i in _0x5eb437) {
                _0x5545dd++;
                _0x29507d['push'](i);
            }
            if (_0x5545dd >= _0xd4a7ce) {
                _0x29507d['sort']();
                console['log'](_0x29507d[_0xd4a7ce - 0x1]);
                break _0x28e2f1;
            }
        }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));