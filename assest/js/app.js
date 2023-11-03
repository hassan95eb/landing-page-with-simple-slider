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
const editBtn = document.querySelector('.btn-edit');
const popUp = document.querySelector('.popup');
editBtn.addEventListener('click',function(){
    popUp.classList.toggle('active');
    document.body.classList.toggle('active');
})