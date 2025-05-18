'use strict';
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var minvs = input['trim']()['split']('\x0a');
var minv;
while (minv = minvs['shift']()) {
    var floor = Math['ceil'](Math['pow'](parseFloat(minv), 0x2) / 0x62 + 0x1);
    console['log'](floor);
}