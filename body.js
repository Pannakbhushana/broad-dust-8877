

document.querySelector("#menu").addEventListener("click",fun);

let count=+0;

function fun(){
    count++;
    document.querySelector("#append").innerHTML=null;

    if(count%(+2)==+0){
        document.querySelector("#append").innerHTML=null;
    }

    else{
    let div= document.createElement("div")
        div.setAttribute("id","threadBox")

    let p1=document.createElement("p");
        p1.innerText="WHAT'S NEW?";
    let p2=document.createElement("p");
        p2.innerText="BEST SELLERS";
    let p3=document.createElement("p");
        p3.innerText="SHOP BY INGREDIENTS";
    let p4=document.createElement("p");
        p4.innerText="SHOP BY CONCERN";
    let p5=document.createElement("p");
        p5.innerText="ALL PRODUCTS";
    let p6=document.createElement("p");
        p6.innerText="HAIR CARE";
    let p7=document.createElement("p");
        p7.innerText="BODY CARE";
    let p8=document.createElement("p");
        p8.innerText="IKWI NUTRITION";
    let p9=document.createElement("p");
        p9.innerText="DOWNLOAD THE APP";
    let p10=document.createElement("p");
        p10.innerText="KNOW US BETTER";
    let p11=document.createElement("p");
        p11.innerText="PROFILE";
        
    let p12=document.createElement("p");
        p12.innerText="LOG IN";

    div.append(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12);
    document.querySelector("#append").append(div);
    }
}

document.querySelector(".swiper-wrapper").addEventListener("click",function(){
    location.reload();
});

