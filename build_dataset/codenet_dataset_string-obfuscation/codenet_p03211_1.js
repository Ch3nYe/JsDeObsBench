var GET = (function(){
  function f(s){return new g(s);}
  function g(s){this._s=s.trim().split("\n");this._y=0;}
  g.prototype.a = function(f){
    var s = this._s, y = this._y, r;
    if(typeof s[y] === "string")s[y]=s[y].split(" ").reverse();
    r = s[y].pop();
    if(!s[y].length)this._y++;
    return f?r:+r;
  }
  g.prototype.l = function(f){
    var s=this._s[this._y++].split(" ");return f?s:s.map(a=>+a);
  }
  g.prototype.m = function(n,f){
    var r=this._s.slice(this._y,this._y+=n).map(a=>a.split(" "));
    return f?r:r.map(a=>a.map(a=>+a));
  }
  g.prototype.r = function(n,f){
    var r = this._s.slice(this._y,this._y+=n);
    return f?r:r.map(a=>+a);
  }
  return f;
})();
var o=GET(require("fs").readFileSync("/dev/stdin","utf8"));

console.log(main());
function main(){
  var s = o.a(1);
  var ans = 999;
  for(var i = 2; i < s.length; i++){
    var t = s[i-2] + s[i-1] + s[i];
    t = Math.abs(t - 753);
    if(ans > t)ans = t;
  }
  return ans;
}