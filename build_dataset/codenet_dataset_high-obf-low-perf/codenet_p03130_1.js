"use strict";
function I(s,f){this._s=s;this._c=0;this._l=0;this._f=f||Number}I.prototype.a=function(){var l=this._s.split("\n")[this._l];if(!l)return;var t=l.trim().split(" ");var a=t[this._c];this._c++;if(t.length===this._c){this._c=0;this._l++}return this._f(a)};I.prototype.l=function(){var l=this._s.split("\n")[this._l];this._c=0;this._l++;return l.split(" ").map(this._f)};

// TODO test and remove comment
function main(input) {
  const o = new I(input);

  const arr = Array(4).fill(0);
  for (let i=0;i<3;i++) {
    let a = o.a();
    let b = o.a();
    arr[a-1]++;
    arr[b-1]++;
  }

  if (arr.sort((a,b) => a-b).join(" ") === "1 1 2 2") {
    console.log("YES")
  } else {
    console.log("NO")
  }
}


main(require("fs").readFileSync("/dev/stdin", "utf8"));
