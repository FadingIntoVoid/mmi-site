function toggleMenu(){
const menu=document.getElementById("menu");
menu.style.display=menu.style.display==="flex"?"none":"flex";
}

function scrollToSection(id){
document.getElementById(id)
.scrollIntoView({behavior:"smooth"});
toggleMenu();
}

lucide.createIcons();

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll(".fade")
.forEach(el=>observer.observe(el));

let slideIndex=0;
const slides=document.querySelector(".slides");

function mudarSlide(dir){
slideIndex+=dir;
const total=document.querySelectorAll(".slide").length;

if(slideIndex<0) slideIndex=total-1;
if(slideIndex>=total) slideIndex=0;

slides.style.transform=`translateX(-${slideIndex*100}%)`;
}

setInterval(()=>mudarSlide(1),4000);

function closeWa(){
document.querySelector(".wa-message").style.display="none";
}