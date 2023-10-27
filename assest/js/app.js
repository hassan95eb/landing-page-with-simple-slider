const imgIndicator = document.querySelectorAll(".img-indicator");
const titleSlider = document.querySelector('.h2-slider');
imgIndicator.forEach(element => {
    console.log(element)
    element.addEventListener('click', function(){
        const srcImgIndicator=element.attributes.src.textContent;
        const altImgIndicator=element.attributes.alt.textContent;
        titleSlider.innerHTML=altImgIndicator;
        document.querySelector('.main-img').attributes.src.textContent = srcImgIndicator;
    })
});