'use strict'
function Main(input){
  input=input.trim().split(/\s+/).map(x=>x-0);
  var N=input.shift(), M=input.shift();
  var p=input.splice(0,N);
  var nodes=[];
  for(let k=0;k<N;k++)
    nodes[k]=new Node(k);
  for(let k=0;k<M;k++)
    nodes[input[2*k]-1].merge(nodes[input[2*k+1]-1]);
  var counter=0;
  for(let k=0;k<N;k++)
    if(nodes[k].top()===nodes[p[k]-1].top())
      counter++;
  console.log(counter);
}

function Node(v){
  var t=this;
  t.value=v;
  t.parent=null;
  t.weight=1;
}

Node.prototype.top=function(){
  var t=this;
  var p=t.parent;
  if(!p)return t;
  else return p.top();  
}

Node.prototype.adopt=function(progeny){
  var t=this.top();
  var c=progeny.top();
  c.parent=t;
  t.weight+=c.weight;
}

Node.prototype.merge=function(b){
  var a=this.top();
  b=b.top();
  if(a===b)return;
  if(a.weight<b.weight)b.adopt(a);
  else a.adopt(b);
}

Main(require('fs').readFileSync('/dev/stdin','utf8'));
