function animateToggle(){
    var bg_1 = document.getElementById("bg-1").classList;
    var bg_2 = document.getElementById("bg-2").classList;
    var bg_3 = document.getElementById("bg-3").classList;
    var bg_4 = document.getElementById("bg-4").classList;
    
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