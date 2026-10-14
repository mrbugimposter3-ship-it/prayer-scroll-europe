const a=require('assert'),{windowFor,passageIndex}=require('./logic');
const day=(d)=>{const m=(h,mi)=>new Date(2026,9,d,h,mi);return{Fajr:m(5,0),Dhuhr:m(12,0),Asr:m(15,30),Maghrib:m(18,30),Isha:m(20,0)}};
let w=windowFor(new Date(2026,9,14,13,45),day(13),day(14),day(15));
a.equal(w.prev.name,"Dhuhr");a.equal(w.next.name,"Asr");a.ok(Math.abs(w.progress-0.5)<1e-9);
w=windowFor(new Date(2026,9,14,23,0),day(13),day(14),day(15)); // Isha->Fajr across midnight (9h)
a.equal(w.prev.name,"Isha");a.equal(w.next.name,"Fajr");a.equal(w.next.t.getDate(),15);a.ok(Math.abs(w.progress-3/9)<1e-9);
w=windowFor(new Date(2026,9,15,2,0),day(14),day(15),day(16));
a.equal(w.prev.name,"Isha");a.equal(w.prev.t.getDate(),14);a.ok(Math.abs(w.progress-6/9)<1e-9);
w=windowFor(new Date(2026,9,14,12,0),day(13),day(14),day(15));a.equal(w.prev.name,"Dhuhr");a.equal(w.progress,0);
a.equal(passageIndex(0,4686),0);a.equal(passageIndex(0.999999,4686),4685);a.equal(passageIndex(1,4686),4685);a.equal(passageIndex(0.5,100),50);
console.log("all tests passed");
