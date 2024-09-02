let btn1=document.getElementById("mybtn");
let btn2=document.getElementById("mybtn1");
let copycode=document.querySelector(".copycode");
let rgb1="#104d7a";
let rgb2="#803793";

const hexavalue=()=>{
    let myhexavalue="0123456789abcdef";
    let color="#"
    //console.log(myhexavalue[11]);
    for(let i=0; i<6; i++){
     color=color+myhexavalue[ Math.floor(Math.random()*16)];
    }
    return color;
}
const hendelbtn2=()=>{
     rgb2=hexavalue();
    //console.log(rgb2);
    btn2.innerText=rgb2
   
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`;
    copycode.innerHTML=`background-image:linear-gradient(to right,${rgb1},${rgb2})`;

}

const hendelbtn1=()=>{
     rgb1=hexavalue();
    //console.log(rgb1);
    btn1.innerText=rgb1
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`;
    copycode.innerHTML=`background-image:linear-gradient(to right,${rgb1},${rgb2})`;
}
copycode.addEventListener("click",()=>{
    navigator.clipboard.writeText(copycode.innerText);
})

btn1.addEventListener("click",hendelbtn1);
btn2.addEventListener("click",hendelbtn2);