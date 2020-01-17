(function () {


    let img = document.querySelector("figure img");
    let imgSrc = img.src;
    let imgHover = img.getAttribute("data-hover");

    img.addEventListener("mouseenter", function(){
        img.setAttribute("src", imgHover);
    });

    img.addEventListener("mouseout", function(){
        img.setAttribute("src", imgSrc);
    })
    
    

})();
