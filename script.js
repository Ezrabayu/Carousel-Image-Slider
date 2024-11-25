// get element html

// container for all image
const carouselSlide = document.querySelector('.carousel-slide')

const carouselImages = document.querySelectorAll('.carousel-slide img')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

const indicators = document.querySelectorAll('.indicator')

// state current index
let currentIndex = 0

const totalImages = carouselImages.length

// var to save interval for autoslide
let autoSlideInterval;

function updateCarousel() {
    carouselSlide.style.transform = `translateX(${-currentIndex *100}%)`

    // update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex)
    })
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages
    updateCarousel()
    resetAutoSlide()
}

function prevSlide () {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages
    updateCarousel()
    resetAutoSlide()
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval)

    autoSlideInterval = setInterval(nextSlide, 5000)
}

// add event listener for next
nextBtn.addEventListener('click', nextSlide)

// add event listener for prev
prevBtn.addEventListener('click', prevSlide)

// slide for refresh page
autoSlideInterval = setInterval(nextSlide, 5000)

// add event listener for indicators
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index
        updateCarousel()
        resetAutoSlide()
    })
})