



document.querySelector("#menu").addEventListener("click",fun);

let count=+0;

function fun(){
    document.querySelector("#menu>div").innerHTML=null;

    document.querySelector("#cross").hidden=false;


    document.querySelector("#slide_container").innerHTML=null;
    count++;

    if(count%(+2)==+0){
        location.reload();
        document.querySelector("#slide_container").innerHTML=null;
    }
    else{
    let div= document.createElement("div");
        div.setAttribute("id","append");

    let div0= document.createElement("div");
        div0.setAttribute("id","barPeraDiv");
    let p0=document.createElement("P");
        p0.innerText="Discounts";

    let p00=document.createElement("P");
        p00.innerText="New Products";

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

    div0.append(p0,p00,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12);
    div.append(div0);
    document.querySelector("#slide_container").append(div);

    let div2=document.createElement("div");
        div2.setAttribute("id","barImageContainer");

   let img= document.createElement("img");
   img.setAttribute("src","https://cdn.shopify.com/s/files/1/0361/8553/8692/files/vit_c_3_2.png?v=1663651282");
   img.setAttribute("id","barImage")

   div2.append(img)
   document.querySelector("#append").append(div2);
    }
}




    
document.querySelector(".hv_nav").addEventListener("click",function(){
        document.querySelector("#mysearch>button").hidden=false;
})