window.addEventListener("scroll", function(){
    let header = document.querySelector('.menu');
    header.classList.toggle('rolagem', window.scrollY > 10);
    
    let anima = document.querySelector('.persona');
    anima.classList.toggle('rolagem', window.scrollY > 200); 
})

