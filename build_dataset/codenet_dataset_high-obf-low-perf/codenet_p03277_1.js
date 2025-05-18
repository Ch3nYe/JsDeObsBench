function gets(str){
  this._s = str.split("\n");
  this._y = 0;
};
gets.prototype = {
  a: function(f){
    var s = this._s, y = this._y, r;
    if(typeof s[y] === "string")s[y] = s[y].split(" ").reverse();
    r = s[y].pop();
    if(!s[y].length)this._y++;
    return f?r:+r;
  },
  l: function(f){
    var s = this._s[this._y++].split(" ");
    return f?s:s.map(a=>+a);
  },
  m: function(n,f){
    var s = this._s, y = this._y, r = [], i = 0;
    if(f)for(;i < n; i++)r[i] = s[y+i].split(" ");
    else for(;i < n; i++)r[i] = s[y+i].split(" ").map(a=>+a);
    this._y += n;
    return r;
  },
};
var o=new gets(require("fs").readFileSync("/dev/stdin","utf8"));

console.log(main());
function main(){
  var n = o.a();
  var a = o.l();
  var b = [];
  if(n <= 2)return Math.max(...a);
  for(var i = 0; i < n-1; i++)a[n+i] = Math.max(a[i],a[i+1]);
  return middle(a);

  function middle(a){
    a.sort((a,b)=>a-b);
    return a[a.length>>1];
  }
}