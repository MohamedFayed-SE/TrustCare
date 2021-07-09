var lightboxcontainer=document.getElementById("lightbox-container");
var lightboxitem= document.getElementById("lightbox-item");
var imgs=Array.from(document.querySelectorAll(".item img"));
var closeBtn=document.getElementById("closeBtn")
var nextBtn=document.getElementById("nextBtn")
var prevBtn=document.getElementById("prevBtn")
var currentindex=0;

 


for(var i=0;i<imgs.length;i++){
    imgs[i].addEventListener("click",function(eventinfo){
        currentindex=imgs.indexOf(eventinfo.target);
        console.log(currentindex)
        var imgsrc=eventinfo.target.getAttribute("src")
        console.log(imgsrc)
        lightboxitem.style.backgroundImage="url("+imgsrc+")";
        lightboxcontainer.style.display="flex";



    })
}

function nextslide(){
    currentindex++;
    if(currentindex==imgs.length){
        currentindex=0;
    }
    var imgsrc=imgs[currentindex].getAttribute("src");
    lightboxitem.style.backgroundImage="url("+imgsrc+")";

}
nextBtn.addEventListener("click",nextslide);



function prevslide(){
    currentindex--;
    if(currentindex<0){
        currentindex=imgs.length-1;
    }
    var imgsrc=imgs[currentindex].getAttribute("src");
    lightboxitem.style.backgroundImage="url("+imgsrc+")";

}
prevBtn.addEventListener("click",prevslide);


function closeslide(){
    lightboxcontainer.style.display="none";
}
closeBtn.addEventListener("click",closeslide);




if(Event.key=="ArrowRight"){
    nextslide();
}
else if(Event.key=="ArrowLeft"){
    prevslide();
}
else if(Event.key=="Backspace"){
    closeslide();
}
