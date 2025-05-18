"use strict";
function I(s,f){this._s=s.split("\n");this._c=0;this._l=0;this._f=f||Number}I.prototype.a=function(){var l=this._s[this._l];if(!l)return;var t=l.trim().split(" ");var a=t[this._c];this._c++;if(t.length===this._c){this._c=0;this._l++}return this._f(a)};I.prototype.l=function(){var l=this._s[this._l];if(!l)return;this._c=0;this._l++;return l.split(" ").map(this._f)};module.exports=I;

function main(input) {
  const o = new I(input);

  const N = o.a();
  const M = o.a();

  const adj = [];
  for (let i = 1; i <= N; i++) {
    adj[i] = [];
  }

  for (let i = 0; i < M; i++) {
    let ai = o.a();
    let bi = o.a();
    adj[ai].push(bi);
    adj[bi].push(ai);
  }

  let flag1 = false;
  let flag2 = true;
  for (let i = 1; i <= N; i++) {
    if (adj[i].length === 6) {
      flag1 = true;
    }

    if (adj[i].length % 2 !== 0) {
      flag2 = false;
    }
  }

  console.log((flag1 && flag2) ? "Yes" : "No");

}


main(require("fs").readFileSync("/dev/stdin", "utf8"));
