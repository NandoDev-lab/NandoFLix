$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        200:{
            items:3
        },
        600:{
            items:6
        },
        1000:{
            items:8
        }
    }
})

function assistir(){
    let fundo = document.getElementsByClassName("wallpaper");
    fundo.style.backgroudImage=none;
    let player = document.getElementById("filme");
    player.style.opacity = 100;
    
}