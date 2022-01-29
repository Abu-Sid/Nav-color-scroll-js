let navDiv = document.getElementById("navDiv");

window.onscroll = function() {  //when the page is scrolled down, the navbar will be fixed  to the top of the page  (this is the same as the sticky navbar)                                                                                             
    if (window.pageYOffset > 100) {
        navDiv.classList.add("nav-bg-scroll");

    } else {
        navDiv.classList.remove("nav-bg-scroll");
    }
}
