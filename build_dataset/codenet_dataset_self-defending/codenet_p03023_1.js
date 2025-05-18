'use strict';
(function(input){
  input=input.trim()-0;
  console.log(180*(input-2));
})(require('fs').readFileSync('/dev/stdin','utf8'));
