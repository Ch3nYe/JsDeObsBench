'use strict';
(function (stdin) {
    var lIJidy = { 'XAeie': 'END_OF_TEXT' };
    var lines = stdin['toString']()['split']('\x0a');
    var result = function (word, data) {
        return data['filter'](function (v) {
            return v === word;
        })['length'];
    }(lines['shift']()['toLowerCase'](), lines['join']('')['split'](lIJidy['XAeie'])[0x0]['toLowerCase']()['trim']()['split']('\x20'));
    console['log'](result);
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));