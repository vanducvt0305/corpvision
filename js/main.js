function animateToggle(){
    var bg_1 = document.getElementById("bg-1").classList;
    var bg_2 = document.getElementById("bg-2").classList;
    var bg_3 = document.getElementById("bg-3").classList;
    var bg_4 = document.getElementById("bg-4").classList;

    // bắtt theo thằng này thử slider-background 
    // cú pháp hnhu là document.getElementByClassName
    var bg = document.getElementsByClassName("slider-background")
    // xong check điều kiện cho nó if cái class nó có opacity 1 thì add cho nó class animation còn không remove
    
    
    var h1_b1 = document.querySelector(".bg-1 div h1");
    var p_b1 = document.querySelector(".bg-1 div p");
    var a_b1 = document.querySelector(".bg-1 div a");

    var h1_b2 = document.querySelector(".bg-2 div h1");
    var p_b2 = document.querySelector(".bg-2 div p");
    var a_b2 = document.querySelector(".bg-2 div a");

    var h1_b3 = document.querySelector(".bg-3 div h1");
    var p_b3 = document.querySelector(".bg-3 div p");
    var a_b3 = document.querySelector(".bg-3 div a");

    var h1_b4 = document.querySelector(".bg-4 div h1");
    var p_b4 = document.querySelector(".bg-4 div p");
    var a_b4 = document.querySelector(".bg-4 div a");

    if(bg.style.opacity === 1){
        h1_b1.classList.add("animate__flipInX")
    }

    // --------------------------------
    h1_b1.classList.toggle("animate__flipInX" , bg_1.contains("slick-active"))
    p_b1.classList.toggle("animate__fadeInDown" , bg_1.contains("slick-active"))
    a_b1.classList.toggle("animate__fadeInUp" , bg_1.contains("slick-active"))
    // --------------------------------
    h1_b2.classList.toggle("animate__fadeInDown" , bg_2.contains("slick-active"))
    p_b2.classList.toggle("animate__fadeInDown" , bg_2.contains("slick-active"))
    a_b2.classList.toggle("animate__fadeInDown" , bg_2.contains("slick-active"))
    // --------------------------------
    h1_b3.classList.toggle("animate__fadeInUp" , bg_3.contains("slick-active"))
    p_b3.classList.toggle("animate__fadeInUp" , bg_3.contains("slick-active"))
    a_b3.classList.toggle("animate__fadeInDown" , bg_3.contains("slick-active"))
    // --------------------------------
    h1_b4.classList.toggle("animate__flipInX" , bg_4.contains("slick-active"))
    p_b4.classList.toggle("animate__fadeInDown" , bg_4.contains("slick-active"))
    a_b4.classList.toggle("animate__fadeInUp" , bg_4.contains("slick-active"))
}