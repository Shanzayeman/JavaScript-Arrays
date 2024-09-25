let sis=["sani" ,"hani" , "alham"];
document.getElementById('demo').innerHTML=sis;
function myLove(){
    sis.push("anza");
    document.getElementById('demo').innerHTML=sis;
};
let khota=["toheed" ,"uzair" , "usama"];
document.getElementById('demo1').innerHTML=khota;
function myTouch(){   
document.getElementById('demo1').innerHTML=(khota[khota.length]="YOU");
};
document.getElementById('demo2').innerHTML="Check if it is Array:" +Array.isArray(khota);
document.getElementById('demo3').innerHTML="Check if it is Array:" +(sis instanceof Array);