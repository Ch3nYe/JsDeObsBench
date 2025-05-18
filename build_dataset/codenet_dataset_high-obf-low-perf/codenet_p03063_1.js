"use strict";
function I(s,f){this._s=s.split("\n");this._c=0;this._l=0;this._f=f||Number}I.prototype.a=function(){var l=this._s[this._l];if(!l)return;var t=l.trim().split(" ");var a=t[this._c];this._c++;if(t.length===this._c){this._c=0;this._l++}return this._f(a)};I.prototype.l=function(){var l=this._s[this._l];if(!l)return;this._c=0;this._l++;return l.split(" ").map(this._f)};

function main(input) {
  var o = new I(input,String);

  var n = Number(o.a());
  var s = o.a();

  var white = 0;
  var black = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === ".") white += 1;
  }

  let min = white;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      black += 1;
    } else {
      white -= 1;
    }

    if (black + white < min) {
      min = black + white;
    }
  }
  console.log(min);
}


main(require("fs").readFileSync("/dev/stdin", "utf8"));
