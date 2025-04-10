let scrollContainer = document.querySelector(".cards");
let backBtn = document.getElementById("img1");
let nextBtn = document.getElementById("mg2");

scrollContainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft = scrollContainer.scrollLeft + evt.deltaY;
});

nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});
