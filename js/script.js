
// ARRAY DELLE IMMAGGINI
let images= ['img/01.webp','img/02.webp','img/03.webp','img/04.webp','img/05.webp']

// VARIABILE CHE SELEZIONI LA CLASSE SLIDER
let sliderElement = document.querySelector('.slider');

// VARIABILE DEL CONTENUTO SLIDER
let slider_content= "";

// CICLO FOR CON L'ARRAY
for (i =0; i < images.length; i++) {

    // VARIABILE CON L'INDICE DELL'ARRAY
    current_img = images[i];


    slider_content += `
    <div class="slide">
        <img  src=" ${current_img}" alt="">
    </div>`
    
    
}

sliderElement.innerHTML = slider_content

let all_slide= document.getElementsByClassName('slide')

let slide_active = 0;
all_slide[slide_active].classList.add('active')


let back_button = document.querySelector('.back')
let next_button = document.querySelector('.next')

back_button.addEventListener('click', function() {

    if (slide_active > 0) {
        all_slide[slide_active].classList.remove('active');
        slide_active--;
        all_slide[slide_active].classList.add('active');
        
    }
    
    
})

next_button.addEventListener('click', function() {
    
    if (slide_active < images.length -1) {
        all_slide[slide_active].classList.remove('active');
        slide_active++;
        all_slide[slide_active].classList.add('active');
        
    }
    
})





