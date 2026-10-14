(function(root){
const NAMES=["Fajr","Dhuhr","Asr","Maghrib","Isha"];
// today/tomorrow/yesterday: {Fajr:Date,...}. Returns window + progress.
function windowFor(now,yest,today,tom){
  const ev=[];
  for(const d of [yest,today,tom]) for(const n of NAMES) ev.push({name:n,t:d[n]});
  ev.sort((a,b)=>a.t-b.t);
  let i=ev.findIndex(e=>e.t>now);
  const prev=ev[i-1],next=ev[i];
  const progress=(now-prev.t)/(next.t-prev.t);
  return {prev,next,progress};
}
function passageIndex(progress,total){return Math.min(total-1,Math.max(0,Math.floor(progress*total)));}
const api={NAMES,windowFor,passageIndex};
if(typeof module!=="undefined")module.exports=api; else root.Logic=api;
})(this);
