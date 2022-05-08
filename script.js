let sup = document.getElementById("sup");
let eq = document.getElementById("eq");
let dv = document.getElementById("dv");
let icon = document.getElementById("ic");
let ch = document.getElementById("ch");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");

let m1 = document.getElementById("m1");
let m2 = document.getElementById("m2");
let m3 = document.getElementById("m3");
let m4 = document.getElementById("m4");
let m5 = document.getElementById("m5");
let m6 = document.getElementById("m6");
let m7 = document.getElementById("m7");
let m8 = document.getElementById("m8");
let m9 = document.getElementById("m9");
let m10 = document.getElementById("m10");
let m11 = document.getElementById("m11");
let m12 = document.getElementById("m12");
let m13 = document.getElementById("m13");
let m14 = document.getElementById("m14");
let m15 = document.getElementById("m15");
let m16 = document.getElementById("m16");
let m17 = document.getElementById("m17");
let m18 = document.getElementById("m18");

let store = document.getElementById("st");

console.log(store)
sup.onclick=function(){
    c1.style.opacity='1'
    c1.style.zIndex = '1'

    c2.style.opacity='0'
    c2.style.zIndex = '0'

    c3.style.opacity='0'
    c3.style.zIndex = '0'
    m1.onclick = function(){
        console.log("done")
        location.href = "#"
    }
}
dv.onclick=function(){
    c1.style.opacity='0'
    c1.style.zIndex = '0'

    c2.style.opacity='1'
    c2.style.zIndex = '1'

    c3.style.opacity='0'
    c3.style.zIndex = '0'
}
eq.onclick=function(){
    c1.style.opacity='0'
    c1.style.zIndex = '0'

    c2.style.opacity='0'
    c2.style.zIndex = '1'

    c3.style.opacity='1'
    c3.style.zIndex = '1'
}