var s = require('fs')['readFileSync']('/dev/stdin', 'utf8');
console['log'](s['trim']()['match'](/^A?KIHA?BA?RA?$/) ? 'YES' : 'NO');